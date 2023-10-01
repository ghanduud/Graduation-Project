<template>
 <div  v-if= "this.$store.state.user.isAuthenticated && userGroup === 'ADMIN'">
<head>
  
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
 
</head>

<!------ signup page for teacher by admin(sumit)  ---------->
<div class="form-contentt">
<form v-on:submit.prevent="submitForm">
  <div class="container register-form">
    <div class="form">
      <div class="note">
        <p>Hire New Teacher To School</p>
      </div>

      <div class="form-content">
        <div class="row">
          <div class="col-md-6">
              <div class="form-group">
                <div class="field">                     
                      <input type="text" class="input" placeholder="First Name" v-model="firstname">
                </div>
              </div>

              <div class="form-group">
                <div class="field">
                      <input type="email" class="input" placeholder="User Name" v-model="username">
                </div>
              </div>

              <div class="form-group">
                <div class="field">
                      <input type="number" class="input" placeholder="Contact" v-model="contact">
                </div>
              </div>

           
          </div>

          <div class="col-md-6">
              <div class="form-group">
                <div class="field">                     
                      <input type="text" class="input" placeholder="Last Name" v-model="lastname">
                </div>
              </div>

              <div class="form-group">
                <div class="field">
                      <input type="password" class="input" placeholder="Password" v-model="password">
                </div>
              </div>

              <div class="form-group">
                <div class="field">
                      <input type="number" class="input" placeholder="salary" v-model="salary">
                </div>
              </div>

   
          </div>
        </div>
        <button type="submit" class="btnSubmit">Hire</button>    
      </div>
    </div>
  </div>
</form>
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
              firstname:'',
              lastname:'',
              username: '',
              password: '',
              password2: '',
              contact:'',
              salary: '',
              status:'',
              group: 'STUDENT',
              userGroup: null,
              errors: []
          }
      },
      mounted() {
          document.title = 'ADD Teacher | StudyNet'
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
              console.log('submitForm')
              this.errors = []
              if (this.username === '') {
                  this.errors.push('The username is missing!')
              }
            /*   if (this.password === '') {
                  this.errors.push('The password is missing!')
              }
              if (this.password !== this.password2) {
                  this.errors.push('The passwords are not matching!')
              } */
              if (!this.errors.length) {
                  const FormData = {
                      first_name: this.firstname,
                      last_name: this.lastname,
                      username: this.username,
                      password: this.password,                     
                      salary: this.salary,
                      contact: this.contact
                      
                    
                  }
                  
                  axios
                      .post('/attendance/ad_add_teacher/', FormData)                   
                      .then(response => {                          
                          this.$router.push('/attendance/admin-teacher')
                      })
                      .catch(error => {
                          if (error.response) {
                              for (const property in error.response.data) {
                                  this.errors.push(`${property}: ${error.response.data[property]}`)
                              }
                              console.log(JSON.stringify(error.response.data))
                          } else if (error.message) {
                              this.errors.push('Something went wrong. Please try again')
                              
                              console.log(JSON.stringify(error))
                          }
                      })
              }
          }
      }
  }
  </script>

<style media="screen">
    a:link {
      text-decoration: none;
    }

    .note {
      text-align: center;
      height: 80px;
      background: -webkit-linear-gradient(left, #343a40, #607d8b);
      color: #fff;
      font-weight: bold;
      line-height: 80px;
    }

    .form-contentt {
      padding: 5%;
      border: 1px solid #ced4da;
      background: #fff;
      margin-bottom: 2%;
    }

    .form-control {
      border-radius: 1.5rem;
    }

    .btnSubmit {
      transform: translate(200%, -150%);
      border: none;
      border-radius: 1.5rem;
      padding: 1%;
      width: 20%;
      cursor: pointer;
      background: #4caf50;
      color: #fff;
    }
  </style>


