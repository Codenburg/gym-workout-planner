from django.urls import path
from .views import ExerciseCreateAPIView

urlpatterns = [
    path('create/', ExerciseCreateAPIView.as_view(), name='exercise-create'),
]
