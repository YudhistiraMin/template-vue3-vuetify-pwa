<template>
  <div>
    <v-navigation-drawer color="#fff" v-model="drawer" fixed app>
      <div id="nav" class="mt-2">
        <v-list v-for="(header, index) in menu" :key="index">
          <v-list-item
            nav
            class="text-body-2"
            :to="header.link"
            exact
            link
            :prepend-icon="header.icon">
            {{ header.label }}
          </v-list-item>
        </v-list>
      </div>
      <template v-slot:append>
        <v-divider></v-divider>
        <v-btn
          class="pa-xl-5 hidden-lg-and-up"
          variant="text"
          color="red"
          prepend-icon="mdi-logout-variant"
          block
          @click="logout()">
          Keluar
        </v-btn>
      </template>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" color="#fff" fixed nav elevation="1" app>
      <v-app-bar-nav-icon class="hidden-lg-and-up" @click="drawer = !drawer" />
      <v-toolbar-title class="text-body-1 d-flex align-center" :class="mdAndDown ? '' : 'pl-5'">
        <span class="font-weight-bold black--text">
          P2H        
        </span>
        <v-divider
          class="mx-3"
          vertical
          style="min-height: 25px !important;
          height: 25px
          min-width: 3px;
          margin-top: auto;
          margin-bottom: auto;
          background: #dadada;">
        </v-divider>
        <span class="text-second">
          {{ route.meta.title }}
        </span>
      </v-toolbar-title>
      <v-spacer />
      <div class="pr-5">
        <v-icon class="text-right" color="grey">mdi-bell</v-icon>
      </div>
      <v-list class="hidden-md-and-down">
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
          title="John Leider"
          subtitle="john@google.com" >
        </v-list-item>
      </v-list>

      <div class="pr-6 cursor-pointer hidden-sm-and-down"  @click="logout">
        <v-card-title class="justify-center pb-1">
          <v-icon color="#ff6161">mdi-logout-variant</v-icon>
        </v-card-title>
        <v-card-text class="text-center pa-0 text-red" style="font-size: 10px">
          Keluar
        </v-card-text>
      </div>
    </v-app-bar>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";
import { useRoute } from "vue-router";
import { TokenService } from "@/service/Storage.Service.js"

const { mdAndDown } = useDisplay()
const drawer = ref(true);
const clipped = ref(false);
const menu = ref([
  {
    label: "Dashboard",
    icon: "mdi-file-document",
    link: "/dashboard",
  },
  {
    label: "Unit",
    icon: "mdi-file-find",
    link: "/unit",
  },
  {
    label: "P2H",
    icon: "mdi-zip-box",
    link: "/p2h",
  },
]);
const route = useRoute();

function logout() {
  TokenService.removeToken()
  window.location = '/'
}

</script>

<style>
.rounded-full {
  border-radius: 50px;
  background-color: blue;
}
</style>
