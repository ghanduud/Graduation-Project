<template>
    
      <div id="app">
        <video ref="video" width="640" height="480"></video>
        <canvas ref="canvas" width="640" height="480" style="display:none;"></canvas>
       
        <button class="capture-btn" v-on:click="captureImage">Capture Image</button>
              
      </div>
      <button class="backbutton" onclick="history.back()"> Back</button>  

</template>


<script>
import axios from 'axios';

  export default {
    data() {
      return {
        capturedImage: null,
        video: null,
        canvas: null,
        roll:'',
        userGroup: null,
        success: null,
        recognized: null,
        
      };
    },
    mounted() {
        this.video = this.$refs.video;
        this.canvas = this.$refs.canvas;
        this.startCamera();       
      
    },
  
    methods: {
      beforeDestroy() {
        if (this.stream) {
          const tracks = this.stream.getTracks();
          tracks.forEach((track) => {
            track.stop();
          });
        }
      },
      stopCamera: function() {
        if (this.video && this.video.srcObject) {
          const tracks = this.video.srcObject.getTracks();
          tracks.forEach((track) => {
            track.stop();
          });
          this.video.srcObject = null;
        }
      },
   

      startCamera: function() {
          var self = this;
          navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
              self.video.srcObject = stream;
              self.video.play();
            })
            .catch(function(error) {
              alert("Failed to access camera: " + error.message);
            });
        },
        captureImage: function() {
          var context = this.canvas.getContext('2d');
          context.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
          this.capturedImage = this.canvas.toDataURL();
          this.stopCamera();
          this.sendImage();
        },
        sendImage: function() {
          var self = this;
          if (self.capturedImage) {
            const formData = new FormData();
                formData.append('image', self.capturedImage);
                formData.append('roll', this.$route.params.roll);
                formData.append('class', this.$route.params.class);
            axios
              .post(`/recognition/upload_image/`, formData)                                
              .then(response => {
                  if (response.data.success && response.data.recognized) {
                    alert('Image recognized successfully!')
                    this.beforeDestroy();                
                    this.$router.go(-1);
                  } else if (response.data.success && !response.data.recognized) {
                    alert('Image not recognized. Please try again.')                    
                    this.$router.go(-1);
                  } else if (!response.data.success && !response.data.recognized) {
                    alert('No face detected.')                   
                    this.beforeDestroy();                
                    this.$router.go(0);
                  } else {
                    Alert.alert(response.data.error)                  
                    this.beforeDestroy();                
                    this.$router.go(-1);
                  }
                })
              .catch(error => {
                  console.error(error)
              })
            
          }
        },
      
    },
  };
  </script>

<style>
.containerr {
  margin-top: 50px;
}

.video-container {
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.capture-btn {
  display: block;
  margin: 0 auto;
  padding: 10px 270px;
  background-color: rgb(13, 202, 13);
  color: white;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
}
.capture-btn:hover {
  background-color: darkgreen;
}

video {
  width: 100%;
  height: 500px;
}

</style>

