<template>
  <div>
    <div class="tw-relative">
      <img :src="props.imgaeParent" class="tw-w-full tw-h-[calc(100vh_-_80px)] tw-object-cover tw-block tw-mx-auto" alt="" />
      <Transition name="slide-right">
        <div v-if="isHover || isHover2" class="anime_1">
          <img src="@/assets/media/pik/character_1.png" alt="" v-if="isHover" />
          <img src="@/assets/media/pik/character_2.png" class="img-fluid" alt="" v-if="isHover2" />
        </div>
      </Transition>
      <div class="mask bg-gradient-dark animate__animated animate__fadeIn" @click="skip('forward')" v-show="isHover || isHover2"></div>
      <!-- <div class="box1 btn-room" @click="emit('toggle')">Click 1</div> -->
      <div>
        <q-btn class="box1" color="primary" label="Click 1" @click="emit('toggle')"> </q-btn>
      </div>
      <!-- <div class="box2 btn-room" @click="emit('toggle')">Click 2</div> -->
      <!-- <div class="box2" @mouseover="isHover2 = true" @mouseleave="isHover2 = false" @click="emit('toggle')"></div>
      <div class="box3" @mouseover="isHover2 = true" @mouseleave="isHover2 = false" @click="emit('toggle')"></div> -->
      <div class="box-exit" @click="emit('exit')">
        <q-btn icon="logout" size="1rem" color="white" flat>Exit</q-btn>
      </div>

      <div class="anime_tutorial" @click="play()">
        <img src="https://www.pngplay.com/wp-content/uploads/12/Sad-Anime-Girl-PNG-HD-Quality.png" alt="" />
      </div>

      <Transition name="fade">
        <div class="box-chat" v-if="isHover">
          <div class="inner">
            <div class="content">
              <div class="name text-primary">Nong tae</div>
              <p class="text-caption animate__animated animate__fadeInUp">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi vero recusandae rem ipsum, quae ipsam harum unde earum possimus porro eaque
                laborum? Hic eum distinctio consectetur voluptas illo sit excepturi.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur magni necessitatibus nulla deserunt distinctio natus id. Aut sapiente
                quis accusantium rerum dolores, dignissimos sunt deleniti ab consequatur quidem ut?
              </p>
            </div>
          </div>
        </div>
        <div class="box-chat" v-else-if="isHover2">
          <div class="inner">
            <div class="content">
              <div class="name text-primary">Nong tae</div>
              <p class="text-caption animate__animated animate__fadeInUp">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi vero recusandae rem ipsum, quae ipsam harum unde earum possimus porro eaque
                laborum? Hic eum distinctio consectetur voluptas illo sit excepturi.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur magni necessitatibus nulla deserunt distinctio natus id. Aut sapiente
                quis accusantium rerum dolores, dignissimos sunt deleniti ab consequatur quidem ut?
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";
import ImageParent from "@/components/ImageParent.vue";

import Audio1 from "../../../assets/media/video/chara-voice-alpha-1.mp3";
import Audio2 from "../../../assets/media/video/chara-voice-beta-1.mp3";
import Audio3 from "../../../assets/media/video/chara-voice-alpha-2.mp3";

const props = defineProps({
  imgaeParent: {
    type: String,
  },
});

const isHover = ref(false);
const isHover2 = ref(false);

const emit = defineEmits(["exit", "toggle", "hover"]);

const audio1 = new Audio(Audio1);
const audio2 = new Audio(Audio2);
const audio3 = new Audio(Audio3);

interface SongTy {
  id: number;
  url: any;
}

const songList = [audio1, audio2];
let isPlaying = ref(false);

let playList = reactive({
  currentIndex: 0,
  songs: [
    {
      id: 1,
      url: audio1,
    },
    {
      id: 2,
      url: audio2,
    },
    {
      id: 3,
      url: audio3,
    },
  ],
});

let previousPlaylistIndex = ref(0);
let currentSong = ref<SongTy>();
let audioPlayer = ref<HTMLAudioElement | null>(null);
let durationSeconds = ref(0);
let isLoaded = ref(false);
let currentSeconds = ref(0);

watch(isHover, (newVal) => {
  // if (newVal) {
  //   audio1.muted = false;
  //   audio1.play();
  // } else {
  //   audio1.muted = true;
  //   audio1.pause();
  //   audio1.currentTime = 0;
  // }
});

watch(isHover, (newVal) => {
  if (!newVal) {
    stop();
    pause();
  }
});

onMounted(() => {
  initPlayer();
});

