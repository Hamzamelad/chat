# Generated by Django 4.2 on 2023-04-14 14:55

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("chat", "0005_message_img"),
    ]

    operations = [
        migrations.AlterField(
            model_name="message",
            name="text",
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]