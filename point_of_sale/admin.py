from django.contrib import admin
from .models import Category, Item, Transaction, CustomUser


admin.site.register(Category)
admin.site.register(Item)
admin.site.register(Transaction)
admin.site.register(CustomUser)
