<template>
<div  v-if= "this.$store.state.user.isAuthenticated && userGroup === 'ADMIN'">
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

    <router-link to="/attendance/admin-base" class="fas fa-desktop" ><span>MY Account</span></router-link>
    <router-link to="/attendance/admin-teacher" class="fas fa-chalkboard-teacher" ><span>Teacher</span></router-link>
    <router-link to="/attendance/admin-student" class="fas fa-user-graduate" ><span>Student</span></router-link>

    <router-link to="/attendance/admin-attendance" class="fas fa-address-card" ><span>Attendance</span></router-link>
    <router-link to="/attendance/admin-fee" class="fas fa-dollar-sign" ><span>Fee</span></router-link>
    <router-link to="/attendance/admin-notice" class="fas fa-bullhorn" ><span>Notice</span></router-link>

  </div>
  <!--sidebar end-->


  <!--content start-->
  <div class="contentadminj">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
      <div class="container">
        <div class="row">
          
          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-blue order-card">          
              <div class="card-block">                       
                <h6 class="m-b-20">Total Teacher</h6>
                <h2 class="text-right"><i class="fas fa-chalkboard-teacher f-left"></i><span>{{TeacherCount}}</span></h2>   
                <p class="m-b-0">{{teacherCount}}<span class="f-right">{{teacherCount}}</span></p>               
              </div>
              
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-green order-card">
              <div class="card-block">
                <h6 class="m-b-20">Total Student</h6>
                <h2 class="text-right"><i class="fas fa-user-graduate f-left"></i><span>{{StudentCount}}</span></h2>
                <p class="m-b-0">{{ studentCount }}<span class="f-right">{{Studentcount}}</span></p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-yellow order-card">
              <div class="card-block">
                <h6 class="m-b-20">Teacher's Salary</h6>
                <h2 class="text-right"><i class="fas fa-dollar f-left"></i><span>{{TeacherSalary}}</span></h2>
                <p class="m-b-0"><span class="f-right">{{ Teachersalary}}</span></p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-pink order-card">
              <div class="card-block">
                <h6 class="m-b-20">Student Fee</h6>
                <h2 class="text-right"><i class="fas fa-dollar f-left"></i><span>{{StudentFee}}</span></h2>
                <p class="m-b-0">{{ Studentfee }}<span class="f-right">{{Studentfee}}</span></p>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="row">
          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-blue order-card">
              <div class="card-block">
                <h6 class="m-b-20">Pending Teacher</h6>
                <h2 class="text-right"><i class="fas fa-spinner f-left"></i><span class="f-right"></span></h2>
                <p class="m-b-0"><span class="f-right">{{PendingTeacherCount}}</span></p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-green order-card">
              <div class="card-block">
                <h6 class="m-b-20">Pending Admissions</h6>
                <h2 class="text-right"><i class="fas fa-spinner f-left"></i><span class="f-right"></span></h2>
                <p class="m-b-0"><span class="f-right">{{PendingStudentCount}}</span></p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-yellow order-card">
              <div class="card-block">
                <h6 class="m-b-20">Pending Salary</h6>
                <h2 class="text-right"><i class="fas fa-spinner f-left"></i><span class="f-right"></span></h2>
                <p class="m-b-0"><span class="f-right">{{PendingTeacherSalary}}</span></p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-pink order-card">
              <div class="card-block">
                <h6 class="m-b-20">Pending Dues</h6>
                <h2 class="text-right"><i class="fas fa-spinner f-left"></i><span class="f-right"></span></h2>
                <p class="m-b-0"><span class="f-right">{{PendingStudentFee }}</span></p>
              </div>
            </div>
          </div>
        </div> -->

      </div>
  <div class="w3-panel w3-black  " style="background-image: linear-gradient(to right, #47a3e9, #4a5c64); ">
    <p>Notice Board</p>
  </div>

  <div class="alert is-offset-1 column is-10" v-for="notice in notices" :key="notice.id" >
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
          TeacherCount: null,
          PendingTeacherCount: "0",
          StudentCount: null,
          PendingStudentCount: "0",
          TeacherSalary: null,
          PendingTeacherSalary: "0",
          StudentFee: null,
          PendingStudentFee: "0",

          userGroup: null,
          
          notices: []
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

        this.getDashData()
        this.getNotice()
    },
    methods: {
        getDashData() {
            axios
                .get(`/attendance/ad_dashboard_data/`)
                .then(response => {
                    console.log(response.data)
                    
                    this.TeacherCount = response.data.teachercount
                    this.PendingTeacherCount = response.data.pendingteachercount

                    this.StudentCount = response.data.studentcount
                    this.PendingStudentCount = response.data.pendingstudentcount

                    this.TeacherSalary = response.data.teachersalary
                    this.PendingTeachersalary = response.data.pendingteachersalary

                    this.StudentFee = response.data.studentfee
                    this.PendingStudentfee = response.data.pendingstudentfee

                  
                    
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

<style media="screen">

/* admin_dashboard*/
.alert {
  margin-left: 25%;
  margin-right: 25%;
  padding: 20px;
  background-color: #f44336;
  color: white;
}

.w3-panel p {
  padding-top: 10px;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}

 /* admin_dashboard_cards*/

a:link {
        text-decoration: none;
      }

      .order-card {
        color: #fff;
      }

      .bg-c-blue {
        background: linear-gradient(45deg, #4099ff,#4a5c64);
      }

      .bg-c-green {
        background: linear-gradient(45deg, #2ed8b6, #4a5c64);
      }

      .bg-c-yellow {
        background: linear-gradient(45deg, #FFB64D, #4a5c64);
      }

      .bg-c-pink {
        background: linear-gradient(45deg, #30a33a, #4a5c64);
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


/* base*/
      a:link {
  text-decoration: none;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  
 
}


.noteadmin {
      text-align: center;
      height: 80px;
      background: -webkit-linear-gradient(left, #24a0ed, #607d8b);
      color: #fff;
      font-weight: bold;
      line-height: 80px;
   
    }

.left_area h3 {
  color: #fff;
  margin: 0px;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 900;
}

.left_area span {
  
  color: #19B3D3;
}

.sidebaradmin {
  border-top-right-radius: 1.5rem;
  
  color: -webkit-linear-gradient(left, #24a0ed, #2ea0e7);
  margin-top: 0px;
  padding-top: 30px;
  position: fixed;
  left: 0;
  width: 250px;
  
  transition: 0.5s;
  transition-property: left;
  overflow: hidden;
}

.sidebaradmin .profile_image {
  width: 100px;
  height: 100px;
  background: -webkit-linear-gradient(left, #24a0ed, #2ea0e7);
  border-radius: 100px;
  margin-bottom: 10px;
}

.sidebaradmin h4 {
 
  color: #ccc;
  background: -webkit-linear-gradient(bottom , #607d8b, #2ea0e7);
  height: 180px;
  margin-top: -140px;
  margin-bottom: 0px;
}

.sidebaradmin a {
  color: #fff;
  background: #607d8b;
  display: block;
  width: 100%;
  line-height: 60px;
  text-decoration: none;
  padding-left: 40px;
  box-sizing: border-box;
  transition: 0.5s;
  

}

.sidebaradmin a:hover {
  background: #e9e9e9;
}

.sidebaradmin i 
{
  padding-right: 10px;
}

label #sidebar_btn {
  
  z-index: 1;
  color: #fff;
  cursor: pointer;
  right: 650px;
  font-size: 20px;
  margin: 5px 0;
  transition: 0.5s;
  transition-property: color;
}

label #sidebar_btn:hover {
  color: #19B3D3;
}

#check:checked~.sidebaradmin {
  left: -190px;
}

#check:checked~.sidebaradmin a span {
  display: none;
}

#check:checked~.sidebaradmin a {
  font-size: 20px;
  margin-left: 170px;
  width: 80px;
}


.contentadminj {
  margin-left: 250px;
  background-position: center;
  background-size: cover;
  height: 400px;
  transition: 0.5s;

}

#check:checked~.contentadminj {
  margin-left: 60px;
}

#check {
  display: none;
}

</style>
