from django.db import models


class Exercise(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    video_url = models.URLField(blank=True)
    image = models.ImageField(upload_to="exercises/", blank=True)


class Routine(models.Model):
    name = models.CharField(max_length=100)
    goal = models.CharField(max_length=100, blank=True)
    duration_weeks = models.PositiveIntegerField(default=4)
    difficulty = models.CharField(max_length=50, blank=True)
    qr_code = models.ImageField(upload_to="qrcodes/", blank=True)


class RoutineExercise(models.Model):
    routine = models.ForeignKey(
        Routine, on_delete=models.CASCADE, related_name="exercises"
    )
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    sets = models.PositiveIntegerField(default=3)
    reps = models.PositiveIntegerField(default=10)
    rest_seconds = models.PositiveIntegerField(default=60)
