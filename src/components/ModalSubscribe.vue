<template>
  <q-dialog ref="modalSubscribeRef" transition-show="jump-down" transition-hide="jump-up">
    <q-card class="full-width" style="max-width: 500px">
      <q-card-section class="flex items-center q-pb-none">
        <q-space />
        <q-btn dense icon="close" round v-close-popup color="primary" />
      </q-card-section>

      <q-card-section>
        <div class="text-center">
          <q-avatar size="70px" font-size="32px" color="grey-3" text-color="primary" icon="fa-solid fa-envelope-open" class="q-mb-md" />

          <div class="text-h5">Subscribe !</div>
          <div class="text-muted text-subtitle q-mt-sm">Subscribe our newletter and get notification to stay update.</div>
        </div>

        <br />

        <q-form @submit="onSubmit">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-input outlined v-model="formState.email" lazy-rules :rules="[(val) => (val && val.length > 0) || 'Please type something']">
                <template #append>
                  <q-icon name="fa-solid fa-paper-plane" color="secondary"></q-icon>
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
const { modalSubscribeRef } = useModals();

const emit = defineEmits(["submit"]);

const formState = reactive({
  email: "Dragonskymonster@gmaik.com",
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
