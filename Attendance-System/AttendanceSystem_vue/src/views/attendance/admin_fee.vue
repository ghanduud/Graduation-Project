<template>
  <div  v-if= "this.$store.state.user.isAuthenticated && userGroup === 'ADMIN'">
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
<header class="noteadminAtten">
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

<div class="contentadminj">



<div class="container">

<div class="row">

  <div class="panel panel-primary">
    <div class="panel-heading">
      <h6 class="panel-title">FEE OF STUDENTS</h6>

    </div>

    <table class="table table-hover table-striped table-bordered" id="dev-table">
      <thead>

        <tr>
          <th>Class Name</th>

          <th>View Dues</th>
        </tr>
      </thead>

      <tr>
        <td>One</td>
        <td>
          
          <router-link to="/attendance/admin-view-fee/one"  class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
         <!--  <router-link
                    :to="{name: '/attendance/admin-view-fee', params: {cl:'one'}}"
                    class="btn btn-danger btn-xs"
                >
                <span class="glyphicon glyphicon-eye-open"></span>
          </router-link> -->
        </td>
      </tr>

      <tr>
        <td> Two</td>
        <td>
          <router-link to="/attendance/admin-view-fee/two" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
        </td>
      </tr>

      <tr>
        <td> Three</td>
        <td>
          <router-link to="/attendance/admin-view-fee/three" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
        </td>
      </tr>

      <tr>
        <td> Four</td>
        <td>
          <router-link to="/attendance/admin-view-fee/four" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
        </td>
      </tr>

      <tr>
        <td> Five</td>
        <td>
          <router-link to="/attendance/admin-view-fee/five" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
        </td>
      </tr>

      <tr>
        <td> Six</td>
        <td>
          <router-link to="/attendance/admin-view-fee/six" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
        </td>
      </tr>

      <tr>
        <td> Seven</td>
        <td>
          <router-link to="/attendance/admin-view-fee/seven" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
        </td>
      </tr>

      <tr>
        <td> Eight</td>
        <td>
          <router-link to="/attendance/admin-view-fee/eight" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
        </td>
      </tr>

      <tr>
        <td> Nine</td>
        <td>
          <router-link to="/attendance/admin-view-fee/nine" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
        </td>
      </tr>

      <tr>
        <td> Ten</td>
        <td>
          <router-link to="/attendance/admin-view-fee/ten" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-eye-open"></span></router-link>
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
       

          userGroup: null,
          
         
        }
    },
  
  
    async mounted() {
        console.log('mounted')

        axios.get('courses/user_group/')
        .then(response => {
        this.userGroup = response.data.group;
        })
        .catch(error => {
        console.log(error);
        });

        
    },
    methods: {
       
    }
}
</script>


<style media="screen">
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

