from rest_framework.routers import DefaultRouter
from .views import ExerciseViewSet

router = DefaultRouter()
router.register(r"exercises", ExerciseViewSet)

urlpatterns = router.urls
