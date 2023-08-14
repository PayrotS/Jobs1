# Generated by Django 4.2.4 on 2023-08-03 06:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("jobs", "0003_remove_user_username_remove_usergroup_groups_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="user",
            fields=[
                (
                    "nama",
                    models.CharField(
                        max_length=20, primary_key=True, serialize=False, unique=True
                    ),
                ),
                ("email", models.EmailField(max_length=254)),
                ("username", models.CharField(max_length=50)),
                ("password", models.CharField(max_length=20)),
            ],
        ),
        migrations.AlterField(
            model_name="magang",
            name="Nama_id",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="jobs.user"
            ),
        ),
    ]
