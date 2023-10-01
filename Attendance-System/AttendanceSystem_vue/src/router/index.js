import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'

import Courses from '../views/Courses.vue'
import Course from '../views/Course.vue'
import Author from '../views/Author.vue'

import MyAccount from '../views/dashboard/MyAccount.vue'
import CreateCourse from '../views/dashboard/CreateCourse.vue'

/* import aboutus from '../views/attendance/aboutus.vue' */
import admin_add_student from '../views/attendance/admin_add_student.vue'
import admin_add_teacher from '../views/attendance/admin_add_teacher.vue'
/* import admin_approve_student from '../views/attendance/admin_approve_student.vue'
import admin_approve_teacher from '../views/attendance/admin_approve_teacher.vue' */
import admin_attendance from '../views/attendance/admin_attendance.vue'
import admin_fee from '../views/attendance/admin_fee.vue'
import admin_notice from '../views/attendance/admin_notice.vue'
import admin_student from '../views/attendance/admin_student.vue'
import admin_take_attendance from '../views/attendance/admin_take_attendance.vue'
/* import admin_teacher_student_card from '../views/attendance/admin_teacher_student_card.vue' */
import admin_teacher from '../views/attendance/admin_teacher.vue'
import admin_update_student from '../views/attendance/admin_update_student.vue'
import admin_update_teacher from '../views/attendance/admin_update_teacher.vue'
import admin_view_attendance_ask_date from '../views/attendance/admin_view_attendance_ask_date.vue'
import admin_view_attendance_page from '../views/attendance/admin_view_attendance_page.vue'
import admin_view_fee from '../views/attendance/admin_view_fee.vue'
import admin_view_student_fee from '../views/attendance/admin_view_student_fee.vue'
import admin_view_student from '../views/attendance/admin_view_student.vue'
import admin_view_teacher_salary from '../views/attendance/admin_view_teacher_salary.vue'
import admin_view_teacher from '../views/attendance/admin_view_teacher.vue'
import adminbase from '../views/attendance/adminbase.vue'
/* import adminclick from '../views/attendance/adminclick.vue'
import adminlogin from '../views/attendance/adminlogin.vue'
import adminsignup from '../views/attendance/adminsignup.vue'
import contactus from '../views/attendance/contactus.vue'
import contactussuccess from '../views/attendance/contactussuccess.vue'
import homebase from '../views/attendance/homebase.vue'
import index from '../views/attendance/index.vue' */


import student_view_attendance_ask_date from '../views/attendance/student_view_attendance_ask_date.vue'
import student_view_attendance_page from '../views/attendance/student_view_attendance_page.vue'
/* import student_wait_for_approval from '../views/attendance/student_wait_for_approval.vue' */
import studentbase from '../views/attendance/studentbase.vue'
/* import studentclick from '../views/attendance/studentclick.vue'
import studentlogin from '../views/attendance/studentlogin.vue'
import studentsignup from '../views/attendance/studentsignup.vue' */


import teacher_attendance from '../views/attendance/teacher_attendance.vue'
import teacher_notice from '../views/attendance/teacher_notice.vue'
/* import teacher_take_attendance from '../views/attendance/teacher_take_attendance.vue'
import teacher_view_attendance_ask_date from '../views/attendance/teacher_view_attendance_ask_date.vue'
import teacher_view_attendance_page from '../views/attendance/teacher_view_attendance_page.vue'
import teacher_wait_for_approval from '../views/attendance/teacher_wait_for_approval.vue' */
import teacherbase from '../views/attendance/teacherbase.vue'
/* import teacherclick from '../views/attendance/teacherclick.vue'
import teacherlogin from '../views/attendance/teacherlogin.vue'
import teachersignup from '../views/attendance/teachersignup.vue' */

import sindex from '../views/recognition/sindex.vue'
import tindex from '../views/recognition/tindex.vue'



/* function requireAuth(next) {
  const isAuthenticated = this.$store.state.user.isAuthenticated;
  if (isAuthenticated) {
    next();
  } else {
    next('/log-in'); // or any other route that you want to redirect the user to
  }
} */


