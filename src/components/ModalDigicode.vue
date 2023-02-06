<template>
  <q-dialog ref="modalDigicodeRef" transition-show="jump-down" transition-hide="jump-up">
    <q-card class="full-width" style="max-width: 500px">
      <q-card-section class="flex items-center q-pb-none">
        <q-space />
        <q-btn dense icon="close" round v-close-popup color="primary" />
      </q-card-section>

      <q-card-section>
        <div class="text-center">
          <div class="text-h5">Verify</div>
          <div class="text-muted text-subtitle q-mt-sm">Please enter the 6 digit code sent to example@abc.com</div>
        </div>
        <br />
        <q-form @submit="onSubmit">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-input
                outlined
                v-model="formState.code"
                mask="### - ###"
                placeholder="xxx - xxx"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Please type something']"
              >
                <template v-slot:prepend>
                  <span class="text-body2">Code</span>
                </template>
              </q-input>
            </div>
          </div>

          <div class="q-pa-md flex flex-center">
            <q-btn type="submit" color="primary" label="Submit" /> <q-btn flat color="primary" label="Cancel" v-close-popup />
          </div>
        </q-form>
        <br />
        <div class="text-center text-muted">Haven't received it? <span class="cursor-pointer text-primary">Resend a new code.</span></div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { reactive } from "vue";
import useModals from "../hooks/useModals";

const $q = useQuasar();
const { modalDigicodeRef } = useModals();

const emit = defineEmits(["submit"]);

const formState = reactive({
  code: "",
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
