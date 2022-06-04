from django.views.generic import View
from django.http import HttpResponse
from rest_framework import viewsets, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response

from common.models import Category, Item, Transaction

from .permissions import PointOfSalePermission
from .serializers import CategorySerializer, ItemSerializer, TransactionSerializer


class IndexView(View):

    def get(self, request):
        return HttpResponse("Hello, World!")


class CategoryView(viewsets.ModelViewSet):
    authentication_classes = [SessionAuthentication]
    permission_classes = [PointOfSalePermission]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    http_method_names = ["get"]


class ItemView(viewsets.ModelViewSet):
    authentication_classes = [SessionAuthentication]
    permission_classes = [PointOfSalePermission]
    queryset = Item.objects.filter(visibility=True).all()
    serializer_class = ItemSerializer
    http_method_names = ["get"]


class TransactionView(viewsets.ModelViewSet):
    authentication_classes = [SessionAuthentication]
    permission_classes = [PointOfSalePermission]
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    http_method_names = ["post"]

    def create(self, request):
        transaction_data = self.serializer_class(data=request.data)
        if transaction_data.is_valid():
            transaction = Transaction(**transaction_data.validated_data)
            transaction_integrity = transaction.check_transaction_integrity()
            if transaction_integrity == []:
                transaction.save()
                response = transaction_data
                return Response(response, status=status.HTTP_201_CREATED)
            return Response({
                'errors': transaction_integrity,
                'data': transaction.validated_data
            }, status=status.HTTP_404_NOT_FOUND)
        return Response({
            'status': 'Bad Request',
            'message': 'Account could not be created with received data'
        }, status=status.HTTP_400_BAD_REQUEST)
