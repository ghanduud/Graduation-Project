from django.contrib.auth.models import User

from rest_framework import serializers

from .models import User,TeacherExtra, StudentExtra,Notice,Attendance


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

class UserGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'groups')


class TeacherExtraSerializer(serializers.ModelSerializer):
    class Meta:
        model=TeacherExtra
        fields=['first_name','last_name','salary','mobile', 'joindate','status']


class StudentExtraSerializer(serializers.ModelSerializer):
    class Meta:
        model=StudentExtra
        fields=['id', 'first_name','last_name','roll','cl','mobile','fee','status']

class NoticeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Notice
        fields=['by','message','date']


class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = ['roll', 'date', 'cl', 'present_status']


""" class AttendanceRecordSerializer(serializers.ModelSerializer):
    attendance_records = AttendanceSerializer(many=True)

    class Meta:
        model = AttendanceRecord
        fields = ['classs', 'date', 'attendance_records']

    def create(self, validated_data):
        attendance_records_data = validated_data.pop('attendance_records')
        attendance_record = AttendanceRecord.objects.create(**validated_data)
        for attendance_record_data in attendance_records_data:
            student_data = attendance_record_data.pop('student')
            student, created = StudentExtra.objects.get_or_create(**student_data)
            Attendance.objects.create(student=student, attendance_record=attendance_record, **attendance_record_data)
        return attendance_record """



""" class AttendanceSerializer(serializers.Serializer):
    present_status = serializers.ChoiceField(choices=(('Present','Present'),('Absent','Absent')))
    date = serializers.DateField()

class AskDateSerializer(serializers.Serializer):
    date = serializers.DateField() """
