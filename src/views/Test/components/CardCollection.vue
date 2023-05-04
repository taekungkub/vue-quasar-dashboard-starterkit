<template>
  <div class="card__collection">
    <img :src="props.image" class="img-fluid character-image" alt="" />

    <div class="q-pa-lg">
      <br />
      <br />
      <br />
      <h6>
        {{ props.title }}
      </h6>
      <div>
        {{ props.desc }}
      </div>
      <div class="text-caption q-mt-sm">22 Dec 23</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    default: "https://beta-web.zonobaka.com/bnk48/assets/fanart_1.69f5de42.png",
  },
  title: {
    type: String,
    default: "Collection 1",
  },
  desc: {
    type: String,
    default:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sed, harum excepturi tenetur vitae laboriosam sit molestiae. Accusamus reiciendis minus quibusdam ipsam voluptas dignissimos eum harum, deleniti ab explicabo magnam.",
  },
});
</script>

<style lang="scss" scoped>
* {
  --bg-color: #ffd861;
  --bg-color-light: #ffeeba;
  --text-color-hover: #4c5656;
  --box-shadow-color: rgba(255, 215, 97, 0.48);
}

.card__collection {
  word-wrap: break-word;
  background-clip: border-box;
  background-color: #fff;
  border: 2px solid rgba(0, 0, 0, 0.125);
  display: flex;
  flex-direction: column;
  min-width: 0;
  position: relative;
  border-radius: 20px;
  background-color: var(--bg-color);
  -webkit-box-shadow: 0 0 0.25rem rgb(8 18 34 / 10%);
  box-shadow: #ededed 0 10px 10px;
  transition: all 0.8s ease-out;
  margin-top: 60px;

  &:hover {
    border: 2px solid #111;
    transform: translateY(-5px) scale(1.005) translateZ(0);

    .character-image {
      transform: scale(1.3);
    }
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 0;
    bottom: 0;
    transition: height 0.25s ease-out;
    border-radius: 18px;
    background-image: linear-gradient(180deg, #fffef1 0%, #e8a4ad 100%);
  }

  &:hover:before {
    height: 100%;
  }
}

.character-image {
  position: absolute;
  right: 0;
  left: 0;
  top: -80px;
  margin-right: auto;
  margin-left: auto;
  object-fit: contain;
  image-rendering: pixelated;
  transition-duration: 100ms;
  max-width: 90px;
}
</style>
