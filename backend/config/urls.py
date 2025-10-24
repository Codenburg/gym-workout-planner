from django.contrib import admin
from django.urls import path, include
#from config.views import test_origin

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/routines/", include("app.routines.urls")),
    #path("test/", test_origin),
]
