# Generated by Django 4.2 on 2023-04-06 11:17

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("chat", "0002_rename_massage_message"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="message",
            name="date",
        ),
    ]
