<template>
  <v-app>
    <Navbar v-if="route.name !== 'login'" />
    <v-main  
      min-height="80%"
      light>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { useDisplay } from "vuetify";
import { useRoute } from "vue-router";

export default {
  name: "App",
  setup() {
    const { mdAndDown, lgAndUp } = useDisplay()
    const route = useRoute();

    return {
      mdAndDown,
      lgAndUp,
      route
    };
  },
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#content {
  padding: 0px;
}
</style>
