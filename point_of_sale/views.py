from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

from common.models import *
from common.serializers import *
from common.permissions import *


class LoginView(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        login_serializer = self.serializer_class(
            data = request.data,
            context = {'request': request}
        )
        if login_serializer.is_valid():
            user = login_serializer.validated_data['user']
            user_serialized = UserSerializer(user).data
            if user.is_active:
                token, created = Token.objects.get_or_create(user=user)
                if created:
                    token.delete()
                return Response({
                    'token': token.key,
                    'user': user_serialized
                }, status=status.HTTP_201_CREATED)
            return Response({
                'error': 'User don\'t start session.'
            }, status=status.HTTP_401_UNAUTHORIZED)
        return Response({
            'error': 'Wrong username or password.'
        }, status=status.HTTP_400_BAD_REQUEST)


class UserDetailView(RetrieveAPIView):
    authentication_classes = [SessionAuthentication, TokenAuthentication]
    permission_classes = [IsUserPermission]
    http_method_names = ["get"]

    def get(self, request, pk=None):
        queryset = CustomUser.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        self.check_object_permissions(request, user)
        serializer = UserSerializer(user)
        return Response(serializer.data)

 
class UserListView(ListCreateAPIView):
    authentication_classes = [SessionAuthentication, TokenAuthentication]
    permission_classes = [AdminGetPermission]
    serializer_class = UserSerializer
    http_method_names = ["get"]
    queryset = CustomUser.objects.all()

    def list(self, request):
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)


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
