from django.db import models
from django.contrib.postgres.fields import ArrayField


class Category(models.Model):
    title = models.CharField(max_length=32, default="", unique=True)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.title


class Item(models.Model):
    category_id = models.ForeignKey(Category, on_delete=models.DO_NOTHING)
    visibility = models.BooleanField(default=False)
    title = models.CharField(max_length=64)
    image = models.ImageField(upload_to='images/item/', null=True, blank=True)
    unit_price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    last_modified = models.DateField(auto_now=True)
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Transaction(models.Model):
    price = models.DecimalField(max_digits=10, decimal_places=2)
    items = ArrayField(models.JSONField())
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id + ": " + self.datetime)
