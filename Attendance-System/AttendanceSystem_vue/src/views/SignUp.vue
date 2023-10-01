<template>
    <div class="signup">
      <div class="hero is-info">
        <div class="hero-body notehome has-text-centered">
          <h1 class="title">Sign up</h1>
        </div>
      </div>
      
      <div class="form-contentt">
      <section class="section">
        <form v-on:submit.prevent="submitForm">
          <div class="container">
              <div class="columns form-content">  

                  <div class="column is-6 ">
                          <div class="field">
                              
                              <div class="control">
                                  <input type="text" class="input" placeholder="Fisrt name" v-model="firstname">
                              </div>
                          </div>
  
                          <div class="field">
                              
                              <div class="control">
                                  <input type="email" class="input" placeholder="User name" v-model="username">
                              </div>
                          </div>
  
                          <div class="field">                            
                              <div class="control">
                                  <input type="number" class="input" placeholder="Contact" v-model="contact">
                              </div>
                          </div>
  
                          
                          <div class="field">
                                    
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
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Image:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <input type="file" @change="handleFileUpload">
                            </div>
                          
  
                          
                  </div>


                  <div class="column is-6 ">
                          <div class="field">           
                              <div class="control">
                                  <input type="text" class="input" placeholder="Last name" v-model="lastname">
                              </div>
                          </div>
  
                          <div class="field">
                              <div class="control">
                                  <input type="password" class="input" placeholder="Password" v-model="password">
                              </div>
                          </div>
  
                          <div class="field">
                              <div class="control">
                                  <input type="number" class="input" placeholder="Fee" v-model="fee">
                              </div>
                          </div>

                          <div class="field">
                            <input type="number" class="input" placeholder="Roll"  v-model="roll">
                         </div>   
                         

                    </div>

                  <div class="column is-8 is-offset-0">

                    
                    
                  </div>

                
              </div>

                <div class="column is-5 is-offset-5">
                    <div class="control">
                        <button class="button is-success  ">Sign up</button>
                    </div>

                    <hr>
  
                      Or <router-link to="/log-in">click here</router-link> to log in!

                </div>
                    

              

              

          </div>
        </form>     
      </section>
    </div>
  
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
              fee:'',
              Class:'',
              roll:'',
              status:'',
              image: null,
              group: 'STUDENT',
              errors: []
          }
      },
      mounted() {
          document.title = 'Register | StudyNet'
      },
      methods: {
          handleFileUpload(event) {
              this.image = event.target.files[0];
          },
          submitForm() {
              console.log('submitForm')
              this.errors = []
              if (this.username === '') {
                  this.errors.push('The username is missing!')
              }
           
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
                                 
                  axios
                      .post('/attendance/ad_add_student/', formData)                   
                      .then(response => {                          
                          this.$router.push('/log-in')
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








  <!-- <script>
  import axios from 'axios'
  export default {
      data() {
          return {
              username: '',
              password: '',
              password2: '',
              errors: []
          }
      },
      mounted() {
          document.title = 'Sign up | StudyNet'
          
    
      },
      methods: {
          submitForm() {
              console.log('submitForm')
              this.errors = []
              if (this.username === '') {
                  this.errors.push('The username is missing!')
              }
              if (this.password === '') {
                  this.errors.push('The password is missing!')
              }
              if (this.password !== this.password2) {
                  this.errors.push('The passwords are not matching!')
              }
              if (!this.errors.length) {
                  const formData = {
                      username: this.username,
                      password: this.password,
                                                             
                  }
                  
                  axios
                      .post('/attendance/add_student/', formData)                   
                      .then(response => {                                               
                          this.$router.push('/log-in')
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
  </script> -->