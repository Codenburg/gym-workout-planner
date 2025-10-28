from django.db import models
from app.exercises.models import Exercise


class Routine(models.Model):
    name = models.CharField(max_length=100)
    goal = models.CharField(max_length=100, blank=True)
    duration_weeks = models.PositiveIntegerField(default=4)
    difficulty = models.CharField(max_length=50, blank=True)
    qr_code = models.ImageField(upload_to="qrcodes/", blank=True)

    def __str__(self):
        return self.name


class RoutineExercise(models.Model):
    routine = models.ForeignKey(
        Routine, on_delete=models.CASCADE, related_name="exercises"
    )
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    sets = models.PositiveIntegerField(default=3)
    reps = models.PositiveIntegerField(default=10)
    rest_seconds = models.PositiveIntegerField(default=60)

    def __str__(self):
        return f"{self.exercise.name} in {self.routine.name}"
