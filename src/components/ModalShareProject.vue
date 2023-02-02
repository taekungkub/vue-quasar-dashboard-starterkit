<template>
  <q-dialog ref="modalShareProjectRef">
    <q-card class="full-width" style="max-width: 500px">
      <q-card-section class="flex items-center q-pb-none">
        <q-space />
        <q-btn dense icon="close" round v-close-popup color="primary" />
      </q-card-section>

      <q-card-section>
        <div class="text-center">
          <div class="text-h5">Share Project</div>
          <div class="text-muted text-subtitle q-mt-sm">Share project with a team member</div>
        </div>

        <div class="q-mt-lg q-mb-sm">
          <span class="text-subtitle text-muted">Add member</span>
        </div>
        <q-form @submit="onSubmit">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-select
                outlined
                v-model="selectedUser"
                :options="options"
                emit-value
                map-options
                lazy-rules
                clearable
                :rules="[(val) => (val && val.length > 0) || 'Please type something']"
              >
                <template v-slot:option="scope">
                  <q-item v-bind="scope.itemProps">
                    <q-item-section avatar>
                      <q-avatar :size="'lg'">
                        <q-img :src="scope.opt.image" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="q-mt-xs">{{ scope.opt.label }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </template>

                <template v-slot:selected-item="scope">
                  <div dense @remove="scope.removeAtIndex(scope.index)" :tabindex="scope.tabindex" class="flex items-center" v-if="scope.opt.image">
                    <q-avatar :size="'lg'">
                      <q-img :src="scope.opt.image" />
                    </q-avatar>
                    <span class="q-mt-sm"> {{ scope.opt.label }}</span>
                  </div>
                </template>
              </q-select>
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
import { reactive, ref } from "vue";
import useModals from "../hooks/useModals";

const $q = useQuasar();
const { modalShareProjectRef } = useModals();

const emit = defineEmits(["submit"]);

const selectedUser = ref("");

const options = ref([
  {
    image: "https://robohash.org/hicveldicta.png",
    label: "Kieattisak Suparit",
    value: "tae",
  },
  {
    image: "https://robohash.org/doloremquesintcorrupti.png",
    label: "Jake Sally",
    value: "jake",
  },
  {
    image: "https://robohash.org/consequunturautconsequatur.png",
    label: "Aruni Suda",
    value: "aruni",
  },
]);

function onSubmit() {
  $q.notify({
    type: "positive",
    message: "Submitted",
  });

  emit("submit", selectedUser.value);
}
</script>

<style></style>
