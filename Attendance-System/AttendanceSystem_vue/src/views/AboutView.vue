<template>
  <div class="about ">
    <div class="hero  is-info">
      <div class="hero-body notehome has-text-centered">
        <h1 class="title ">About</h1>
      </div>
    </div>

    <section class="section">
      <h2 class="subtitle">Our LMS and Attendance System</h2>
      <p class="about-text">
        At StudyNet, we're dedicated to providing the best learning experience for our students and teachers. That's why we've developed a powerful Learning Management System (LMS) and Attendance System that streamlines the educational process and enhances collaboration between students and teachers.
      </p>
      <p class="about-text">
        Our LMS allows teachers to create and manage courses, upload and share resources, and communicate with students in real-time. Students can access course materials, interact with their peers, and submit assignments and quizzes online.
      </p>
      <p class="about-text">
        Our Attendance System allows teachers to easily track attendance and monitor student participation in class. This helps to ensure that students are engaged and actively participating in their education.
      </p>
      <p class="about-text">
        We're committed to providing the best technology and support to help our students succeed. Contact us today to learn more about our LMS and Attendance System and how we can help you achieve your educational goals.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    document.title = 'About | StudyNet'
  }
}
</script>

<style>
  .notehome {
      text-align: center;
   
      height: 80px;
      background: -webkit-linear-gradient(left, #24a0ed, #607d8b);
      color: #fff;
      font-weight: bold;
      line-height: 80px;
    }

    .about-text { 
      font-size: 18px;
      color: rgb(27, 19, 34);
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }

</style>