/*---------studynet--------------*/
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/courses/:slug',
    name: 'Course',
    component: Course
  },
  {
    path: '/authors/:id',
    name: 'Author',
    component: Author
  },
  {
    path: '/dashboard/my-account',
    name: 'MyAccount',
    component: MyAccount
  },
  {
    path: '/dashboard/create-course',
    name: 'CreateCourse',
    component: CreateCourse
  },

  /* --------------admin panel----------------- */
  /* {
    path: '/attendance/about-us',
    name: 'aboutus',
    component: aboutus
  }, */
  {
    path: '/attendance/admin-add-student',
    name: 'admin_add_student',
    component: admin_add_student
  },
  {
    path: '/attendance/admin-add-teacher',
    name: 'admin_add_teacher',
    component: admin_add_teacher
  },
  /* {
    path: '/attendance/admin-approve-student',
    name: 'admin_approve_student',
    component: admin_approve_student
  },
  {
    path: '/attendance/admin-approve-teacher',
    name: 'admin_approve_teacher',
    component: admin_approve_teacher
  }, */
  {
    path: '/attendance/admin-attendance',
    name: 'admin_attendance',
    component: admin_attendance
  },
  {
    path: '/attendance/admin-fee',
    name: 'admin_fee',
    component: admin_fee
  },
  {
    path: '/attendance/admin-notice',
    name: 'admin_notice',
    component: admin_notice
  },
  {
    path: '/attendance/admin-student',
    name: 'admin_student',
    component: admin_student
  },
  {
    path: '/attendance/admin-take-attendance/:cl',
    name: 'admin_take_attendance',
    component: admin_take_attendance
  },
  /* {
    path: '/attendance/admin-teacher-student-card',
    name: 'admin_teacher_student_card',
    component: admin_teacher_student_card
  }, */
  {
    path: '/attendance/admin-teacher',
    name: 'admin_teacher',
    component: admin_teacher
  },
  {
    path: '/attendance/admin-update-student/:id/',
    name: 'admin_update_student',
    component: admin_update_student
  },
  {
    path: '/attendance/admin-update-teacher/:id/',
    name: 'admin_update_teacher',
    component: admin_update_teacher
  },
  {
    path: '/attendance/admin-view-attendance-ask-date/:cl',
    name: 'admin_view_attendance_ask_date',
    component: admin_view_attendance_ask_date
  },
  {
    path: '/attendance/admin-view-attendance-page/:cl/:date',
    name: 'admin_view_attendance_page',
    component: admin_view_attendance_page
  },
  {
    path: '/attendance/admin-view-fee/:cl',
    name: 'admin_view_fee',
    component:admin_view_fee
  },
  {
    path: '/attendance/admin-view-student-fee',
    name: 'admin_view_student_fee',
    component: admin_view_student_fee
  },
  {
    path: '/attendance/admin-view-student',
    name: 'admin-view-student',
    component: admin_view_student
  },
  {
    path: '/attendance/admin-view-teacher-salary',
    name: 'admin_view_teacher_salary',
    component: admin_view_teacher_salary
  },
  {
    path: '/attendance/admin-view-teacher',
    name: 'admin_view_teacher',
    component: admin_view_teacher
  },
  {
    path: '/attendance/admin-base',
    name: 'adminbase',
    component: adminbase,
  /*   beforeEnter: requireAuth */

  },
  /* {
    path: '/attendance/admin-click',
    name: 'adminclick',
    component: adminclick
  },
  {
    path: '/attendance/admin-log-in',
    name: 'adminlogin',
    component: adminlogin
  },
  {
    path: '/attendance/admin-sign-up',
    name: 'adminsignup',
    component: adminsignup
  },
  {
    path: '/attendance/contact-us',
    name: 'contactus',
    component: contactus
  },
  {
    path: '/attendance/contact-us-success',
    name: 'contactussuccess',
    component: contactussuccess
  },
  {
    path: '/attendance/home-base',
    name: 'homebase',
    component: homebase
  },
  {
    path: '/attendance/index',
    name: 'index',
    component: index
  }, */
  

  /*---------studentpanel-----------*/
 
  {
    path: '/attendance/student-view-attendance-ask-date/:id/',
    name: 'student_view_attendance_ask_date',
    component: student_view_attendance_ask_date
  },
  {
    path: '/attendance/student-view-attendance-page/:id/:date/',
    name: 'student_view_attendance_page',
    component: student_view_attendance_page
  },
  /* {
    path: '/attendance/student-wait-for-approval',
    name: 'student_wait_for_approval',
    component: student_wait_for_approval
  }, */
  {
    path: '/attendance/student-base/:id/',
    name: 'studentbase',
    component: studentbase
  },
  /* {
    path: '/attendance/student-click',
    name: 'studentclick',
    component: studentclick
  },
  {
    path: '/attendance/student-log-in',
    name: 'studentlogin',
    component: studentlogin
  },
  {
    path: '/attendance/student-sign-up',
    name: 'studentsignup',
    component: studentsignup
  }, */
  /* ----------teacher panel------------- */
  {
    path: '/attendance/teacher-attendance',
    name: 'teacher_attendance',
    component: teacher_attendance
  },
  
  {
    path: '/attendance/teacher-notice',
    name: 'teacher_notice',
    component: teacher_notice
  },
  /* {
    path: '/attendance/teacher-take-attendance',
    name: 'teacher_take_attendance',
    component: teacher_take_attendance
  },
  {
    path: '/attendance/teacher-view-attendance-ask-date',
    name: 'teacher_view_attendance_ask_date',
    component:teacher_view_attendance_ask_date
  },
  {
    path: '/attendance/teacher-view-attendance-page',
    name: 'teacher_view_attendance_page',
    component:teacher_view_attendance_page
  },
  {
    path: '/attendance/teacher-wait-for-approval',
    name: 'teacher_wait_for_approval',
    component:teacher_wait_for_approval
  }, */
  {
    path: '/attendance/teacher-base/:id/',
    name: 'teacherbase',
    component:teacherbase
  },
  /* {
    path: '/attendance/teacher-click',
    name: 'teacherclick',
    component:teacherclick
  },
  {
    path: '/attendance/teacher-log-in',
    name: 'teacherlogin',
    component:teacherlogin
  },
  {
    path: '/attendance/teacher-sign-up',
    name: 'teachersignup',
    component:teachersignup
  }, */

    /* ----------teacher panel------------- */
    {
      path: '/recognition/index/:roll/:class/',
      name: 'sindex',
      component:sindex
    },
    {
      path: '/recognition/teacher-index/',
      name: 'tindex',
      component:tindex
    },


  

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router