from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/admin-panel/', include('admin_panel.urls')),
    path('api/point-of-sale/', include('point_of_sale.urls'))
]
