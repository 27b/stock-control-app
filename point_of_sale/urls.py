from django.urls import path
from rest_framework import routers
from . import views


router = routers.SimpleRouter()

router.register(r"category", views.CategoryView, basename="category")
router.register(r"item", views.ItemView, basename="item")
router.register(r"transaction", views.TransactionView, basename="transaction")

urlpatterns = [
    path('login/', views.LoginView.as_view(), name='login'),
    path('user/', views.UserListView.as_view()),
    path('user/<pk>', views.UserDetailView.as_view())
]

urlpatterns += router.urls
