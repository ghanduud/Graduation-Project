from django.contrib import admin

from .models import Category, Course, Lesson, Comment,Quiz

class LessonCommentInline(admin.TabularInline):
    model = Comment
    raw_id_fields = ['lesson']

class LessonAdmin(admin.ModelAdmin):
    list_display = ['title', 'course', 'status', 'lesson_type']
    list_filter = ['status', 'lesson_type']
    search_fields = ['title', 'short_description', 'long_description']
    inlines = [LessonCommentInline]

class CourseAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'short_description', 'created_by']
    list_filter = ['status']
    search_fields = ['title', 'short_description']
    

admin.site.register(Category)
admin.site.register(Course, CourseAdmin)
admin.site.register(Lesson, LessonAdmin)
admin.site.register(Comment)
admin.site.register(Quiz)