<template>
  <div class="q-pa-lg">
    <h6>Form Autocomplete address</h6>

    {{ formState }}

    <q-form ref="myForm" @submit.prevent="onSubmitLogin">
      <InputAutocomplete v-model="formState.district" label="district" type="district" @select="handleSelect" :rules="[(val:any) => !!val || 'required' ]" />
      <InputAutocomplete v-model="formState.amphoe" label="amphoe" type="amphoe" @select="handleSelect" :rules="[(val:any) => !!val || 'required' ]" />
      <q-select v-model="formState.province" :options="options" label="province" :rules="[(val:any) => !!val || 'required' ]" />
      <InputAutocomplete
        v-model="formState.zipcode"
        label="zipcode"
        type="zipcode"
        @select="handleSelect"
        :rules="[(val:any) => !!val || 'required' , (val:string) => val.length < 6 || 'zipcode invalid', (val:string)=> validateNumber(val) || 'number only']"
      />
      <q-btn color="primary" type="submit">Submit</q-btn>
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue"
import InputAutocomplete from "./components/InputAutocomplete.vue"
import { QForm } from "quasar"
//@ts-ignore
import { provinceList } from "../../constant/province.ts"
import { validateNumber } from "../../helper/validate"

interface AddressTy {
  district: string
  amphoe: string
  province: string
  zipcode: string
}

const formState = reactive({
  district: "",
  amphoe: "",
  province: "",
  zipcode: "",
})

const options = ref([])

onMounted(() => {
  //@ts-ignore
  options.value = provinceList.map((v) => {
    return v.PROVINCE_NAME
  })
})

function handleSelect(item: AddressTy) {
  formState.district = item.district
  formState.amphoe = item.amphoe
  formState.province = item.province
  formState.zipcode = item.zipcode
}

const myForm = ref<InstanceType<typeof QForm> | null>(null)

async function onSubmitLogin() {
  myForm.value?.validate().then(async (success: any) => {
    console.log("submit")
  })
}
</script>

<style></style>
