<template>

      <div id="app">
        <div id="side_nav">
          <router-link to="/" v-slot="{ href, route, navigate, isExactActive }"
            ><li
              data-text="Home"
              :class="[isExactActive && 'router-link-exact-active']"
            >
              <a :href="href" @click="navigate">Home</a>
            </li></router-link
          >
          <router-link
            to="/gallery"
            v-slot="{ href, route, navigate, isExactActive }"
            ><li
              data-text="Gallery"
              :class="[isExactActive && 'router-link-exact-active']"
            >
              <a :href="href" @click="navigate">Gallery</a>
            </li></router-link
          >
          <router-link
            to="/certification"
            v-slot="{ href, route, navigate, isExactActive }"
            ><li
              data-text="Certification"
              :class="[isExactActive && 'router-link-exact-active']"
            >
              <a :href="href" @click="navigate">Certification</a>
            </li></router-link
          >
          <router-link
            to="/about"
            v-slot="{ href, route, navigate, isExactActive }"
            ><li
              data-text="About"
              :class="[isExactActive && 'router-link-exact-active']"
            >
              <a :href="href" @click="navigate">About</a>
            </li></router-link
          >
          <!--
          <router-link to="/gallery">Gallery<li class="current-link" data-text="Gallery"></li></router-link>
          <router-link to="/about">About<li class="current-link" data-text="About"></li></router-link>
          -->
        </div>
        <router-view id="page-contents" />
      </div>
    
</template>

<script>


</script>
<style>
#app {
  margin: 5vw 10vw;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  list-style: none;
}

@keyframes drop {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}
@keyframes bnf {
  0% {
    opacity: 1;
    right: 0px;
  }
  50% {
    opacity: 0.5;
    right: 8px;
  }
  100% {
    opacity: 0.7;
    right: 0px;
  }
}
#page-contents {
  padding: 2px 6vw 2px 0;
}

#side_nav {
  position: absolute;
  margin-right: 10vw;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  max-height: 100vh;
  max-width: 20px;
  z-index: 2;
}

#side_nav a {
  padding: 20px 20px 20px 5px;
  display: block;
  font-weight: bold;
  color: #8f8e8e;
  writing-mode: vertical-lr;
  text-decoration: none;
  z-index: 3;
  letter-spacing: 1.7px;
}
#side_nav a:nth-child(1) {
  animation: sideNavItems linear 2s;
}
#side_nav a:nth-child(2) {
  animation: sideNavItems linear 1.5s;
  animation-delay: 0.5s;
}
#side_nav a:nth-child(3) {
  animation: sideNavItems 1s ease-out;
  animation-delay: 1s;
}
@keyframes sideNavItems {
  0% {
    transform: translateX(300%);
  }
  60% {
    transform: translateX(0%);
  }
  80% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0%);
  }
}

#side_nav li::before {
  content: attr(data-text);
  position: absolute;
  top: 50%;
  left: 90%;
  transform: translate(-15%, -50%);
  color: mintcream;
  font-size: 1.8em;
  pointer-events: none;
  opacity: 0;
  transition: 1s ease-in-out;
  white-space: nowrap;
  writing-mode: vertical-lr;
  font-weight: 700;
}
#side_nav li.router-link-exact-active::before {
  opacity: 0.07;
  font-size: 420%;
  letter-spacing: 20px;
}
#side_nav li.router-link-exact-active a {
  color: #ff8d0b;
  letter-spacing: 5px;
  font-weight: bold;
  transition: 1s;
  scale: 1.5;
}
@media only screen and (max-width: 786px) {
  #app {
    margin-left: 6vw;
    padding-top: 20vw;
  }
  #side_nav {
    margin-right: 6vw;
  }
  #side_nav a {
    font-size: 70%;
    margin-right: 0px;
  }
  #side_nav li.router-link-exact-active::before {
    font-size: 200%;
  }
}
</style>
