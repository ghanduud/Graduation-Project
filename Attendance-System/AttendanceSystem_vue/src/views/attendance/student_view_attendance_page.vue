<template>
  <div  v-if= "this.$store.state.user.isAuthenticated && userGroup === 'STUDENT'">
    <head>
  
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    </head>
    
    <div class="container">
    
    <div class="row">
    
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h6 class="panel-title">Your Attendnace of Date {{ this.$route.params.date }}</h6>
    
        </div>
        <table class="table table-hover table-striped table-bordered" id="dev-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student Roll</th>
                <th>Student Class</th>
                <th>Present/Absent</th>
              </tr>
            </thead>
            <tr v-for="(Student, index) in Students" :key="Student.id">
                <td>{{ Student.first_name }}</td> 
                <td>{{ Student.roll }}</td>
                <td>{{ Student.cl }}</td>
                <td>{{ Attendance[index].present_status }}</td>
                
            </tr>

          </table>
      </div>
    </div>
    <button class="backbutton" onclick="history.back()"> Back</button>
    </div>

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
              Date:this.$route.params.date,
              Students: [],             
              Attendance: [],
              userGroup:null             
          }
      },
      mounted() {
          document.title = 'view attendance  | StudyNet'
          axios.get('courses/user_group/')
          .then(response => {
          this.userGroup = response.data.group;
          })
          .catch(error => {
          console.log(error);
          });
          this.getStudents()
      },
      methods: {       
          getStudents() {
            axios
                .get(`/attendance/stud_attendance/${this.$route.params.id}/${this.$route.params.date}/`)
                .then(response => {
                    console.log(response.data)                    
                    this.Attendance = response.data.attendancies,
                    this.Students = response.data.students
                  

                    
                })
        }
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
