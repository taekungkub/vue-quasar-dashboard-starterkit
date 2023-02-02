<template>
  <q-dialog ref="modalOtpRef">
    <q-card class="full-width" style="max-width: 500px">
      <q-card-section class="flex items-center q-pb-none">
        <q-space />
        <q-btn dense icon="close" round v-close-popup color="primary" />
      </q-card-section>

      <q-card-section>
        <div class="text-center">
          <div class="text-h5">Enable One Time Password</div>
        </div>

        <div class="q-mt-lg q-mb-lg">
          <div>Verify Your Mobile Number for SMS</div>
          <div>Enter your mobile phone number with country code and we will send you a verification code.</div>
        </div>
        <q-form @submit="onSubmit">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-input
                outlined
                v-model="formState.phonenumber"
                mask="### - ### - ####"
                placeholder="xxx - xxx - xxxx"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Please type something']"
              >
                <template v-slot:prepend>
                  <span class="text-body2">+66</span>
                </template>
              </q-input>
            </div>
          </div>

          <div class="q-pa-md flex flex-center q-mt-md">
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
const { modalOtpRef } = useModals();

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
