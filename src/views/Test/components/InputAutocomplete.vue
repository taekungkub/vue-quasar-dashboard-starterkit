<template>
  <div class="input_wrapper" ref="inputRef">
    <div class="input_wrapper_container">
      <q-input
        :label="props.label"
        :model-value="props.modelValue"
        @update:model-value="(value) => emit('update:modelValue', value)"
        @focus="hasFocus = true"
        @blur="hasFocus = false"
        @keydown.up="pressArrow('up')"
        @keydown.down="pressArrow('down')"
        @keydown.enter="pressEnter()"
        :rules="props.rules"
      />

      <div class="list_container" ref="dropdownRef" v-if="resultsFromSearch.length && isOpenListContainer === true">
        <div
          v-for="(item, index) in resultsFromSearch"
          class="item"
          :class="{
            itemFocus: itemOnFocus === index,
          }"
          :key="index"
          @mouseover="itemOnFocus = index"
          @mouseout="itemOnFocus = -1"
          @click="clickSelectItem(item)"
        >
          <div>{{ item.district }} » {{ item.amphoe }} » {{ item.province }} » {{ item.zipcode }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import { searchAddressByDistrict, searchAddressByAmphoe, searchAddressByProvince, searchAddressByZipcode } from "thai-address-database"
import { onClickOutside } from "@vueuse/core"
import { computed, ref, watch } from "vue"

interface AddressTy {
  district: string
  amphoe: string
  province: string
  zipcode: string
}

const props = defineProps({
  modelValue: {
    type: String,
  },
  label: {
    type: String,
  },
  type: {
    type: String,
    validator: (value: string) => ["district", "amphoe", "province", "zipcode"].indexOf(value) !== -1,
  },
  rules: {
    type: Array<any>,
  },
})

const emit = defineEmits(["update:modelValue", "select"])

const hasFocus = ref(false)
const isOpenListContainer = ref(false)
const inputRef = ref()
const dropdownRef = ref()
const itemOnFocus = ref(0)

watch(
  () => hasFocus.value,
  (newVal) => {
    if (newVal === true) {
      isOpenListContainer.value = true
    }
  }
)

const resultsFromSearch = computed<AddressTy[]>(() => {
  if (props.type === "district") {
    return resultsFromSearchByDistrict()
  } else if (props.type === "amphoe") {
    return resultsFromSearchByAmphoe()
  } else if (props.type === "province") {
    return resultsFromSearchByProvince()
  } else if (props.type === "zipcode") {
    return resultsFromSearchByZipcode()
  }

  return []
})

function resultsFromSearchByDistrict() {
  return searchAddressByDistrict(props.modelValue)
}

function resultsFromSearchByAmphoe() {
  return searchAddressByAmphoe(props.modelValue)
}

function resultsFromSearchByProvince() {
  return searchAddressByProvince(props.modelValue)
}

function resultsFromSearchByZipcode() {
  return searchAddressByZipcode(props.modelValue)
}

async function clickSelectItem(item: AddressTy) {
  emit("select", item)
  isOpenListContainer.value = false
}

onClickOutside(inputRef, async (event) => {
  isOpenListContainer.value = false
})

function pressArrow(direction: "up" | "down") {
  if (direction === "up") {
    itemOnFocus.value = itemOnFocus.value > 0 ? itemOnFocus.value - 1 : 0
  } else {
    itemOnFocus.value = itemOnFocus.value < resultsFromSearch.value.length - 1 ? itemOnFocus.value + 1 : resultsFromSearch.value.length - 1
  }
  moveScrollOfListContainer()
}
function pressEnter() {
  emit("select", resultsFromSearch.value[itemOnFocus.value])
}
/**
 * เลื่อน scroll bar ตาม Item ที่เลือก
 */
function moveScrollOfListContainer() {
  const list = dropdownRef.value
  const element = list.querySelectorAll(".item")[itemOnFocus.value]
  if (!element) return
  const visMin = list.scrollTop
  const visMax = list.scrollTop + list.clientHeight - element.clientHeight
  if (element.offsetTop < visMin) {
    list.scrollTop = element.offsetTop
  } else if (element.offsetTop >= visMax) {
    list.scrollTop = element.offsetTop - list.clientHeight + element.clientHeight
  }
}
</script>

<style lang="scss" scoped>
.input_wrapper {
  width: 100%;
  margin-bottom: 0.75rem;
}

.input_wrapper_container {
  width: 100%;
  position: relative;
}

.list_container {
  z-index: 999;
  width: 100%;
  position: absolute;
  max-height: 300px;
  overflow: auto;
  border-radius: 6px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.18);
  background-color: var(--bg-card);

  .item {
    padding: 16px;
    cursor: pointer;
    border-bottom: 1px solid #eeeeee;
    &:last-child {
      border-bottom: 1px solid transparent;
    }
  }

  .itemFocus {
    background-color: rgba($color: $grey-5, $alpha: 0.3);
  }
}
</style>
