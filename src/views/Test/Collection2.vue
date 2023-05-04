<template>
  <q-page class="q-pa-lg">
    <h6>COLLECTION</h6>

    <div class="row q-col-gutter-md q-mt-lg">
      <div class="col-12 col-sm-4" v-for="item in collectionList" :key="item.id">
        <CardCollection :title="item.title" :image="item.image" />
      </div>
    </div>

    <div class="q-pa-lg">
      <CardBehindAnime />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import CardBehindAnime from "./components/CardBehindAnime.vue";
import CardCollection from "./components/CardCollection.vue";

const collectionList = [
  {
    id: 1,
    title: "Collection 1",
    image: "https://beta-web.zonobaka.com/bnk48/assets/fanart_1.69f5de42.png",
  },
  {
    id: 2,
    title: "Collection 2",
    image: "https://beta-web.zonobaka.com/bnk48/assets/fanart_2.8b070f4b.png",
  },
  {
    id: 3,
    title: "Collection 3",
    image: "https://beta-web.zonobaka.com/bnk48/assets/fanart_3.c8d14bd9.png",
  },
];
</script>

<style lang="scss" scoped></style>
