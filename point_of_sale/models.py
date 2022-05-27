from django.db import models
from django.contrib.postgres.fields import ArrayField


class Category(models.Model):
    models.CharField(max_length=32, unique=True)

    class Meta:
        verbose_name_plural = 'Categories'


class Item(models.Model):
    category_id = models.OneToOneField(Category, on_delete=models.SET_NULL)
    visibility = models.BooleanField(default=False)
    title = models.CharField(min_length="3", max_length=64)
    image = models.ImageField(upload_to='images/item/')
    unit_price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    last_modified = models.DateField(auto_now=True)
    datetime = models.DateTimeField(auto_now_add=True)


class Transaction(models.Model):
    price = models.DecimalField(max_digits=10, decimal_places=2)
    items = ArrayField(models.JSONField(default={}))
    datetime = models.DateTimeField(auto_now_add=True)
