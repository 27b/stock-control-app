from .models import CustomUser, Category, Item, Transaction
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    """User Serializer, returns a dict or a list of dicts.
    
    Returns:
        dict: with id, role
    """
    password = serializers.CharField(write_only=True, required=False, min_length=8)

    def create(self, validated_data):
        new_user = CustomUser.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            role=validated_data['role'],
            first_name='',
            last_name=''
        )
        new_user.set_password(validated_data['password'])
        new_user.save()
        return new_user
    
    def update(self, instance, validated_data):
        instance.username = validated_data.get('username')
        instance.email = validated_data.get('email')
        instance.role = validated_data.get('role')
        instance.save()
        return instance

    class Meta:
        model = CustomUser
        fields = [
            "id",
            "role",
            "username",
            "email",
            "password"
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
            "id",
            "price",
            "items",
            "datetime"
        ]
