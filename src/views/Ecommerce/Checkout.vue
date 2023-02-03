<template>
  <div class="q-pa-lg">
    <h6>CHECKOUT</h6>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-3 col-lg-2">
        <div class="q-gutter-md">
          <q-card :class="[formState.currentTab === formState.enumTab.shipping ? isActive : '']" @click="formState.currentTab = formState.enumTab.shipping">
            <q-card-section class="text-center q-mt-md">
              <q-icon name="fa-solid  fa-truck" size="sm"></q-icon>
              <h6 class="text-body2 text-weight-medium q-mt-md">Shipping Info</h6>
            </q-card-section>
          </q-card>

          <q-card :class="[formState.currentTab === formState.enumTab.payment ? isActive : '']" @click="formState.currentTab = formState.enumTab.payment">
            <q-card-section class="text-center q-mt-md">
              <q-icon name="fa-solid fa-solid fa-money-bill" size="sm"></q-icon>
              <h6 class="text-body2 text-weight-medium q-mt-md">Payment Info</h6>
            </q-card-section>
          </q-card>
          <q-card :class="[formState.currentTab === formState.enumTab.confirm ? isActive : '']" @click="formState.currentTab = formState.enumTab.confirm">
            <q-card-section class="text-center q-mt-md">
              <q-icon name="fa-solid fa-circle-check" size="sm"></q-icon>
              <h6 class="text-body2 text-weight-medium q-mt-md">Confirmation</h6>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-12 col-sm-9 col-lg-10">
        <q-card>
          <q-card-section>
            <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
              <div v-if="formState.currentTab === formState.enumTab.shipping">
                <div class="q-col-gutter">
                  <div class="card-title">Shipping information</div>
                  <div class="card-subtitle">Fill all information below</div>

                  <q-btn class="q-mt-md" label="NEXT" color="primary" @click="formState.currentTab = formState.enumTab.payment"></q-btn>
                </div>
              </div>
              <div v-else-if="formState.currentTab === formState.enumTab.payment">
                <div class="card-title">Payment information</div>
                <div class="card-subtitle">Fill all information below</div>
              </div>
              <div v-else-if="formState.currentTab === formState.enumTab.confirm">
                <div class="card-title">Order Summary</div>
              </div>
            </transition>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const formState = reactive({
  enumTab: {
    shipping: "shipping",
    payment: "payment",
    confirm: "confirm",
  },
  currentTab: "shipping",
});

const isActive = ref("text-white bg-primary");
</script>

<style scoped></style>
