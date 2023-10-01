<template>
  <div  v-if= "this.$store.state.user.isAuthenticated && userGroup === 'ADMIN'">
<head>

<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">

</head>

<div class="container">

<div class="row">

  <div class="panel panel-primary">
    <div class="panel-heading">
      <h6 class="panel-title">Students</h6>

    </div>

    <table class="table table-hover table-striped table-bordered" id="dev-table">
      <thead>

        <tr>
          <th>id</th>
          <th>Name</th>
          <th>roll</th>
          <th>Class</th>
          <th>Contact</th>
          <th>Fee</th>
          <th>Actions</th>
        </tr>
      </thead>
  
      <tr v-for="student in students" :key="student.id">
        <td> {{ student.id }}</td>
        <td> {{ student.first_name }}</td>
        <td> {{ student.roll }}</td>
        <td>{{ student.cl }}</td>
        <td>{{ student.mobile }}</td>
        <td>{{ student.fee }}</td>
        <td><a class="btn btn-primary btn-xs" v-on:click="updateStudent(student.id)"><span class="glyphicon glyphicon-edit"></span></a>
       <a class="btn btn-danger btn-xs"  v-on:click="deleteStudent(student.id)"><span class="glyphicon glyphicon-trash"></span></a></td>

      </tr>

     
    </table>
  </div>
  <button class="backbutton" onclick="history.back()"> Back</button>
</div>
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
          students: [],
          userGroup: null
          
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

        this.getStudents()
    },
    methods: {
      getStudents() {
            axios
                .get(`/attendance/ad_view_students/`)
                .then(response => {
                    console.log(response.data)                    
                    this.students = response.data        
                })
        },
        deleteStudent(student_id){
          axios.delete(`/attendance/ad_delete_student/${student_id}/`)
          .then(response => {
            // Handle the successful deletion of the student
            window.location.reload();
            alert('Student deleted successfully!');
          })
          .catch(error => {
            // Handle the error that occurred during the deletion
            alert('An error occurred while deleting the student.');
          });
       },

       updateStudent(student_id) {
        window.location.href = `/attendance/admin-update-student/${student_id}/`;
      }
       

      
    }
};

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