from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Exercise


class ExerciseAPITestCase(APITestCase):
    def setUp(self):
        self.exercise = Exercise.objects.create(
            name="Flexiones de brazos",
            description="Ejercicio de empuje para pecho y tríceps.",
        )
        self.list_url = reverse("exercise-list")

    def test_list_exercises(self):
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)

    def test_create_exercise(self):
        data = {
            "name": "Sentadillas",
            "description": "Ejercicio para piernas y glúteos.",
        }
        response = self.client.post(self.list_url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(Exercise.objects.filter(name="Sentadillas").exists())

    def test_retrieve_exercise(self):
        url = reverse("exercise-detail", args=[self.exercise.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], self.exercise.name)

    def test_update_exercise(self):
        url = reverse("exercise-detail", args=[self.exercise.id])
        data = {"name": "Flexiones modificadas"}
        response = self.client.patch(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.exercise.refresh_from_db()
        self.assertEqual(self.exercise.name, "Flexiones modificadas")

    def test_delete_exercise(self):
        url = reverse("exercise-detail", args=[self.exercise.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Exercise.objects.filter(id=self.exercise.id).exists())
