from django.contrib import admin
from .models import magang, user

@admin.register(magang)
class magangAdmin(admin.ModelAdmin):
    list_display = ['judul', 'jurusan']
    list_filter = ['publish']
    search_fields = ['judul']

admin.site.register(user)