<template>
  <div  v-if= "this.$store.state.user.isAuthenticated && userGroup === 'ADMIN'">
<head>

<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
</head>

<div class="container">

<div class="row">

  <div class="panel panel-primary">
    <div class="panel-heading">
      <h6 class="panel-title">Teachers Salary</h6>

    </div>
    <table class="table table-hover table-striped table-bordered" id="dev-table">
      <thead>

        <tr>
          <th>Teacher's Name</th>

          <th>Salary</th>

        </tr>
      </thead>
     
      <tr v-for="teacher in teachers" :key="teacher.id">
        <td> {{ teacher.first_name  }} {{ teacher.last_name }}</td>
        <td>{{ teacher.salary }} $</td>
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
          teachers: [],
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


        this.getTeachers()
    },
    methods: {
      getTeachers() {
            axios
                .get(`/attendance/ad_view_teachers/`)
                .then(response => {
                    console.log(response.data)
                    
                    this.teachers = response.data
                  

                    
                })
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