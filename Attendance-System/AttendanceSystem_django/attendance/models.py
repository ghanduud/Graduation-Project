from django.db import models
from django.contrib.auth.models import User
from multiupload.fields import MultiImageField
# Create your models here.


class TeacherExtra(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    salary = models.PositiveIntegerField(null=False)
    joindate=models.DateField(auto_now_add=True)
    mobile = models.CharField(max_length=40)
    first_name = models.CharField(max_length=50, default='firstname')
    last_name = models.CharField(max_length=50, default='lastname')
    status=models.BooleanField(default=False)
    """ def __str__(self):
        return self.user.first_name """
    @property
    def get_id(self):
        return self.user.id
    """ @property
    def get_name(self):
        return self.user.first_name+" "+self.user.last_name
 """


def student_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/students/<roll>/<filename>
    return 'students/{0}/{1}'.format(instance.roll, filename)

classes=[('one','one'),('two','two'),('three','three'),
('four','four'),('five','five'),('six','six'),('seven','seven'),('eight','eight'),('nine','nine'),('ten','ten')]
class StudentExtra(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    roll = models.CharField(max_length=10)
    mobile = models.CharField(max_length=40,null=True)
    fee=models.PositiveIntegerField(null=True)
    cl= models.CharField(max_length=10,choices=classes,default='one')
    first_name = models.CharField(max_length=50, default='firstname')
    last_name = models.CharField(max_length=50, default='lastname')
    image = models.ImageField(upload_to= student_directory_path, blank=True, null=True)  
    """ images = MultiImageField(upload_to=student_directory_path, blank=True, null=True) """
    status=models.BooleanField(default=False)
    @property
    def get_name(self):
        return self.user.first_name+" "+self.user.last_name
    @property
    def get_id(self):
        return self.user.id
    def __str__(self):
        return self.user.first_name


""" class AttendanceRecord(models.Model):
    classs = models.CharField(max_length=255)
    date = models.DateField()
    attendance_records = models.ManyToManyField(StudentExtra, through='Attendance', default=9)

    def __str__(self):
        return f"{self.classs} - {self.date}"


class Attendance(models.Model):
    student = models.ForeignKey(StudentExtra, on_delete=models.CASCADE, default=9)
    attendance_record = models.ForeignKey(AttendanceRecord, on_delete=models.CASCADE, default=1)
    present_status = models.CharField(max_length=10, choices=(('Present', 'Present'), ('Absent', 'Absent'))) 
 """

class Attendance(models.Model):
    roll=models.CharField(max_length=10)
    date=models.CharField(max_length=10,default='2023-04-25')
    cl=models.CharField(max_length=10,default='one')
    present_status = models.CharField(max_length=10, choices=(('Present', 'Present'), ('Absent', 'Absent')))

class Notice(models.Model):
    date=models.DateField(auto_now=True)
    by=models.CharField(max_length=20,null=True,default='school')
    message=models.CharField(max_length=500)
