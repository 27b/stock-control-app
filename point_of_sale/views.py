from rest_framework import viewsets, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response

from common.models import *
from common.serializers import *
from common.permissions import *


class CategoryView(viewsets.ModelViewSet):
    authentication_classes = [SessionAuthentication]
    permission_classes = [
        PointOfSaleGetPermission | InventoryGetPermission | AdminGetPermission |
        InventoryPostPermission  | AdminPostPermission    |
        InventoryPutPermission   | AdminPutPermission     |
        AdminDeletePermission
    ]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    http_method_names = ["get", "post", "put", "delete"]


class ItemView(viewsets.ModelViewSet):
    authentication_classes = [SessionAuthentication]
    permission_classes = [
        PointOfSaleGetPermission | InventoryGetPermission | AdminGetPermission |
        InventoryPostPermission  | AdminPostPermission    |
        InventoryPutPermission   | AdminPutPermission     |
        AdminDeletePermission
    ]
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    http_method_names = ["get", "post", "put", "delete"]


class TransactionView(viewsets.ModelViewSet):
    authentication_classes = [SessionAuthentication]
    permission_classes = [
        AdminGetPermission        |
        PointOfSalePostPermission | AdminPostPermission
    ]
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    http_method_names = ["get", "post"]

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
