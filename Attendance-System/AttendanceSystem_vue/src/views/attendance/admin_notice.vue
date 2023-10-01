<template>
  <div  v-if= "this.$store.state.user.isAuthenticated && userGroup === 'ADMIN'">
 <head>
    <meta charset="utf-8">


    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
    <link href="http://netdna.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">


  </head>


  <body>

    <input type="checkbox" id="check">
    <!--header area start-->
    <header class="noteadmin">
      <label for="check">

        <div>
          <i></i>
          <h3 class="fas fa-bars" id="sidebar_btn">Admin Panel</h3>
        </div>
      </label>
    </header>
    <!--header area end-->

    <!--sidebar start-->
    <div class="sidebaradmin">
      <center>

        <img src="" class="profile_image" alt="">
        <h4>Admin </h4>

      </center>

      <router-link to="/attendance/admin-base" class="fas fa-desktop"><span>MY Account</span></router-link>
      <router-link to="/attendance/admin-teacher" class="fas fa-chalkboard-teacher"><span>Teacher</span></router-link>
      <router-link to="/attendance/admin-student" class="fas fa-user-graduate"><span>Student</span></router-link>

      <router-link to="/attendance/admin-attendance" class="fas fa-address-card"><span>Attendance</span></router-link>
      <router-link to="/attendance/admin-fee" class="fas fa-dollar-sign"><span>Fee</span></router-link>
      <router-link to="/attendance/admin-notice" class="fas fa-bullhorn"><span>Notice</span></router-link>

    </div>


  <!------ notice page for  by admin(sumit)  ---------->
  <div class="contentadminj">
  <form v-on:submit.prevent="submitForm">
   
    <div class="container register-form">
      <div class="form">
        <div class="adminnote">
          <p>Announce Something</p>
        </div>

        <div class="form-content">
          <div class="row">
            <div class="col-md-12">
                
                <div class="form-group">
                  <div class="field">                     
                        <input type="text" class="input" placeholder="Write Your Message Here" v-model="message">
                  </div>
                </div>
                                     
            </div>

          </div>
          <button type="submit" class="btnSubmit">Submit</button>
        </div>
      </div>
    </div>
  </form>
  <br><br>
</div>  
</body>
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
              message:'',
              userGroup: null,
              errors: []
          }
      },
      mounted() {
          document.title = 'Notice | StudyNet'
          axios.get('courses/user_group/')
          .then(response => {
          this.userGroup = response.data.group;
          })
          .catch(error => {
          console.log(error);
          });
      },
      methods: {
          submitForm() {
              console.log('submitForm')
              this.errors = []
              if (this.message === '') {
                  this.errors.push('The message is missing!')
              }
            
              if (!this.errors.length) {
                  const FormData = {
                      message: this.message,                                                                 
                  }
                 
                  axios
                      .post('/attendance/ad_add_notice/', FormData)                   
                      .then(response => {                          
                          this.$router.push('/attendance/admin-base')
                      })
                      .catch(error => {
                          if (error.response) {
                              for (const property in error.response.data) {
                                  this.errors.push(`${property}: ${error.response.data[property]}`)
                              }
                              console.log(JSON.stringify(error.response.data))
                          } else if (error.message) {
                              this.errors.push('Something went wrong. Please try again')
                              
                              console.log(JSON.stringify(error))
                          }
                      })
              }
          }
      }
  }
  </script>



<style media="screen">
    a:link {
      text-decoration: none;
    }

    .adminnote {
      transform: translate(70%, 0%);
      width: 500px;
      text-align: center;
      border-radius: 1.5rem;
      height: 80px;
      background: -webkit-linear-gradient(left, #24a0ed, #4a5c64);   
      color:#ffffff;
      font-weight: bold;
      line-height: 80px;
      
    }

    .form-content {
      padding: 5%;
      border: 2px solid #ced4da;
      background: -webkit-linear-gradient(left, #47a3e9, #4a5c64);   

      margin-bottom: 10%;
    }

    .form-control {
      border-radius: 1.5rem;

      height: 250px;
    }

    .btnSubmit {
      border: none;
      border-radius: 1.5rem;
      padding: 1%;
      width: 20%;
      cursor: pointer;
      background: #4caf50;
      color: #fff;
    }
  </style>


