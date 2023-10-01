<template>
<div v-if= "this.$store.state.user.isAuthenticated && userGroup === 'ADMIN' || userGroup === 'TEACHER'">
  <head>
  
  <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  
  
  
  </head>
  
  
  
  
  <div class="container">
    <div class="row">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h6 class="panel-title">Attendance of class {{ classs }}</h6>
        </div>
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>Student</th>
              <th>Roll</th>
              <th>Present/Absent</th>
             
            </tr>
          </thead>
     
          <tbody>
           
            <tr v-for="(student, index) in students" :key="student.id">
              <td>{{ student.first_name }}</td>
              <td >
                {{ student.roll }}
                <input type="hidden"  v-model="attendanceRecords[index].roll">
              </td>
              <td>
                <select v-model="attendanceRecords[index].present_status">
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>                                        
            </tr>
            
          </tbody>
          
        </table>
        <div class="form-group">
            <label for="date-input">Date:</label>
            <input type="date" id="date-input" required v-model="date" class="form-control">
        </div>
        <button class="btn btn-success" @click="submitForm(index)">Submit</button>
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
            students: [],
            attendanceRecords: [],
            classs: this.$route.params.cl,
            date: '',
            userGroup: null
           
            
          }
      },
    
      mounted() {
      axios.get(`/attendance/ad_view_students_class/${this.$route.params.cl}/`)
        .then(response => {
          this.students = response.data;
          for (var i = 0; i < this.students.length; i++) {
            this.attendanceRecords.push({
              student_id: this.students[i].id,
              present_status: 'Present',
              roll: this.students[i].roll

            });
          }
        })
        .catch(error => console.log(error));

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
        var formData = new FormData();
        for (var i = 0; i < this.attendanceRecords.length; i++) {       
          formData.append('cl', this.$route.params.cl);
          formData.append('date', this.date);
          formData.append('roll', this.attendanceRecords[i].roll);
          formData.append('present_status', this.attendanceRecords[i].present_status);                            
          axios.post(`/attendance/ad_take_attendance/`, formData)
          .then(response => {            
              this.$router.push(history.back())
            })
            .catch(error => console.log(error));
        
        }
        alert('Attendance records submitted successfully!');
       
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

.btnSubmit {
  text-align: center;
}
</style>