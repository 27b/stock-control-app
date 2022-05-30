from django.views.generic import View
from django.http import HttpResponse, HttpRequest
from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import Category, Item, Transaction
from .serializers import CategorySerializer, ItemSerializer, TransactionSerializer


class IndexView(View):

    def get(self, request: HttpRequest) -> HttpResponse:
        return HttpResponse(f"Hello World!\n{self}")


class CategoryView(viewsets.ModelViewSet):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    http_method_names = ["get", "post"]


class ItemView(viewsets.ModelViewSet):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAdminUser]
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    http_method_names = ["get", "post"]


class TransactionView(viewsets.ModelViewSet):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    http_method_names = ["get"]
