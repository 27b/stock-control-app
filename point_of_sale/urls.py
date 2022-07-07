from django.urls import path
from rest_framework import routers
from . import views


router = routers.SimpleRouter()

router.register(r"category", views.CategoryView, basename="category")
router.register(r"item", views.ItemView, basename="item")
router.register(r"transaction", views.TransactionView, basename="transaction")
router.register(r"user", views.UserView, basename="user")

urlpatterns = [
    path('login/', views.LoginView.as_view(), name='login')
]

urlpatterns += router.urls
