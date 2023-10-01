<template>
  <div  v-if= "this.$store.state.user.isAuthenticated && userGroup === 'STUDENT'">
    <!DOCTYPE html>
  <html lang="en" dir="ltr">

  <head>
    <meta charset="utf-8">
    <title>SMS - Django</title>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
    <link href="http://netdna.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  </head>

  <body>

    <input type="checkbox" id="check">
    <!--header area start-->
    <header class="noteadmin">
      <label for="check">
        <i></i>
        <div class="left_area">
          <h3 class="fas fa-bars" id="sidebar_btn"> Student</h3>
        </div>
      </label>
    </header>
    <!--header area end-->
    <!--sidebar start-->

    <div class="sidebaradmin">
      <center>

        <img src="" class="profile_image" alt="">
        <h4>student</h4>

      </center>


      <!-- <router-link to="/attendance/student-base" class="fas fa-desktop"><span>MY Account</span></router-link> -->
      <!-- <router-link to="/attendance/student-view-attendance-ask-date/" class="fas fa-address-card"><span>View
          Attendance</span></router-link> -->
          <a :href="`/attendance/student-base/${user_id}/`"
      class="fas fa-desktop">
      <span>
        MY Account
      </span>
      </a>
      <a :href="`/attendance/student-view-attendance-ask-date/${user_id}/`"
      class="fas fa-address-card">
      <span>
        View Attendance
      </span>
      </a>
      <div v-for="Student in Students" :key = "Student.id">
      <a :href="`/recognition/index/${ Student.roll }/${ Student.cl }/`"
      class="fas fa-clipboard-list">
      <span>
        Take Attendance
      </span>
      </a>
      </div>

    </div>


    <!--sidebar end-->
    <div class="contentadminj">
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-blue order-card">
              <div class="card-block">
                <h6 class="m-b-20">Name:</h6>
                <h2 class="text-right"><i class="fas fa-user-tie f-left"> </i></h2>
                <p style="text-align: center;"><span style="font-size: 20px;" >  
                  <tr v-for="Student in Students" :key = "Student.id">
                    <td>  {{ Student.first_name }}</td>                    
                  </tr>
                </span></p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-green order-card">
              <div class="card-block">
                <h6 class="m-b-20">Contact:</h6>
                <h2 class="text-right"><i class="fas fa-mobile-alt f-left"></i></h2>
                <p style="text-align: center;"><span style="font-size: 20px;">
                  <tr v-for="Student in Students" :key = "Student.id">
                    <td>  {{ Student.mobile }}</td>                    
                  </tr>
                </span></p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-yellow order-card">
              <div class="card-block">
                <h6 class="m-b-20">Roll:</h6>
                <h2 class="text-right"><i class="fas fa-list-ol f-left"></i></h2>
                <p style="text-align: center;"><span style="font-size: 20px;">
                  <tr v-for="Student in Students" :key = "Student.id">
                    <td>  {{ Student.roll }}</td>                    
                  </tr>
                </span></p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-pink order-card">
              <div class="card-block">
                <h6 class="m-b-20">Fee:</h6>
                <h2 class="text-right"><i class="fas fa-dollar f-left"></i></h2>
                <p style="text-align: center;"><span style="font-size: 20px; ">
                  <tr v-for="Student in Students" :key = "Student.id">
                    <td> {{ Student.fee }}</td>                    
                  </tr>
                </span></p>
              </div>
            </div>
          </div>

        </div>
      </div>
     
      <div class="w3-panel w3-black " style="background-image: linear-gradient(to right, #47a3e9, #4a5c64); ">
        <p>Notice Board</p>
      </div><br>

      <div class="alert column is-10 is-offset-1" v-for="notice in notices" :key="notice.id" >
        <span class="closebtn" onclick="this.parentElement.style.display='none';" >&times;</span>
        <strong >Posted on {{notice.date}} </strong><br><b>By : {{notice.by}}</b><br> {{notice.message}}
      </div>
    </div>

  </body>

  </html>
  </div>

  <div v-else>
    <h2 style="margin-left: 40%;">{{ userGroup }} Can't Access this Page </h2>

  </div>

  
</template>

<script>
import axios from 'axios'

export default {
  data() {
      return {
        Students: [],           
        Users: [],           
        notices: [],
        user_id:null,
        userGroup:null
               
      }
  },

  async mounted() {
      console.log('mounted',this.user_id)  
      axios.get('courses/user_group/')
        .then(response => {
        this.userGroup = response.data.group;
        })
        .catch(error => {
        console.log(error);
        });
   
      this.getNotice(),    
      await this.getDashData(this.user_id)
                
  },
  created() {
    axios.get('courses/user_id/')
          .then(response => {
          this.user_id = response.data.id;
          })
          .catch(error => {
          console.log(error);
          });
  },
  methods: {    
      getDashData(user_id) {          
          axios
              .get(`/attendance/stud_dashboard/${this.$route.params.id}/`)
              .then(response => {
                  console.log(response.data)                  
                  this.Students = response.data.student,
                  this.Users = response.data.user
                                               
              })
      },
      getNotice() {
          axios
              .get(`/attendance/ad_notice/`)
              .then(response => {
                  console.log(response.data)                  
                  this.notices = response.data                                   
              })
      }
  }
}
</script>