function initPlayer() {
  audioPlayer.value = playList.songs[0].url;
  setCurrentSong(playList.songs[0]);
  audioPlayer.value.addEventListener("loadeddata", load);

  audioPlayer.value.addEventListener("pause", () => {
    isPlaying.value = false;
  });
  audioPlayer.value.addEventListener("play", () => {
    isPlaying.value = true;
  });
  audioPlayer.value.addEventListener("ended", playNextSongInPlaylist);
}

function setCurrentSong(song: SongTy) {
  currentSong.value = song;

  previousPlaylistIndex.value = playList.currentIndex;
}

function play() {
  isHover.value = true;
  audioPlayer.value?.play();
  isPlaying.value = true;
}

function stop() {
  audioPlayer.value.currentTime = 0;
}

function pause() {
  audioPlayer.value?.pause();
  isPlaying.value = false;
}

function playNextSongInPlaylist() {
  console.log("song index", playList.currentIndex);

  if (playList.currentIndex === previousPlaylistIndex.value) {
    playList.currentIndex += 1;
  }

  if (playList.currentIndex >= playList.songs.length) {
    console.log("end");
    isHover.value = false;
    playList.currentIndex = 0;
    return;
  }
  console.log("current", playList.currentIndex, "prev", previousPlaylistIndex.value);
  audioPlayer.value = playList.songs[playList.currentIndex].url;
  setCurrentSong(playList.songs[playList.currentIndex]);
  audioPlayer.value.play();
  playList.currentIndex++;
}

function skip(direction: string) {
  audioPlayer.value?.load();

  if (direction === "forward") {
    playList.currentIndex += 1;
  } else if (direction === "backward") {
    playList.currentIndex -= 1;
  }

  /**if the current Index of the playlist is greater or equal to the length of the playlist songs (the index is out of range)
         reset the index to 0. It could also mean that the playlist is at its end. */

  if (playList.currentIndex >= playList.songs.length) {
    isHover.value = false;
    playList.currentIndex = 0;
  }

  if (playList.currentIndex < 0) {
    playList.currentIndex = playList.songs.length - 1;
  }

  audioPlayer.value = playList.songs[playList.currentIndex].url;
  setCurrentSong(playList.songs[playList.currentIndex]);
  //the code below checks if a song is playing so it can go ahead and auto play
  if (isPlaying.value) {
    audioPlayer.value.play();
  }
}

function load() {
  if (audioPlayer.value?.readyState >= 1) {
    isLoaded.value = true;
    durationSeconds.value = parseInt(audioPlayer.value?.duration);
  } else {
    throw new Error("Failed to load sound file.");
  }
}
</script>

<style lang="scss" scoped>
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
  opacity: 0.5 !important;
  background-image: linear-gradient(310deg, #212229, #212529);
}

.box1 {
  /* position: absolute;
  left: 6.59%;
  right: 74.24%;
  top: 33.89%;
  bottom: 57.81%;
  background: transparent; */
  position: absolute;
  top: 23%;
  left: 5%;
  width: 20%;
  height: 7%;
  min-height: 30px;
  max-height: 100px;
}

@media screen and (max-width: 475px) {
  .box1 {
    width: 35%;
  }
}

.box2 {
  position: absolute;
  left: 6.59%;
  right: 74.24%;
  top: 47.56%;
  bottom: 44.14%;
  background: transparent;
}

.btn-room {
  border: 2px solid white;
  background-color: $primary;
  color: white;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
}

.anime_1 {
  position: absolute;
  left: 5.98%;
  right: 84.1%;
  bottom: 5.9%;
  z-index: 1;
}

.box-chat {
  position: absolute;
  left: 0%;
  right: 0%;
  top: 72.75%;
  bottom: 0%;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
}

.box-chat .inner {
  position: relative;
  top: 2%;
}
.box-chat .inner .content {
  position: absolute;
  color: white;
  width: 78%;
  left: 20%;

  .name {
    font-size: clamp(16px, 1vw, 26px);
    line-height: 2;
  }
  p {
    font-size: clamp(5px, 1vw, 14px);
    line-height: 2;
  }
}

.box-exit {
  position: absolute;
  left: 4.01%;
  right: 88.89%;
  bottom: 5.01%;
}

/* .character_name,
.character_content {
  @apply text-funny;
} */

.main {
  position: fixed;
  transition: all 0.5s ease;
  overflow: hidden;
  z-index: 50;
  width: 100%;
  &.active {
    z-index: 0;

    .top {
      transform: translateY(-100%);
    }
    .bottom {
      transform: translateY(100%);
    }
  }
}

.anime_tutorial {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30%;
}
</style>
