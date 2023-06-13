<template>
  <div class="q-pa-lg">
    <div class="eiei">asdasdsadasd</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.eiei {
  font-size: clamp(0.5rem, 10vw, 5rem);
}
.titleCard {
  --w: 1024px;
  --fontSize: 14px;
  --h: calc(var(--w) * 360 / 1024);
  pointer-events: none;
  width: 100%;
  height: 20px;
  padding-bottom: calc(var(--w) * 330 / 1244);
  transition: opacity 0.7s linear 0.1s;
  opacity: 0;
}

.titleCard.show {
  opacity: 1;
  transition: opacity 0.7s;
}

.titleCard.show em {
  text-align: center;
  animation: titleAni 0.7s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.3s forwards;
  transform: translate(calc(var(--w) * -200 / 1024)) rotate(10deg);
}

.titleCard em {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1px;
  height: 1px;
  background: gold;
  transform-origin: 10.25390625% 15.625%;
  font-style: normal;
}

.titleCard em b {
  position: absolute;
  background: #f9c500;
  font-size: var(--fontSize);
  left: calc(var(--w) * 310 / 1024);
  top: calc(var(--w) * 45 / 1024);
  width: calc(var(--w) * 530 / 1024);
  min-height: calc(var(--w) * 170 / 1024);
  transform: rotate(3.9deg);
  z-index: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.titleCard em:after {
  background-image: url("https://thaivote.info/assets/titleCard-e3c83cb3.png");
  background-size: contain;
  content: "";
  display: block;
  width: var(--w);
  height: var(--h);
  position: absolute;
  top: calc(var(--w) * -105 / 1024);
  left: calc(var(--w) * -160 / 1024);
}
</style>
