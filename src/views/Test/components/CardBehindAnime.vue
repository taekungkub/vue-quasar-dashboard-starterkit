<template>
  <div class="row justify-center">
    <div class="box_card">
      <img src="https://m.media-amazon.com/images/I/41FpVNf01VL._AC_.jpg" class="img-fluid character_image" alt="" />
      <q-card class="my_card">
        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod quam iste adipisci aut eum. Perspiciatis quae molestias quibusdam, tempore,
          enim vitae corrupti in laboriosam ducimus, aperiam facilis. Unde, autem.
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.box_card {
  background-color: transparent;
  position: relative;
  width: 100%;
  max-width: 500px;

  &:hover {
    .my_card {
      transform: translateX(50px);
    }
    .character_image {
      left: -15%;
    }
  }
}

.my_card {
  transition: all 0.5s ease;
  height: 500px;
  display: block;
  margin: 0 auto;
}

.character_image {
  position: absolute;
  top: 50%;
  left: 50%;

  max-width: 150px;
  transition: all 0.5s ease;
  transform: rotate(-90deg);
  mix-blend-mode: multiply;
}

@media (max-width: 768px) {
  .character_image {
    top: 0;
    left: 35%;
    transform: rotate(0deg);
  }

  .box_card {
    &:hover {
      .my_card {
        transform: translateY(50px);
      }
      .character_image {
        top: -8%;
        left: 35%;
      }
    }
  }
}
</style>
