<template>
  <div  v-if= "this.$store.state.user.isAuthenticated && userGroup === 'ADMIN'">
<head>

  <meta name="viewport" content="width=device-width, initial-scale=1">

<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
</head>


<div class="container">

    	<div class="row" >

				<div class="panel panel-primary">
					<div class="panel-heading">
						<h6 class="panel-title">Teachers</h6>

					</div>

					<table class="table table-hover table-striped table-bordered" id="dev-table">
            <thead>

                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Salary</th>
                    <th>Joining Date</th>
                    <th>Actions</th>

                </tr>
            </thead>
              <tr  v-for="teacher in teachers" :key="teacher.id">
                  <td> {{ teacher.id}}</td>
                  <td> {{ teacher.first_name }}</td>
                  <td>{{ teacher.mobile }}</td>
                  <td>{{ teacher.salary }}</td>
                  <td>{{ teacher.joindate }}</td>
                  <td>
                    <a class="btn btn-primary btn-xs" v-on:click="updateTeacher(teacher.id)"  ><span class="glyphicon glyphicon-edit"></span></a>
                    <a class="btn btn-danger btn-xs" v-on:click="deleteTeacher(teacher.id)" ><span class="glyphicon glyphicon-trash"></span></a>
                  </td>
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
        },
        deleteTeacher(teacher_id){
          axios.delete(`/attendance/ad_delete_teacher/${teacher_id}/`)
          .then(response => {
            // Handle the successful deletion of the student
            window.location.reload();
            alert('Teacher deleted successfully!');
          })
          .catch(error => {
            // Handle the error that occurred during the deletion
            alert('An error occurred while deleting the Teacher.');
          });
        },
        updateTeacher(teacher_id) {
          window.location.href = `/attendance/admin-update-teacher/${teacher_id}/`;
        }

      
    }
};

</script>

  <style media="screen">
    a:link {
      text-decoration: none;
    }
    h6{
      text-align:center;
    }
    .row{
      margin:100px;
    }

  .backbutton {

  padding: 15px 25px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #607d8b;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  width: 3cm;
}

.backbutton:hover {background-color: #850505}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

  </style>