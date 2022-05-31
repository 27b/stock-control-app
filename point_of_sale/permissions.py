from rest_framework.permissions import BasePermission, SAFE_METHODS


class PointOfSalePermission(BasePermission):
    """
    Check if the user have the rol of point_of_sale.
    """
    def has_permission(self, request, view) -> bool:
        if bool(request.user) and request.user.profile.role == "point_of_sale":
            return True
        return False
