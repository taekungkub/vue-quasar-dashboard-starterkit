<template>
  <div>
    <div class="q-pa-lg">
      <div class="row items-center q-col-gutter-md">
        <div class="col-12 col-sm-4">
          <q-card class="flex flex-center text-center">
            <q-card-section class="q-gutter-sm">
              <q-icon name="fa-solid fa-user" size="lg" color="secondary"></q-icon>
              <div class="text-h6">Edit User</div>
              <div class="text-caption">Easily update the user data on the go, built in form validation and custom controls.</div>
              <q-btn color="dark" label="Modal edit user" @click="modalEditUserRef?.show"></q-btn>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-sm-4">
          <q-card class="flex flex-center text-center">
            <q-card-section class="q-gutter-sm">
              <q-icon name="fa-solid fa-mobile-screen" size="lg" color="secondary"></q-icon>
              <div class="text-h6">Enable OTP</div>
              <div class="text-caption">Use this modal to enhance your application security by enabling authentication with OTP.</div>
              <q-btn color="dark" label="Show" @click="modalOtpRef?.show"></q-btn>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-4">
          <q-card class="flex flex-center text-center">
            <q-card-section class="q-gutter-sm">
              <q-icon name="fa-solid fa-book" size="lg" color="secondary"></q-icon>
              <div class="text-h6">Share Projects</div>
              <div class="text-caption">Elegant Share Project options modal popup example, easy to use in any page.</div>
              <q-btn color="dark" label="Show" @click="modalShareProjectRef?.show"></q-btn>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-4">
          <q-card class="flex flex-center text-center">
            <q-card-section class="q-gutter-sm">
              <q-icon name="fa-solid fa-envelope-open" size="lg" color="secondary"></q-icon>
              <div class="text-h6">Subscribe</div>
              <div class="text-caption">Subscribe our newletter and get notification to stay update.</div>
              <q-btn color="dark" label="Show" @click="modalSubscribeRef?.show"></q-btn>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <ModalEditUser @submit="(userData) => getDataFromModal(userData)" />
    <ModalOTP @submit="(userData) => getDataFromModal(userData)" />
    <ModalShareProject @submit="(userData) => getDataFromModal(userData)" />
    <ModalSubscribe @submit="(userData) => getDataFromModal(userData)" />
  </div>
</template>

<script setup lang="ts">
import ModalEditUser from "../../components/ModalEditUser.vue";
import ModalOTP from "../../components/ModalOTP.vue";
import ModalShareProject from "../../components/ModalShareProject.vue";
import ModalSubscribe from "../../components/ModalSubscribe.vue";

import useModals from "../../hooks/useModals";
const { modalEditUserRef, modalOtpRef, modalShareProjectRef, modalSubscribeRef } = useModals();

function getDataFromModal(data: any) {
  console.log(data);
}
</script>

<style scoped></style>
