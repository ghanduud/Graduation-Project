<template>
  <div v-if="this.$store.state.user.isAuthenticated && userGroup === 'ADMIN' || userGroup === 'TEACHER'">

    <head>

      <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">


    </head>
    <div class="container">
      <div class="row">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h6 class="panel-title">Attendance of class {{ this.Class }} and date {{ this.Date }}</h6>
          </div>
          <table class="table table-hover table-striped table-bordered" id="dev-table">
            <thead>
              <tr>
                <!-- <th>Student Name</th> -->
                <th>Student Roll</th>
                <th>Present/Absent</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(Attendance, index) in uniqueAttendancies" :key="Attendance.id">
                <td>{{ Attendance.roll }}</td>
                <td>{{ Attendance.present_status }}</td>
              </tr>
              <!-- <tr v-for="(Student, index) in Students" :key="Student.id"
                v-if="Attendancies[index] !== undefined || Attendancies.length === 0">
                <td>{{ Student.first_name }}</td>
                <td>{{ Student.roll }}</td>
                <td>{{ Attendancies[index]?.present_status }}</td>
              </tr> -->
              <!-- <tr v-for="(Student, index) in Students" :key="Student.id"
                v-if="Attendancies[index] !== undefined || Attendancies.length === 0">
                <td>{{ Student.first_name }}</td>
                <td>{{ Student.roll }}</td>
                <td>{{ attendanceStatus(index) }}</td>
              </tr> -->

            </tbody>
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
      Class: this.$route.params.cl,
      Date: this.$route.params.date,
      Students: [],
      Attendancies: [],
      userGroup: null
    }
  },
  mounted() {
    document.title = 'view attendance  | StudyNet'
    this.getStudents()
    axios.get('courses/user_group/')
      .then(response => {
        this.userGroup = response.data.group;
      })
      .catch(error => {
        console.log(error);
      });
  },
  computed: {
    uniqueAttendancies() {
      const uniqueRolls = []
      return this.Attendancies.filter((attendance) => {
        if (!uniqueRolls.includes(attendance.roll)) {
          uniqueRolls.push(attendance.roll)
          return true
        }
        return false
      })
    }
  },
  methods: {
    getStudents() {
      axios
        .get(`/attendance/ad_view_attendance/${this.$route.params.cl}/${this.$route.params.date}`)
        .then(response => {
          console.log(response.data)
          this.Attendancies = response.data.attendancies,
            this.Students = response.data.students



        })
    }
  }
}
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

