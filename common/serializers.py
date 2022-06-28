from .models import CustomUser, Category, Item, Transaction
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    """User Serializer, returns a dict or a list of dicts.
    
    Returns:
        dict: with id, role
    """
    class Meta:
        model = CustomUser
        fields = [
            "id",
            "role",
            "username",
            "email"
        ]


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    """Category Serializer, returns a dict or a list of dicts.
    
    Returns:
        dict: with id, title
    """
    class Meta:
        model = Category
        fields = [
            "id",
            "title"
        ]


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    """Item Serializer, returns a dict or a list of dicts.
    
    Returns:
        dict: with id, category_id, title, visibility, image,
        unit_price, quantity, datetime, last_modified 
    """ 
    category = serializers.PrimaryKeyRelatedField(
        many=False,
        read_only=False,
        queryset=Category.objects.all()
    )

    class Meta:
        model = Item
        fields = [
            "id",
            "category",
            "title",
            "visibility",
            "image",
            "unit_price",
            "quantity",
            "datetime",
            "last_modified"
        ]


class TransactionSerializer(serializers.HyperlinkedModelSerializer):
    """Transaction Serializer, returns a dict or a list of dicts.
    
    Returns:
        dict: with id, price, items, datetime
    """
    class Meta:
        model = Transaction
        fields = [
            "price",
            "items",
            "datetime"
        ]
