<template>
  <div>
    <v-container fluid pa-0>
      <v-row align="center" justify="center" style="height: 100vh">
        <v-col
          cols="12"
          class="fill-height d-flex flex-column justify-center align-center"
        >
          <v-card width="500" class="rounded-lg box-shadow pa-3">
            <v-card-title align="center">P2H System</v-card-title>
            <v-card-subtitle>Selamat datang di P2H System! </v-card-subtitle>
            <v-divider class="my-4"></v-divider>
            <v-alert
              v-if="alert.status"
              :color="alert.color"
              :icon="alert.icon"
              :title="alert.title"
              class="mx-4"
              :text="alert.message"
            ></v-alert>
            <v-card-item>
              <v-form validate-on="submit lazy" @submit.prevent="handleLogin">
                <v-text-field
                  density="comfortable"
                  type="email"
                  prepend-inner-icon="mdi-email-outline"
                  label="Email"
                  variant="outlined"
                  color="purple"
                  rules="email|required"
                  :error-messages="rules.email"
                ></v-text-field>
                <v-text-field
                  :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPassword ? 'text' : 'password'"
                  density="comfortable"
                  color="purple"
                  prepend-inner-icon="mdi-lock-outline"
                  label="Kata sandi"
                  variant="outlined"
                  rules="required"
                  @click:append-inner="showPassword = !showPassword"
                  :error-messages="rules.password"
                ></v-text-field>
                <v-btn
                  :loading="loading"
                  type="submit"
                  block
                  color="purple"
                  class="mt-2"
                  text="Masuk"
                  rounded
                ></v-btn>
              </v-form>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import store from '@/store'
import { postLogin } from '@/plugins/Axios';

const form = ref({
  email: "",
  password: "",
});
const rules = ref({
  email: [],
  password: [],
});
const showPassword = ref(false);
const loading = ref(false);
const alert = ref({
  title: "Error",
  status: false,
  message: "",
  color: "error",
  icon: "$error",
});

const handleLogin = async () => {
  try {
      loading.value = true;
      const response = await postLogin('/login', {
          data: form.value
      });
      console.log('isi response', response);
      rules.value.email = '';
      rules.value.password = '';
      loading.value = false;
      store.dispatch('login', response.data);
    } catch (error) {
      loading.value = false;
      if (error.status === 422) {
          rules.value.email = error.data.email;
          rules.value.password = error.data.password;
          alert.value.title = 'Perhatian';
          alert.value.status = true;
          alert.value.message = 'Data tidak sesuai. Silahkan dicek kembali.';
          alert.value.color = 'warning';
          alert.value.icon = '$warning';
      } else if (error.status === 401) {
          alert.value.title = 'Perhatian';
          alert.value.status = true;
          alert.value.message = 'Pengguna tidak ditemukan';
          alert.value.color = 'warning';
          alert.value.icon = '$warning';
      } else {
          alert.value.title = 'Error';
          alert.value.status = true;
          alert.value.message = error.data.message;
          alert.value.color = 'error';
          alert.value.icon = '$error';
      }
  }
};
</script>
