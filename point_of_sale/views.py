from rest_framework import viewsets, status
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

from common.models import *
from common.serializers import *
from common.permissions import *


class LoginView(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        user_data = {
            'username': user.username,
            'role': user.role, 
            'email': user.email
        }
        return Response({'token': token.key, 'user': user_data})


class UserView(viewsets.ModelViewSet):
    authentication_classes = [SessionAuthentication, TokenAuthentication]
    permission_classes = [
        AdminGetPermission | AdminPostPermission |
        AdminPutPermission | AdminDeletePermission
    ]
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    http_method_names = ["get", "post", "put", "delete"]


class CategoryView(viewsets.ModelViewSet):
    authentication_classes = [SessionAuthentication, TokenAuthentication]
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
    authentication_classes = [SessionAuthentication, TokenAuthentication]
    permission_classes = [
        PointOfSaleGetPermission | InventoryGetPermission | AdminGetPermission|
        InventoryPostPermission  | AdminPostPermission    |
        InventoryPutPermission   | AdminPutPermission     |
        AdminDeletePermission
    ]
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    http_method_names = ["get", "post", "put", "delete"]


class TransactionView(viewsets.ModelViewSet):
    authentication_classes = [SessionAuthentication, TokenAuthentication]
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
