# Generated by Django 4.2 on 2023-05-10 17:24

import attendance.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('attendance', '0007_alter_attendance_roll'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentextra',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=attendance.models.student_directory_path),
        ),
    ]
