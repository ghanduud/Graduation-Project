<template>
    <nav class="navbar nav" role="navigation" aria-label="main naviation" style="min-height: 5rem;">
        <div class="navbar-brand">
            <router-link class="navbar-item is-size-4" to="/">StudyNet</router-link>
        </div>

        <div id="navbar-item" class="navbar-menu">
            <div class="navbar-start">
                <router-link to="/" class="navbar-item">Home</router-link>
                <router-link to="/courses" class="navbar-item">Courses</router-link>
                <router-link to="/about" class="navbar-item">About</router-link>
                
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <template v-if= "this.$store.state.user.isAuthenticated">
                    
                            <template v-if= "this.$store.state.user.isAuthenticated && userGroup === 'ADMIN'">
                                <router-link to="/attendance/admin-base" class="button is-danger">Attendance</router-link>
                                <router-link to="/dashboard/create-course" class="button is-primary">Create course</router-link>
                            </template>
                            <template v-if= "this.$store.state.user.isAuthenticated && userGroup === 'TEACHER'">
                                <!-- <router-link to="/attendance/teacher-base/" class="button is-danger">Attendance</router-link> -->
                                <a
                                :href="`/attendance/teacher-base/${user_id}/`"
                                class="button is-danger"
                                >
                                Attendance
                                </a>
                                <router-link to="/dashboard/create-course" class="button is-primary">Create course</router-link>
                            </template>
                            <template v-if= "this.$store.state.user.isAuthenticated && userGroup === 'STUDENT'">
                               <!--  <router-link to="/attendance/student-base/" class="button is-danger">Attendance</router-link> -->
                             <!--   <router-link
                                    :to="{name: '/attendance/student-base/', params: {id: user_id }}"
                                    class="subtitle"
                                >
                                    Attendance
                                </router-link> -->
                                <a
                                :href="`/attendance/student-base/${user_id}/`"
                                class="button is-danger"
                                >
                                Attendance
                                </a>
                            </template>
                            
                            <router-link to="/dashboard/my-account" class="button is-info">My account</router-link>
                        </template>

                        <template v-else>
                            <router-link to="/sign-up" class="button is-primary"><strong>Sign up</strong></router-link>
                            <router-link to="/log-in" class="button is-light">Log in</router-link>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>


import axios from 'axios'

    export default {
    data() {
        return {
            userGroup: null,
            user_id: null
          
        }
    },
    
    async mounted() {
        axios.get('courses/user_group/')
        .then(response => {
        this.userGroup = response.data.group;
        })
        .catch(error => {
        console.log(error);
        });

        axios.get('courses/user_id/')
        .then(response => {
        this.user_id = response.data.id;
        })
        .catch(error => {
        console.log(error);
        });
    
    
    },
   
}
    

</script>

<style media="screen">
   
    .nav {
      text-align: center;
      height: 80px;
      background: -webkit-linear-gradient(left, #24a0ed, #607d8b);
      color: #fff;
      font-weight: bold;
      line-height: 80px;
    }

   
</style>
