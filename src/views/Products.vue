<template>
  <div class="q-pa-lg">
    <div class="row q-gutter-sm items-center q-mb-md">
      <div>
        <div class="text-h6 font-medium">Product List</div>
        <div class="text-body2">A lightweight, extendable, dependency-free javascript HTML table plugin. .</div>
      </div>
      <q-space />
      <q-btn color="primary" label="+ New Product" no-caps />
      <q-btn outline color="primary" label="Import" no-caps />
      <q-btn outline color="primary" label="Export" no-caps />
    </div>

    <q-card>
      <q-table
        :table-header-class="'q-table-header'"
        :card-class="'q-card-table'"
        :rows="productList.products"
        :columns="columns"
        row-key="id"
        color="primary"
        :filter="searchQuery"
      >
        <template v-slot:top-left>
          <q-input v-model="searchQuery" dense outlined label="Search"></q-input>
        </template>

        <template v-slot:top-right>
          <q-btn color="primary" icon-right="archive" label="Export to csv" no-caps />
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <span v-if="col.name === 'name'" class="row items-center">
                <q-avatar size="50px">
                  <img :src="props.row.thumbnail" />
                </q-avatar>
                <span class="q-ml-md">{{ props.row.title }}</span>
              </span>

              <span v-else-if="col.name === 'status'">
                <q-badge color="positive">IN STOCK</q-badge>
              </span>

              <span v-else-if="col.name === 'rating'" class="row items-center">
                <q-icon name="fa-solid fa-star" color="yellow-7"></q-icon>
                <span class="q-ml-sm">{{ props.row.rating }}</span>
              </span>

              <span v-else-if="col.name === 'actions'">
                <q-btn round flat icon="fa-solid fa-eye" size="sm" color="primary">
                  <q-tooltip>View</q-tooltip>
                </q-btn>
                <q-btn round flat icon="fa-solid fa-edit" size="sm" color="primary"> <q-tooltip>Edit</q-tooltip> </q-btn>
                <q-btn round flat icon="fa-solid  fa-circle-xmark" size="sm" color="negative"> <q-tooltip>Delete</q-tooltip> </q-btn>
              </span>

              <span v-else> {{ col.value }}</span>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import productList from "../config/productList";

const columns = ref([
  {
    name: "name",
    required: true,
    label: "NAME",
    align: "left",
    field: (row: any) => row.title,
    format: (val: any) => `${val}`,
  },

  {
    name: "price",
    required: true,
    label: "PRICE",
    align: "left",
    field: (row: any) => row.price,
    format: (val: any) => `${val}`,
  },

  {
    name: "stock",
    required: true,
    label: "STOCK",
    align: "left",
    field: (row: any) => row.stock,
    format: (val: any) => `${val}`,
  },

  {
    name: "brand",
    required: true,
    label: "BRAND",
    align: "left",
    field: (row: any) => row.brand,
    format: (val: any) => `${val}`,
  },
  {
    name: "category",
    required: true,
    label: "CATEGORY",
    align: "left",
    field: (row: any) => row.category,
    format: (val: any) => `${val}`,
  },

  {
    name: "status",
    required: true,
    label: "STATUS",
    align: "left",
  },
  {
    name: "rating",
    required: true,
    label: "RATING",
    align: "left",
    field: (row: any) => row.rating,
    format: (val: any) => `${val}`,
    sortable: true,
  },

  {
    name: "actions",
    label: "ACTIONS",
    align: "left",
    field: (row: any) => row.actions,
    format: (val: any) => `${val}`,
  },
]);

const searchQuery = ref("");
</script>

<style scoped></style>
