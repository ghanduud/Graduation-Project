from django.contrib import admin
from .models import Attendance, StudentExtra,TeacherExtra,Notice
# Register your models here. 



class StudentExtraAdmin(admin.ModelAdmin):
    list_display = ['id','user','image', 'roll', 'mobile', 'fee', 'cl']
    list_filter = ['status']
    search_fields = ['user', 'mobile']

admin.site.register(StudentExtra, StudentExtraAdmin)


class TeacherExtraAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'salary', 'mobile', ]
    list_filter = ['status']
    search_fields = ['user', 'mobile']

admin.site.register(TeacherExtra, TeacherExtraAdmin)



class AttendanceAdmin(admin.ModelAdmin):
    list_display = ['roll','cl','date','present_status' ]
    list_filter = ['roll','cl','date']
    search_fields = ['roll','cl','date']
    
admin.site.register(Attendance, AttendanceAdmin)



class NoticeAdmin(admin.ModelAdmin):
    list_display = ['by', 'message']
    list_filter = ['by']
    search_fields = ['by', ]

admin.site.register(Notice, NoticeAdmin)
