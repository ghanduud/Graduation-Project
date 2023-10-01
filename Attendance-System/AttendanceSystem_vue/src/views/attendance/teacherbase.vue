<template>
  <div  v-if= "this.$store.state.user.isAuthenticated && userGroup === 'TEACHER'">
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
        
        <div >
          <i ></i>
          <h3 class="fas fa-bars" id="sidebar_btn">Teacher Panel</h3>
        </div>
      </label>
      
    </header>
    <!--header area end-->

    <!--sidebar start-->
    <div class="sidebaradmin">
      <center>

        <img src="" class="profile_image" alt="">
        <h4>Teacher </h4>

      </center>

    <!--   <router-link to="/attendance/teacher-base" class="fas fa-desktop" ><span>MY Account</span></router-link>
    -->  <a :href="`/attendance/teacher-base/${user_id}/`"
          class="fas fa-desktop">
          <span>  MY Account</span>
      </a>
      <router-link to="/attendance/teacher-attendance" class="fas fa-address-card" ><span> Attendance</span></router-link>
      <router-link to="/attendance/teacher-notice" class="fas fa-bullhorn" ><span> Notice</span></router-link>
      <router-link to="/recognition/teacher-index/" class="fas fa-clipboard-check"><span> Take Attendance</span></router-link>


    </div>
    <!--sidebar end-->


    <!--content start-->
    <div class="contentadminj">
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
      <div class="container">
        <div class="row" >
          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-blue order-card">
              <div class="card-block">
                <h6 class="m-b-20">Name:</h6>
                <h2 class="text-right"><i class="fas fa-user-tie f-left"></i></h2>
                <p style="text-align: center;"> 
                <span style="font-size: 20px;">
                  <tr v-for="Teacher in Teachers" :key = "Teacher.id">
                        <td>  {{ Teacher.first_name }}</td>                    
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
                <p style="text-align: center;">
                <span style="font-size: 20px;">
                  <tr v-for="Teacher in Teachers" :key = "Teacher.id">
                        <td>  {{ Teacher.mobile }}</td>                    
                  </tr>
                </span></p>

              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-yellow order-card">
              <div class="card-block">
                <h6 class="m-b-20">Join Date:</h6>
                <h2 class="text-right"><i class="fas fa-calendar-alt f-left"></i></h2>
                <p style="text-align: center;">
                <span style="font-size: 20px;">
                  <tr v-for="Teacher in Teachers" :key = "Teacher.id">
                        <td>  {{ Teacher.joindate }}</td>                    
                  </tr>
                </span></p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-pink order-card">
              <div class="card-block">
                <h6 class="m-b-20">Salary:</h6>
                <h2 class="text-right"><i class="fas fa-dollar f-left"></i></h2>
                <p style="text-align: center;">
                <span style="font-size: 20px;">
                  <tr v-for="Teacher in Teachers" :key = "Teacher.id">
                        <td>  {{ Teacher.salary }}</td>                    
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
    <!--content end-->

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
        Teachers: [],           
        Users: [],           
        notices: [],
        user_id: null,
        userGroup: null
      }
  },

  async mounted() {
      console.log('mounted')

      axios.get('courses/user_id/')
          .then(response => {
          this.user_id = response.data.id;
          })
          .catch(error => {
          console.log(error);
          });

          axios.get('courses/user_group/')
          .then(response => {
          this.userGroup = response.data.group;
          })
          .catch(error => {
          console.log(error);
          });

    
      this.getNotice(),
      this.getDashData()
  },
  methods: {
    getDashData(user_id) {          
          axios
              .get(`/attendance/teach_dashboard/${this.$route.params.id}/`)
              .then(response => {
                  console.log(response.data)                  
                  this.Teachers = response.data.teacher,
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