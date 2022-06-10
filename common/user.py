from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import BaseUserManager


class CustomUserManager(BaseUserManager):

    def create_user(self, email, user_name, first_name, password, **other_fields):
        if not email:
            raise ValueError(_('You must provided an email.'))
        
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            username=user_name,
            first_name=first_name,
            **other_fields
        )
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, password, **other_fields):
        if not email:
            raise ValueError(_('You must provided an email.'))
        
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            **other_fields
        )
        user.set_password(password)
        user.is_staff = True
        user.save()
        return user