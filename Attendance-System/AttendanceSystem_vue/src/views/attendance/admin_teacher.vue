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

    <div class="contentadminj">
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
      <div class="container">
        <div class="row">

          
          <div class="col-md-6 col-xl-4">
            <div class="card bg-c-blue order-card">
              <div class="card-block">
                <router-link to="admin-view-teacher" class="route"> 
                  <h6 class="m-b-20">View All Teacher</h6>
                <br>
                <h2 class="text-right"><i class="fas fa-eye f-left"></i></h2>
                </router-link>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-xl-4">
            <div class="card bg-c-green order-card">
              <div class="card-block">
                <router-link to="admin-add-teacher" class="route"> 
                  <h6 class="m-b-20">Add Teacher</h6>
                <br>
                <h2 class="text-right"><i class="fas fa-plus-circle f-left"></i></h2>
                </router-link>

              </div>
            </div>
          </div>

          <!-- <div class="col-md-4 col-xl-3">
            <div class="card bg-c-yellow order-card">
              <div class="card-block">

                <router-link to="admin-approve-teacher" class="route"> 
                  <h6 class="m-b-20">Approve Teacher</h6>
                <br>
                <h2 class="text-right"><i class="fas fa-check-circle f-left"></i></h2>
                </router-link>                             
              </div>
            </div>
          </div> -->

          <div class="col-md-6 col-xl-4">
            <div class="card bg-c-pink order-card">
              <div class="card-block">

                <router-link to="admin-view-teacher-salary" class="route"> 
                  <h6 class="m-b-20">View Teachers Salary</h6>
                <br>
                <h2 class="text-right"><i class="fas fa-dollar f-left"></i></h2>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
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

<style type="text/css">
a:link {
  text-decoration: none;
}

.route{

color: #fff;
text-decoration: none;
}

h6 {
  color: white;
}

.order-card {
  color: #fff;
}

.bg-c-blue {
  background: linear-gradient(45deg, #4099ff, #597481);
}

.bg-c-green {
  background: linear-gradient(45deg, #2ed8b6, #597481);
}

.bg-c-yellow {
  background: linear-gradient(45deg, #FFB64D, #597481);
}

.bg-c-pink {
  background: linear-gradient(45deg, #FF5370, #597481);
}


.card {
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);
  box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);
  border: none;
  margin-bottom: 30px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.card .card-block {
  padding: 25px;
}

.order-card i {
  font-size: 26px;
}

.f-left {
  float: left;
}

.f-right {
  float: right;
}
</style>

