<template>
  <div class="q-pa-lg">
    <h6>Add Product</h6>

    <q-card>
      <q-card-section>
        <div class="card-title">Basic Information</div>
        <div class="card-subtitle">Fill all information below</div>
        <q-form @submit="onSubmit">
          <div class="row q-col-gutter-md">
            <div class="col-12 col-sm-6 q-gutter-md">
              <q-input
                v-model="formState.product_name"
                label="Product Name"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Please type something']"
              ></q-input>
              <q-input
                v-model="formState.manufacturer_name"
                label="Manufacturer Name"
                :rules="[(val) => (val && val.length > 0) || 'Please type some thing']"
              ></q-input>
              <q-input
                v-model="formState.manufacturer_brand"
                label="Manufacturer Brand"
                :rules="[(val) => (val && val.length > 0) || 'Please type something']"
              ></q-input>
              <q-input v-model="formState.price" label="Price" :rules="[(val) => (val && val.length > 0) || 'Please type something']"></q-input>

              <q-file v-model="formState.image" label="Product image" counter max-files="1" multiple>
                <template v-slot:append>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
            </div>
            <div class="col-12 col-sm-6 q-gutter-md">
              <q-select v-model="formState.category" label="Category" :options="['Arasaka', 'Reddead redemtion']"></q-select>
              <q-input type="textarea" v-model="formState.description" label="Product Description"></q-input>
            </div>
          </div>

          <div class="q-mt-md">
            <q-btn type="submit" label="Save change" color="primary"></q-btn>
            <q-btn flat label="Cancel" color="primary"></q-btn>
          </div>
        </q-form>
      </q-card-section>
    </q-card>

    <q-card class="q-mt-md">
      <q-card-section>
        <div class="card-title">Meta Data</div>
        <div class="card-subtitle">Fill all information below</div>
        <q-form @submit="onSubmit">
          <div class="row q-col-gutter-md">
            <div class="col-12 col-sm-6 q-gutter-md">
              <q-input
                v-model="formState2.meta_title"
                label="Meta title"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Please type something']"
              ></q-input>
              <q-input
                v-model="formState2.meta_keyword"
                label="Meta Keywords"
                :rules="[(val) => (val && val.length > 0) || 'Please type some thing']"
              ></q-input>
            </div>
            <div class="col-12 col-sm-6 q-gutter-md">
              <q-input type="textarea" v-model="formState2.meta_description" label="Meta Description"></q-input>
            </div>
          </div>

          <div class="q-mt-md">
            <q-btn type="submit" label="Save change" color="primary"></q-btn>
            <q-btn flat label="Cancel" color="primary"></q-btn>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const formState = reactive({
  product_name: "",
  manufacturer_name: "",
  manufacturer_brand: "",
  price: "",
  category: "",
  description: "",
  image: null,
});

const formState2 = reactive({
  meta_title: "",
  meta_keyword: "",
  meta_description: "",
});

function onSubmit() {}

function onSubmit2() {}
</script>

<style scoped></style>
