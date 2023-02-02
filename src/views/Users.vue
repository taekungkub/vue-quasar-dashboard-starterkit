<template>
  <div class="q-pa-lg">
    <div class="row q-gutter-sm items-center q-mb-md">
      <div>
        <div class="text-h6 font-medium">Users List</div>
        <div class="text-body2">Your web analytics dashboard template.</div>
      </div>
      <q-space />
      <q-btn color="primary" label="+ New User" no-caps />
    </div>

    <q-table
      :table-header-class="'q-table-header'"
      :card-class="'q-card-table'"
      :rows="userList.users"
      :columns="columns"
      row-key="id"
      color="primary"
      :pagination.sync="pagination"
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
                <img :src="props.row.image" />
              </q-avatar>
              {{ props.row.firstName }} {{ props.row.lastName }}
            </span>

            <span v-else-if="col.name === 'age'">
              <q-badge>
                {{ col.value }}
              </q-badge>
            </span>

            <span v-else-if="col.name === 'verified'">
              <q-icon name="fa-solid fa-circle-check" color="green" class="q-mb-xs"></q-icon>
              <span class="q-ml-sm">Email</span>
            </span>

            <span v-else-if="col.name === 'status'">
              <span class="text-green">Active</span>
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

      <template #bottom="props">
        <div class="col-12">
          <div class="q-pa-lg flex flex-center">
            <q-pagination v-model="props.pagination.page" :max="props.pagesNumber" :max-pages="6" :boundary-numbers="false" boundary-links> </q-pagination>
          </div>
        </div>
      </template>
    </q-table>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import userList from "../config/userList";

const columns = ref([
  {
    name: "name",
    required: true,
    label: "NAME",
    align: "left",
    field: (row: any) => row.firstName,
    format: (val: any) => `${val}`,
  },

  {
    name: "email",
    required: true,
    label: "EMAIL",
    align: "left",
    field: (row: any) => row.email,
    format: (val: any) => `${val}`,
  },

  {
    name: "phone",
    required: true,
    label: "PHONE",
    align: "left",
    field: (row: any) => row.phone,
    format: (val: any) => `${val}`,
  },

  {
    name: "age",
    required: true,
    label: "AGE",
    align: "left",
    field: (row: any) => row.age,
    format: (val: any) => `${val}`,
  },
  {
    name: "verified",
    required: true,
    label: "VERIFIED",
    align: "left",
  },
  {
    name: "status",
    required: true,
    label: "STATUS",
    align: "left",
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

const pagination = ref({
  sortBy: "",
  descending: false,
  page: 1,
  rowsPerPage: 5,
  // rowsNumber: xx if getting data from a server
});

const pagesNumber = computed(() => {
  return Math.ceil(userList.users.length / pagination.value.rowsPerPage);
});
</script>

<style scoped></style>
