<template>
  <div class="q-pa-lg">
    <div class="flex items-center q-gutter-md q-mb-lg">
      <q-space />
      <q-btn
        color="secondary"
        @click="$q.fullscreen.toggle()"
        :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
        :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
      />
    </div>
    <Parent :image="imgaeParent" v-slot="slotProps">
      <Transition name="slide-right">
        <div v-if="isHover || isHover2" class="anime_1">
          <img src="../../../public/media/anime1.png" class="img-fluid" alt="" v-if="isHover" />

          <img src="../../../public/media/anime2.png" class="img-fluid" alt="" v-if="isHover2" />
        </div>
      </Transition>
      <div class="box1" @mouseover="isHover = true" @mouseleave="isHover = false"></div>
      <div class="box2" @mouseover="isHover2 = true" @mouseleave="isHover2 = false"></div>
      <div class="box3" @mouseover="isHover2 = true" @mouseleave="isHover2 = false"></div>
      <div class="box4" @mouseover="isHover2 = true" @mouseleave="isHover2 = false"></div>
      <div class="box-exit" @click="$router.back">
        <q-btn icon="logout" size="1rem" color="white" flat>Exit</q-btn>
      </div>

      <Transition name="fade">
        <div class="box-chat" v-if="isHover">
          <div class="inner">
            <div class="content q-pa-sm">
              <div class="text-primary" style="font-size: 1.2vw">Nong tae</div>
              <div class="q-mt-xs" style="font-size: 1vw">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi vero recusandae rem ipsum, quae ipsam harum unde earum possimus porro eaque
                laborum? Hic eum distinctio consectetur voluptas illo sit excepturi.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur magni necessitatibus nulla deserunt distinctio natus id. Aut sapiente
                quis accusantium rerum dolores, dignissimos sunt deleniti ab consequatur quidem ut?
              </div>
            </div>
          </div>
        </div>
        <div class="box-chat" v-else-if="isHover2">
          <div class="inner">
            <div class="content q-pa-sm">
              <div class="text-primary" style="font-size: 1.2vw">Nong Cookie</div>
              <div class="q-mt-xs" style="font-size: 1vw">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi vero recusandae rem ipsum, quae ipsam harum unde earum possimus porro eaque
                laborum? Hic eum distinctio consectetur voluptas illo sit excepturi.
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Parent>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import Parent from "./components/Parent.vue";

const imgaeParent = new URL("../../../public/media/room1.jpeg", import.meta.url).href;

const isHover = ref(false);
const isHover2 = ref(false);
</script>

<style lang="scss" scoped>
.box1 {
  position: absolute;
  left: 26.54%;
  right: 60.47%;
  top: 35.54%;
  bottom: 49.2%;
  background: transparent;
  border: 2px solid white;
}

.box2 {
  position: absolute;
  left: 9.47%;
  right: 87.26%;
  top: 39.37%;
  bottom: 47.84%;

  background: transparent;
  border: 2px solid white;
}

.box3 {
  position: absolute;
  left: 22.01%;
  right: 67.98%;
  top: 76.85%;
  bottom: 17.34%;

  background: transparent;
  border: 2px solid white;
}

.box4 {
  position: absolute;
  left: 34.12%;
  right: 63.45%;
  top: 58.58%;
  bottom: 28.69%;
  background: transparent;
  border: 2px solid white;
}

.mask {
  background-position: 50%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.mask {
  background-size: cover;
}
.bg-gradient-dark {
  background-image: linear-gradient(310deg, #212229, #212529);
}
.opacity-6 {
  opacity: 0.6;
}

.anime_1 {
  position: absolute;
  left: 3.98%;
  right: 84.1%;
  top: 54.13%;
  bottom: 2.9%;
  max-width: 300px !important;
  z-index: 1;
}

.box-chat {
  position: absolute;
  left: 0%;
  right: 0%;
  top: 72.75%;
  bottom: 0%;
  background: rgba(0, 0, 0, 0.6);
}

.box-chat .inner {
  position: absolute;
  left: 17.95%;
  right: 9.09%;
  color: white;
}

.box-chat .inner .content {
  left: 21.28%;
  right: 5.76%;
  top: 0.02%;
  bottom: 7.35%;
}

.box-exit {
  position: absolute;
  left: 4.01%;
  right: 88.89%;
  top: 84.71%;
  bottom: 5.01%;
}
</style>
