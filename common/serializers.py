from .models import Category, Item, Transaction
from rest_framework import serializers


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = [
            "id",
            "title"
        ]


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = [
            "id",
            "category_id",
            "title",
            "visibility",
            "image",
            "unit_price",
            "quantity",
            "datetime",
            "last_modified"
        ]


class TransactionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Transaction
        fields = [
            "price",
            "items",
            "datetime"
        ]
