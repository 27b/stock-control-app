from django.urls import path
from rest_framework import routers
from . import views


router = routers.SimpleRouter()
router.register(r"category", views.CategoryView, basename="category")
router.register(r"item", views.ItemView, basename="item")
router.register(r"transaction", views.TransactionView, basename="transaction")

urlpatterns = [
    path('', views.IndexView.as_view(), name="Index")
]

urlpatterns += router.urls
