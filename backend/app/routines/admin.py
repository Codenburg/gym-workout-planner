from django.contrib import admin
from .models import Routine


@admin.register(Routine)
class RoutineAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "goal", "duration_weeks", "difficulty")
    search_fields = ("name", "goal", "difficulty")
    ordering = ("-id",)
