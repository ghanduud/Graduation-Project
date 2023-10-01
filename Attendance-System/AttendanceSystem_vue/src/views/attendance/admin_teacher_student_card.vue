<template>
<div  v-if= "this.$store.state.user.isAuthenticated && userGroup === 'ADMIN'">
<!DOCTYPE html>

<html>

<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body>



  <div class="grid-container">
    <div class="grid-item">
      <div class="card">
        <img src="{% static " alt="John" style="width:100%">
        <p class="title">ADMIN Area</p>
        <p><a href="/adminclick"><button>View</button></a></p>
      </div>

    </div>

    <div class="grid-item">
      <div class="card">
        <img src="{% static " alt="John" style="width:100%">
        <p class="title">TEACHER Area</p>
        <p><a href="/teacherclick"><button>View</button></a></p>
      </div>
    </div>

    <div class="grid-item">
      <div class="card">
        <img src="{% static " alt="John" style="width:100%">
        <p class="title">STUDENT Area</p>
        <p><a href="/studentclick"><button>View</button></a></p>
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

<style>
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      max-width: 300px;
      margin: auto;
      text-align: center;
      font-family: arial;
    }

    .title {
      color: grey;
      font-size: 18px;
    }

    button {
      border: none;
      outline: 0;
      display: inline-block;
      padding: 8px;
      color: white;
      background-color: #000;
      text-align: center;
      cursor: pointer;
      width: 100%;
      font-size: 18px;
    }

    button:hover,
    a:hover {
      opacity: 0.7;
    }

    .grid-container {
      display: grid;
      grid-template-columns: auto auto auto;
      padding: 10px;
    }

    a:link {
      text-decoration: none;
    }

    a {
      color: white;
    }
  </style>

