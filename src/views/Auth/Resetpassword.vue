<template>
  <q-page
    padding
    class="row items-center justify-center"
    style="background-position: 50%; background-size: cover; min-height: 100vh; background-image: url('https://cdn.quasar.dev/img/parallax1.jpg')"
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="row full-width">
      <div class="col-md-4 offset-md-4 col-xs-12 q-pl-md q-pr-md q-pt-sm">
        <q-card flat class="full-width shadow-2">
          <div class="row">
            <div class="col-md-12 col-xs-12">
              <div class="q-pa-lg">
                <div class="text-h5 text-weight-bold text-center q-pb-sm">Reset Password</div>
                <div class="text-body2 text-center text-grey-6 q-pb-md">You will receive an new password</div>

                <q-form class="q-gutter-md">
                  <q-input outlined v-model="formState.email" label="Email" lazy-rules :rules="[(val) => (val && val.length > 0) || 'Please type Email']" />
                  <q-input
                    outlined
                    v-model="formState.password"
                    label="Password"
                    lazy-rules
                    :rules="[(val) => (val && val.length > 0) || 'Please type Password']"
                  />
                  <q-input
                    outlined
                    v-model="formState.confirm_password"
                    label="Confirm Password"
                    lazy-rules
                    :rules="[(val) => (val && val.length > 0) || 'Please type Confirm Password']"
                  />

                  <div>
                    <q-btn label="Reset password" type="submit" color="primary" class="full-width" />
                  </div>
                </q-form>
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const formState = reactive({
  email: "",
  password: "",
  confirm_password: "",
});
</script>

<style scoped>
.mask {
  background-position: 50%;
  height: 100%;
  left: 0;
  opacity: 0.8;
  position: absolute;
  top: 0;
  width: 100%;
}
.bg-cover,
.mask {
  background-size: cover;
}
.bg-gradient-dark {
  background-image: linear-gradient(310deg, #212229, #212529);
}
.opacity-6 {
  opacity: 0.6 !important;
}
</style>
