<template>
  <div class="about">
    <figure class="profile_image">
      <img src="../assets/about_profile.jpg" alt="" />
    </figure>
    <div class="about_text">
      <div class="profile_name">Keshab Manni</div>
      <div class="profile_contact_details">
        <p>keshabmanni22@gmail.com</p>
        <p>+91 9542186990</p>
      </div>
      <div
        class="profile_address"
        style="color:  rgb(10, 252, 10); font-size: 25px; text-decoration: bold;"
      >
        Current Address: Banglore, India
      </div>
      <div class="profile_address">
        Badikedaar Gaupalika-01, B.P. Nagar, Doti, Far-Western Provience, Nepal
      </div>
    </div>
  </div>
</template>
<style>
body {
  background-color: rgb(21, 16, 53);
}
</style>
<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about_text {
  font-size: 120%;
  text-align: center;
  animation: 2.5s profile_text ease-out;
}

.about .profile_image img {
  height: 40%;
  width: 40%;
  clip-path: circle(48%);
  animation: 2.5s profile_img ease-out;
}
@keyframes profile_img {
  0% {
    transform: translateY(-20%);
  }
  100% {
    transform: translateY(0%);
  }
}
@keyframes profile_text {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}
@media only screen and (max-width: 900px) {
  .about {
    font-size: 80%;
  }
}
</style>
