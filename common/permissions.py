from rest_framework.permissions import BasePermission


class IsUserOrReadOnlyPermission(BasePermission):
    """
    Check if the user is owner and allow methods, else only GET.
    """
    def has_object_permission(self, request, view, obj) -> bool:
        if request.method == "GET":
            return True
        return request.user == obj


class IsUserPermission(BasePermission):
    """
    Check if the profile is of the user.
    """
    def has_permission(self, request, view) -> bool:      
        return True

    def has_object_permission(self, request, view, obj):
        return request.user == obj


class PointOfSaleGetPermission(BasePermission):
    """
    Check if the user have the rol of Point of Sale and the method is GET.
    """
    def has_permission(self, request, view) -> bool:
        if bool(request.user) and request.user.role == "PS" and \
            request.method == "GET":
            return True
        return False


class PointOfSalePostPermission(BasePermission):
    """
    Check if the user have the rol of Point of Sale and the method is POST.
    """
    def has_permission(self, request, view) -> bool:
        if bool(request.user) and request.user.role == "PS" and \
            request.method == "POST":
            return True
        return False


class PointOfSalePutPermission(BasePermission):
    """
    Check if the user have the rol of Point of Sale and the method is PUT.
    """
    def has_permission(self, request, view) -> bool:
        if bool(request.user) and request.user.role == "PS" and \
            request.method == "PUT":
            return True
        return False


class PointOfSaleDeletePermission(BasePermission):
    """
    Check if the user have the rol of Point of Sale and the method is DELETE.
    """
    def has_permission(self, request, view) -> bool:
        if bool(request.user) and request.user.role == "PS" and \
            request.method == "DELETE":
            return True
        return False


class InventoryGetPermission(BasePermission):
    """
    Check if the user have the rol of Inventory and the method is GET.
    """
    def has_permission(self, request, view) -> bool:
        if bool(request.user) and request.user.role == "IM" and \
            request.method == "GET":
            return True
        return False


class InventoryPostPermission(BasePermission):
    """
    Check if the user have the rol of Inventory and the method is POST.
    """
    def has_permission(self, request, view) -> bool:
        if bool(request.user) and request.user.role == "IM" and \
            request.method == "POST":
            return True
        return False


class InventoryPutPermission(BasePermission):
    """
    Check if the user have the rol of Inventory and the method is PUT.
    """
    def has_permission(self, request, view) -> bool:
        if bool(request.user) and request.user.role == "IM" and \
            request.method == "PUT":
            return True
        return False


class InventoryDeletePermission(BasePermission):
    """
    Check if the user have the rol of Inventory and the method is DELETE.
    """
    def has_permission(self, request, view) -> bool:
        if bool(request.user) and request.user.role == "IM" and \
            request.method == "DELETE":
            return True
        return False


class AdminGetPermission(BasePermission):
    """
    Check if the user have the rol of Admin and the method is GET.
    """
    def has_permission(self, request, view) -> bool:
        if bool(request.user) and request.user.role == "AD" and \
            request.method == "GET":
            return True
        return False


class AdminPostPermission(BasePermission):
    """
    Check if the user have the rol of Admin and the method is POST.
    """
    def has_permission(self, request, view) -> bool:
        if bool(request.user) and request.user.role == "AD" and \
            request.method == "POST":
            return True
        return False


class AdminPutPermission(BasePermission):
    """
    Check if the user have the rol of Admin and the method is PUT.
    """
    def has_permission(self, request, view) -> bool:
        if bool(request.user) and request.user.role == "AD" and \
            request.method == "PUT":
            return True
        return False


class AdminDeletePermission(BasePermission):
    """
    Check if the user have the rol of Admin and the method is DELETE.
    """
    def has_permission(self, request, view) -> bool:
        if bool(request.user) and request.user.role == "AD" and \
            request.method == "DELETE":
            return True
        return False
