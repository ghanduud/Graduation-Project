<template>
  <div  v-if= "this.$store.state.user.isAuthenticated && userGroup === 'STUDENT'">
    <head>
  

      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
      
    </head>

    <!------ date page for attendance by admin(sumit)  ---------->
    <form v-on:submit.prevent="submitForm">
      
      <div class="container register-form">
        <div class="form">
          <div class="notea">
            <p>Please Enter Date for Attendance</p>
          </div>

          <div class="form-content">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                    <div class="field">
                          <input type="date" class="input" placeholder="Enter date mm/dd/yyyy" v-model="date">
                    </div> 
                  <!--   <div class="field">
                          <input type="number" class="input" placeholder="roll" v-model="roll">
                    </div>  -->
                </div>

              </div>

            </div>
            <button type="submit" class="btnSubmit">Submit</button>
          </div>
        </div>
        <button class="backbutton" onclick="history.back()"> Back</button>

      </div>

    </form>
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
              date:'',
              roll:'',
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
      },
      methods: {
          submitForm() {             
            this.$router.push(`/attendance/student-view-attendance-page/${this.$route.params.id}/${this.date}/`)
          }
      }
  }
  </script>

<style media="screen">
    a:link {
      text-decoration: none;
    }

   /*  .note {
      text-align: center;
      height: 80px;
       background: -webkit-linear-gradient(left, #343a40, #607d8b);
      color: #fff;
      font-weight: bold;
      line-height: 80px;
    } */

    .form-content {
      padding: 5%;
      border: 1px solid #ced4da;
      margin-bottom: 2%;
    }

    .form-control {
      border-radius: 1.5rem;
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

