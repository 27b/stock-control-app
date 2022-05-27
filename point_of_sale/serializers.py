from .models import Item, Transaction
from rest_framework import serializers


class ItemSerialzier(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = [
            "id",
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