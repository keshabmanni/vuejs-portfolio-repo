<template>
  <div>
    <h3>Certifications</h3>
    <div class="cards">
      <div v-for="image in images" v-bind:key="image.id">
        <md-card class="md-accent md-raised" @click="openFile(image.image_url)">
          <md-card-header>
            <md-card-header-text>
              <div class="md-body-2">{{ image.title }}</div>
              <div class="md-caption">-{{image.year}}, {{image.provider}}</div>
            </md-card-header-text>
          </md-card-header>
          <md-card-media>
              <a :href="image.image_url" target="_blank">
            <md-button class="md-dense md-raised btn-view">View <i class="fas fa-certificate"></i></md-button></a>
          </md-card-media>
        </md-card>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn-view{
    background-color: royalblue;
    color: rgb(184, 51, 3);
}
.cards {
  display: flex;
  flex-wrap: wrap;
}
.md-caption {
  font-style: italic;
  color: palegoldenrod;
}
</style>
<style lang="scss" scoped>
.md-card {
  cursor: pointer;
  width: 300px;
  margin: 4px;
  border-radius: 20px;
  vertical-align: top;
  border: solid 2px rgba(214, 68, 0, 0.767);
}
</style>
<script>
import { db } from "../main";

import "vue-material/dist/vue-material.min.css";
export default {
  name: "certification",
  data() {
    return {
      images: [],
    };
  },
  methods: {
    openFile(img) {
      window.open_url(img);
    },
  },
  created() {
    db.collection("certifications")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data().image_url);
          const data = {
            id: doc.id,
            title: doc.data().title,
            image_url: doc.data().image_url,
            year: doc.data().year,
            provider: doc.data().provider
          };
          this.images.push(data);
        });
      });
  },
};
</script>
