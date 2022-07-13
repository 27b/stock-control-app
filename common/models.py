from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField

from .user import CustomUserManager


class CustomUser(AbstractUser):
    ROLES = [
        ("AD", "Administration"),
        ("PS", "Point of Sale")
    ]

    role = models.CharField(max_length=2, choices=ROLES, null=True, blank=True)
    objects = CustomUserManager()


class Category(models.Model):
    title = models.CharField(max_length=32, default="", unique=True)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.title


class Item(models.Model):
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
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
    items = ArrayField(models.JSONField())  # {"item_id", "quantity", "unit_price"}
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id + ": " + self.datetime)

    def check_transaction_integrity(self) -> list[dict]:
        """
        Checks if all items in a transaction are valid.
        """
        messages = []
        for item in self.items:
            item_in_db = Item.query.filter(Item.id == item.id).first()

            # Check if the item exists and is available to the user.
            if not item_in_db or not item_in_db.visibility:
                text = f"{item.title} not available."
                messages += {"error": text}

            # Check if the quantity of products is available.
            if item.quantity < 0:
                text = f"The quantity of {item.title} must be positive."
                messages += {"error": text}

            if item.quantity > item_in_db.quantity:
                db_quantity = item_in_db.quantity
                text = f"{item.title} only has {db_quantity} units in stock."
                messages += {"error": text}

            # Check if the price is correct.
            if item.unit_price != item_in_db.unit_price:
                text = f"{item.title} has the wrong price."
                messages += {"error": text}

        return messages
