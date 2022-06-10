from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserChangeForm
from .models import CustomUser


class CustomUserForm(UserChangeForm):
    class Meta(UserChangeForm.Meta):
        model = CustomUser


class CustomUserAdmin(UserAdmin):
    form = CustomUserForm

    fieldsets = UserAdmin.fieldsets + (
            (None, {'fields': ('role',)}),
    )
