<template>
  <div  v-if= "this.$store.state.user.isAuthenticated && userGroup === 'TEACHER'">
    <!DOCTYPE html>
  <html lang="en" dir="ltr">
  
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  
   
    
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

  <div class="sidebaradmin">
  <center>

    <img src="" class="profile_image" alt="">
    <h4>Teacher </h4>

  </center>

  <!-- <router-link to="/attendance/teacher-base" class="fas fa-desktop" ><span>MY Account</span></router-link> -->
  <a :href="`/attendance/teacher-base/${user_id}/`"
  class="fas fa-desktop">
  <span>  MY Account</span>
  </a>
  <router-link to="/attendance/teacher-attendance" class="fas fa-address-card" ><span> Attendance</span></router-link>
  <router-link to="/attendance/teacher-notice" class="fas fa-bullhorn" ><span> Notice</span></router-link>
  <router-link to="/recognition/teacher-index/" class="fas fa-clipboard-check"><span> Take Attendance</span></router-link>



</div>
<div class="contentadminj">
<div class="container">

  <div class="row">

    <div class="panel panel-primary">
      <div class="panel-heading">
        <h6 class="panel-title">Attendance</h6>

      </div>

      <table class="table table-hover table-striped table-bordered" id="dev-table">
        <thead>

          <tr>
            <th>Class Name</th>
            <th>Take Attendance</th>
            <th>View Attendance</th>
          </tr>
        </thead>

        <tr>
              <td>One</td>
              <td>               
                <router-link to="/attendance/admin-take-attendance/one"  class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-plus"></span></router-link>             
              </td>
              <td>               
                <router-link to="/attendance/admin-view-attendance-ask-date/one"  class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>             
              </td>
            </tr>
            <tr>
              <td> Two</td>
              <td>
                <router-link to="/attendance/admin-take-attendance/two" class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-plus"></span></router-link>
              </td>
              <td>
                <router-link to="/attendance/admin-view-attendance-ask-date/two" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
              </td>
            </tr>

            <tr>
              <td> Three</td>
              <td>
                <router-link to="/attendance/admin-take-attendance/three" class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-plus"></span></router-link>
              </td>
              <td>
                <router-link to="/attendance/admin-view-attendance-ask-date/three" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
              </td>
            </tr>

            <tr>
              <td> Four</td>
              <td>
                <router-link to="/attendance/admin-take-attendance/four" class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-plus"></span></router-link>
              </td>
              <td>
                <router-link to="/attendance/admin-view-attendance-ask-date/four" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
              </td>
            </tr>

            <tr>
              <td> Five</td>
              <td>
                <router-link to="/attendance/admin-take-attendance/five" class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-plus"></span></router-link>
              </td>
              <td>
                <router-link to="/attendance/admin-view-attendance-ask-date/five" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
              </td>
            </tr>

            <tr>
              <td> Six</td>
              <td>
                <router-link to="/attendance/admin-take-attendance/six" class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-plus"></span></router-link>
              </td>
              <td>
                <router-link to="/attendance/admin-view-attendance-ask-date/six" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
              </td>
            </tr>

            <tr>
              <td> Seven</td>
              <td>
                <router-link to="/attendance/admin-take-attendance/seven" class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-plus"></span></router-link>
              </td>
              <td>
                <router-link to="/attendance/admin-view-attendance-ask-date/seven" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
              </td>
            </tr>

            <tr>
              <td> Eight</td>
              <td>
                <router-link to="/attendance/admin-take-attendance/eight" class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-plus"></span></router-link>
              </td>
              <td>
                <router-link to="/attendance/admin-view-attendance-ask-date/eight" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
              </td>
               
            </tr>

            <tr>
              <td> Nine</td>
              <td>
                <router-link to="/attendance/admin-take-attendance/nine" class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-plus"></span></router-link>
              </td>
              <td>
                <router-link to="/attendance/admin-view-attendance-ask-date/nine" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
              </td>
            </tr>

            <tr>
              <td> Ten</td>
              <td>
                <router-link to="/attendance/admin-take-attendance/ten" class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-plus"></span></router-link>
              </td>
              <td>
                <router-link to="/attendance/admin-view-attendance-ask-date/ten" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
              </td>
            </tr>
      </table>
    </div>
  </div>
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
              user_id: null,
              userGroup:null
             
          }
      },
      mounted() {
          document.title = 'Notice | StudyNet'
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
      },
      
  }
  </script>

<style media="screen">
    a:link {
      text-decoration: none;
    }

    a:link {
      text-decoration: none;
    }

    h6 {
      text-align: center;
    }

    .row {
      margin: 100px;
    }
</style>


