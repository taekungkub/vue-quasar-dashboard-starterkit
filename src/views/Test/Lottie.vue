<template>
  <div>
    <div class="q-pa-lg">
      <h6>Lottie</h6>

      <div class="q-gutter-sm">
        <q-btn color="primary" @click="onPlay()">Play</q-btn>
        <q-btn color="primary" @click="onPause()">Pause</q-btn>
        <q-btn color="primary" @click="onStop()">Stop</q-btn>
        <q-btn color="primary" @click="handleLoop()">loop {{ isLoop }} </q-btn>
        <q-btn color="primary" @click="goToAndPlay(20)">Go to play</q-btn>
        <q-btn color="primary" @click="goToAndStop(150)">Go to stop</q-btn>
        <q-btn color="primary" @click="onDirection">Set Direction Reverse</q-btn>
      </div>

      <div class="flex flex-center">
        <div style="width: 100%; max-width: 500px">
          <LottieAnimation
            ref="anim"
            :animation-data="AnimationGiftBox"
            :auto-play="false"
            :loop="false"
            :speed="1"
            @loopComplete="loopComplete"
            @complete="complete"
            @enterFrame="enterFrame"
            @segmentStart="segmentStart"
            @stopped="stopped"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

import { LottieAnimation } from "lottie-web-vue"
import AnimationWatermelon from "./animation_watermelon.json"
import AnimationGiftBox from "./animation_giftbox.json"

let anim = ref()
const isLoop = ref(false)

function handleLoop() {
  isLoop.value = !isLoop.value
  anim.value.play()
}
// called after each loop
const loopComplete = () => {
  console.log("Loop complete")
}

// called after first loop
const complete = () => {
  console.log("First loop complete")
}

// called after first frame entered
const enterFrame = () => {
  console.log("Entered first frame")
}

// called after segment started
const segmentStart = () => {
  console.log("Segment started")
}

// called after animation stopped
const stopped = () => {
  console.log("Stopped")
}

const onPlay = () => {
  anim.value.play() // .play, .pause, .stop available
}

const onPause = () => {
  anim.value.pause()
}
const onStop = () => {
  anim.value.stop()
}

const goToAndPlay = (fram: number) => {
  anim.value.goToAndPlay(fram, true)
  anim.value
}

const goToAndStop = (fram: number) => {
  anim.value.goToAndStop(fram, true)
  anim.value
}

const onDirection = () => {
  anim.value.setDirection(-1)
}
</script>

<style scoped></style>
