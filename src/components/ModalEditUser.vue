<template>
  <q-dialog ref="modalEditUserRef">
    <q-card class="full-width" style="max-width: 600px">
      <q-card-section class="flex items-center q-pb-none">
        <q-space />
        <q-btn dense icon="close" round v-close-popup color="primary" />
      </q-card-section>

      <q-card-section>
        <div class="text-center">
          <div class="text-h5">Edit User Information</div>
          <div class="text-muted text-subtitle q-mt-sm">Updating user details will receive a privacy audit.</div>
        </div>

        <q-form @submit="onSubmit">
          <div class="row q-col-gutter-md">
            <div class="col-6">
              <q-input v-model="formState.fname" label="First name" lazy-rules :rules="[(val) => (val && val.length > 0) || 'Please type something']"></q-input>
            </div>
            <div class="col-6">
              <q-input v-model="formState.lname" label="Last name"></q-input>
            </div>
            <div class="col-6">
              <q-input v-model="formState.birthday" type="date" hint="Birth day" />
            </div>
            <div class="col-6">
              <q-select v-model="formState.gender" :options="['Male', 'Female']" label="Gender" />
            </div>
            <div class="col-6">
              <q-input v-model="formState.displayname" label="Displayname"></q-input>
            </div>
            <div class="col-6">
              <q-input v-model="formState.position" label="Position"></q-input>
            </div>
            <div class="col-6">
              <q-input v-model="formState.email" label="Email" disable></q-input>
            </div>
            <div class="col-6">
              <q-input v-model="formState.phonenumber" label="Phone number" mask="### - ### - ####" placeholder="eg. 094 - xxx - xxxx"> </q-input>
            </div>
          </div>

          <div class="q-pa-md flex flex-center q-mt-lg">
            <q-btn type="submit" color="primary" label="Submit" /> <q-btn flat color="primary" label="Cancel" v-close-popup />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { reactive } from "vue";
import useModals from "../hooks/useModals";

const $q = useQuasar();
const { modalEditUserRef } = useModals();

const emit = defineEmits(["submit"]);

const formState = reactive({
  fname: "",
  lname: "",
  phonenumber: "",
  email: "Dragonskymonster@gmaik.com",
  position: "",
  displayname: "",
  language: "",
  gender: undefined,
  birthday: undefined,
  files: undefined,
});

function onSubmit() {
  $q.notify({
    type: "positive",
    message: "Submitted",
  });

  emit("submit", formState);
}
</script>

<style></style>
