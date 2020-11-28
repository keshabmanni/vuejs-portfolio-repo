<template>
  <div class="upload">
    <center class="container">
      <div class="upload">
        <div class="section-1">
          <div>
            <h5>
              Certification Title
              <input
                @change="titleAdd"
                class="title"
                type="text"
                name="title"
                placeholder="Type here...."
              />

              <div v-if="title != null">
                Year
                <input
                  @change="yearAdd"
                  class="year"
                  type="text"
                  name="year"
                  maxlength="4"
                  minlength="4"
                  placeholder="Type here...."
                />
              </div>
              <div v-if="year != null">
                Provided By
                <input
                  @change="providerAdd"
                  class="provider"
                  type="text"
                  name="provider"
                  placeholder="Type here...."
                />
              </div>
            </h5>
            <input
              v-if="provider != null"
              class="img-pick"
              type="file"
              @change="previewImage"
              accept="*"
            />
            <div>
              <p>
                Progress: {{ uploadValue.toFixed() + "%" }}
                <progress
                  id="progress"
                  :value="uploadValue"
                  max="100"
                ></progress>
              </p>
            </div>
          </div>
          <div v-if="imageData != null">
            <br />
            <button @click="onUpload" class="upload-btn">
              <i class="fas fa-cloud-upload-alt"></i>
            </button>
          </div>
        </div>
        <img class="preview" :src="picture" />
      </div>
    </center>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firebase-storage";
import { db } from "../main";

export default {
  name: "Upload",
  data() {
    return {
      title: null,
      year: null,
      provider: null,
      imageData: null,
      picture: null,
      uploadValue: 0,
    };
  },
  methods: {
    titleAdd(e) {
      this.title = e.target.value;
    },
    yearAdd(e) {
      this.year = e.target.value;
    },
    providerAdd(e) {
      this.provider = e.target.value;
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref()
        .child(`/certifications`)
        .child(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;

          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            db.collection("certifications")
              .doc()
              .set({
                title: this.title,
                year: this.year,
                provider: this.provider,
                image_url: url,
              });
            this.picture = url;
          });
        }
      );
    },
  },
};
</script>
<style scoped>
img.preview {
  width: 60vw;
}
.section-1 {
  width: 60vw;
  padding: 15px;
  border-radius: 10px;
  background: rgb(1, 153, 115);
  margin: 10px;
  overflow: hidden;
}
.container {
  display: flex;
  flex-direction: column;
}
.upload {
  margin-right: 20vw;
}
.img-pick {
  color: rgb(255, 255, 255);
}
.upload {
  padding: 5px;
}
.upload-btn {
  border-radius: 10px;
  background-color: rgb(255, 131, 15);
  width: 120px;
}

.upload-btn i {
  font-size: 20px;
  padding: 5px;
}
@media (max-width: 800px) {
  .container {
    flex-direction: column;
  }
}
</style>
