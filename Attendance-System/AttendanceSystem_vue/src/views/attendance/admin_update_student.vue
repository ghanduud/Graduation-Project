<template>
<div  v-if= "this.$store.state.user.isAuthenticated && userGroup === 'ADMIN'">
<head>
 
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  
</head>

<!------ student update page by admin(sumit)  ---------->
<form v-on:submit.prevent="submitForm">
  <br>
  <div class="container register-form">
    <div class="form">
      <div class="note">
        <p>Update Student Details</p>
      </div>

      <div class="form-content">
        <div class="row">
          <div class="col-md-6">

            <div class="form-group">
                <div class="field">                     
                      <input type="text" class="input" placeholder="First Name" v-model="firstname">
                </div>
              </div>

             <!--  <div class="form-group">
                <div class="field">
                      <input type="email" class="input" placeholder="User Name" v-model="username" >
                </div>
              </div> -->

              <div class="form-group">
                <div class="field">
                      <input type="number" class="input" placeholder="Contact" v-model="contact">
                </div>
              </div>

              <div class="form-group">
                <div class="field">
                     <!--  <input type="number" class="input" placeholder="Class" v-model="Class"> -->
                      <label for="my-dropdown">Select a Class:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                      
                      <select id="my-dropdown" name="my-dropdown" v-model="Class">
                        <option value="one" selected >One</option>
                        <option value="two" >Two</option>
                        <option value="three" >Three</option>
                        <option value="four" >Four</option>
                        <option value="five" >Five</option>
                        <option value="six" >Six</option>
                        <option value="seven" >Seven</option>
                        <option value="eight" >Eight</option>
                        <option value="nine" >Nine</option>
                        <option value="ten" >Ten</option>
                      </select>
                      
                </div>
              </div>

              <div class="form-group">
                <div class="field">                   
                      <label>Image:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                      <input type="file" @change="handleFileUpload">
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
                      <input type="number" class="input" placeholder="Fee" v-model="fee">
                </div>
              </div>

              <div class="form-group">
                <div class="field">
                      <input type="number" class="input" placeholder="Roll" v-model="roll">
                </div>
              </div>
          </div>

        </div>

        <div class="notification is-danger" v-if="errors.length">
           <p
              v-for="error in errors"
              v-bind:key="error"
            >
              {{ error }}
            </p>
          </div>
        <br><br>

        <div class="field">
            <div class="control">
               <button class="btnSubmit">Submit</button>
            </div>
        </div>

      </div>
      <button class="backbutton" onclick="history.back()"> Back</button>

    </div>    
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
       
          errors: [],
          userGroup: null,
          
          firstname:'',
          lastname:'',
          username: '',
          password: '',
          password2: '',
          contact:'',
          fee:'',
          Class:'',
          roll:'',
          status:'',
          image: null,
          group: 'STUDENT',
             
         
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
          handleFileUpload(event) {
              this.image = event.target.files[0];
          },
          submitForm() {
              console.log('submitForm')
              this.errors = []
              /* if (this.username === '') {
                  this.errors.push('The username is missing!')
              } */
           
              if (!this.errors.length) {
                const formData = new FormData();
                formData.append('first_name', this.firstname);
                formData.append('last_name', this.lastname);
                formData.append('username', this.username);
                formData.append('password', this.password);
                formData.append('roll', this.roll);
                formData.append('cl', this.Class );
                formData.append('mobile', this.contact);
                formData.append('fee', this.fee);
                formData.append('status', this.status);
                formData.append('image', this.image ); 
                /* const FormData = {
                      first_name: this.firstname,
                      last_name: this.lastname,
                      username: this.username,
                      password: this.password,
                      roll: this.roll,
                      cl:  this.Class,
                      mobile: this.contact,
                      fee: this.fee,
                      status:this.status,
                      image: this.image                                             
                  } */

                  /* FormData.append('image', this.image); */
                 
                  axios
                      .put(`/attendance/ad_update_student/${this.$route.params.id}/`, formData)                   
                      .then(response => {                          
                          this.$router.push('/attendance/admin-view-student')
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
      border-radius: 1.5rem;
      height: 80px;
      background: -webkit-linear-gradient(left, #24a0ed, #607d8b);
      color: #fff;
      font-weight: bold;
      line-height: 80px;
    }

    .form-content {
      padding: 5%;
      border-radius: 1.5rem;
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



