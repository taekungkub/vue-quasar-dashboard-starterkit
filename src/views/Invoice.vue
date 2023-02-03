<template>
  <div class="q-pa-lg">
    <h6>INVOICE DETAIL</h6>

    <div id="invoiceRef" ref="invoiceRef">
      <q-card class="q-pa-lg">
        <q-card-section>
          <div class="row">
            <div class="col-12 col-lg-12">
              <div>
                <h6 class="float-right">#123456</h6>
                <h5>Logo</h5>
              </div>
              <q-separator />

              <div class="row q-mt-md">
                <div class="col-6">
                  <address><strong>Billed To:</strong><br />John Smith <br />1234 Main <br />Apt. 4B <br />Springfield, ST 54321</address>
                </div>
                <div class="col-6" :class="{ 'text-right': $q.screen.gt.xs }">
                  <address><strong>Shipped To:</strong><br />Kenny Rigdon <br />1234 Main <br />Apt. 4B <br />Springfield, ST 54321</address>
                </div>
              </div>

              <div class="row">
                <div class="col-6 q-mt-md">
                  <address><strong>Payment Method:</strong><br />Visa ending **** 4242 <br />jsmith@email.com</address>
                </div>
                <div class="col-6 q-mt-md" :class="{ 'text-right': $q.screen.gt.xs }">
                  <address><strong>Order Date:</strong><br />October 16, 2023 <br /><br /></address>
                </div>
              </div>

              <div class="q-mt-md"><h6>Order summary</h6></div>

              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th class="text-left" style="width: 70px">No.</th>
                      <th class="text-left">Item</th>
                      <th class="text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>Quasar - Admin Dashboard</td>
                      <td class="text-right">$499.00</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>Quasar - Landing Template</td>
                      <td class="text-right">$399.00</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>Quasar - Admin Template</td>
                      <td class="text-right">$499.00</td>
                    </tr>
                    <tr>
                      <td colspan="2" class="text-right">Sub Total</td>
                      <td class="text-right">$1397.00</td>
                    </tr>
                    <tr class="border-0">
                      <td colspan="2" class="text-right"><strong>Shipping</strong></td>
                      <td class="text-right">$13.00</td>
                    </tr>
                    <tr class="border-0">
                      <td colspan="2" class="text-right"><strong>Total</strong></td>
                      <td class="text-right"><h4 class="m-0">$1410.00</h4></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="row justify-end q-gutter-sm">
            <q-btn color="positive" @click="onPrint()">
              <q-icon name="fa-solid fa-print" size="16px"></q-icon>
            </q-btn>
            <q-btn color="primary" label="Send"></q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const invoiceRef = ref<HTMLElement>();
function onPrint() {}
</script>

<style lang="scss" scoped>
.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

table {
  border-collapse: collapse;
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  vertical-align: top;
  border-color: #eff2f7;

  th {
    font-weight: 700;
  }

  tr:not(:last-child) {
    border-bottom: 1px solid #eff2f7;
  }
}

.table > :not(caption) > * > * {
  padding: 0.75rem 0.75rem;
  background-color: transparent;
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px transparent;
}

.table > :not(:first-child) {
  border-top: 2px solid #eff2f7;
}

.border-0 {
  border-width: 0 !important;
}
.border-0 {
  border: 0 !important;
}
</style>
