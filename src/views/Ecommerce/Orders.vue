<template>
  <div class="q-pa-lg">
    <div class="row q-gutter-sm items-center q-mb-md">
      <div>
        <h6>ORDERS</h6>
      </div>
    </div>

    <q-card>
      <q-table
        :table-header-class="'q-table-header'"
        :card-class="'q-card-table'"
        :rows="orderList"
        :columns="columns"
        row-key="id"
        color="primary"
        :filter="searchQuery"
        :pagination.sync="pagination"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        v-model:selected="selected"
      >
        <template v-slot:top-left>
          <q-input v-model="searchQuery" dense outlined label="Search"></q-input>
        </template>

        <template v-slot:top-right>
          <q-btn color="positive" label="+ Add new order" no-caps />
        </template>

        <template #header-selection>#</template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto-width>
              <q-checkbox v-model="props.selected" />
            </q-td>
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <span v-if="col.name === 'id'" class="row items-center">
                <span class="text-weight-bolder">{{ props.row.id }}</span>
              </span>

              <span v-else-if="col.name === 'payment_status'">
                <q-badge outline color="positive" v-if="props.row.payment_status === 'Paid'"> {{ props.row.payment_status }} </q-badge>
                <q-badge outline color="negative" v-else-if="props.row.payment_status === 'Chargeback'"> {{ props.row.payment_status }} </q-badge>
                <q-badge outline color="warning" v-else-if="props.row.payment_status === 'Refund'"> {{ props.row.payment_status }} </q-badge>
              </span>

              <span v-else-if="col.name === 'actions'">
                <q-btn label="view detail" size="sm" color="primary">
                  <q-tooltip>View</q-tooltip>
                </q-btn>
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
    </q-card>
  </div>
</template>

<script setup lang="ts">
import orderList from "../../config/orderList";
import { QTableProps } from "quasar";
import { ref } from "vue";

const columns = ref<QTableProps["columns"]>([
  {
    name: "id",
    required: true,
    label: "ID",
    align: "left",
    field: (row: any) => row.id,
    format: (val: any) => `${val}`,
  },

  {
    name: "bill_name",
    required: true,
    label: "BILL NAME",
    align: "left",
    field: (row: any) => row.bill_name,
    format: (val: any) => `${val}`,
  },

  {
    name: "date",
    required: true,
    label: "DAte",
    align: "left",
    field: (row: any) => row.date,
    format: (val: any) => `${val}`,
  },

  {
    name: "total",
    required: true,
    label: "TOTAL",
    align: "left",
    field: (row: any) => row.total,
    format: (val: any) => `${val}`,
  },

  {
    name: "payment_status",
    required: true,
    label: "Payment Status",
    align: "left",
    field: (row: any) => row.payment_status,
    format: (val: any) => `${val}`,
    sortable: true,
  },
  {
    name: "payment_method",
    required: true,
    label: "Payment Method",
    align: "left",
    field: (row: any) => row.payment_method,
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

const pagination = ref({
  sortBy: "",
  descending: false,
  page: 1,
  rowsPerPage: 5,
  // rowsNumber: xx if getting data from a server
});

const selected = ref([]);
function getSelectedString() {
  return selected.value.length === 0 ? "" : `${selected.value.length} record${selected.value.length > 1 ? "s" : ""} selected of ${orderList.length}`;
}
</script>

<style scoped></style>
