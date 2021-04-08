# Generated by Django 3.1.6 on 2021-03-28 06:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='StudentTable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject', models.CharField(max_length=20)),
                ('ia1', models.IntegerField()),
                ('ia2', models.IntegerField()),
                ('endsem', models.IntegerField()),
                ('termwork', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='TeacherTable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('student_name', models.CharField(max_length=20)),
                ('ia1', models.IntegerField()),
                ('ia2', models.IntegerField()),
                ('endsem', models.IntegerField()),
                ('termwork', models.IntegerField()),
            ],
        ),
    ]
