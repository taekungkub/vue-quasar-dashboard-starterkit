<template>
  <div class="card__dashboard">
    <div class="flex items-start">
      <div class="column">
        <div class="text-h6">Conversion Rate</div>
        <div class="text-caption text-muted">Compared To Last Month</div>
      </div>

      <q-space />

      <q-btn round flat size="sm" icon="fa-solid fa-ellipsis-vertical" color="secondary">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Select all</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Refresh</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Share</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>

    <div class="row wrap items-center justify-between q-mt-lg">
      <div>
        <div class="text-body1">Impressions</div>
        <div class="text-caption text-muted">12.4k Visits</div>
      </div>
      <div class="flex items-center">
        <q-icon name="fa-solid fa-arrow-up" color="positive"></q-icon>
        <span class="text-muted text-body1 text-weight-medium q-ml-sm">12.8%</span>
      </div>
    </div>

    <div class="row wrap items-center justify-between q-mt-lg">
      <div>
        <div class="text-body1">Added To Cart</div>
        <div class="text-caption text-muted">32 Product in cart</div>
      </div>
      <div class="flex items-center">
        <q-icon name="fa-solid fa-arrow-down" color="negative"></q-icon>
        <span class="text-muted text-body1 text-weight-medium q-ml-sm"> - 8.5%</span>
      </div>
    </div>

    <div class="row wrap items-center justify-between q-mt-lg">
      <div>
        <div class="text-body1">Checkout</div>
        <div class="text-caption text-muted">21 Products checkout</div>
      </div>
      <div class="flex items-center">
        <q-icon name="fa-solid fa-arrow-up" color="positive"></q-icon>
        <span class="text-muted text-body1 text-weight-medium q-ml-sm"> 9.15%</span>
      </div>
    </div>

    <div class="row wrap items-center justify-between q-mt-lg">
      <div>
        <div class="text-body1">Purchased</div>
        <div class="text-caption text-muted">12 Orders</div>
      </div>
      <div class="flex items-center">
        <q-icon name="fa-solid fa-arrow-up" color="positive"></q-icon>
        <span class="text-muted text-body1 text-weight-medium q-ml-sm"> 2.83%</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
