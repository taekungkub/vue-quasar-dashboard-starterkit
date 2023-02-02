<template>
  <!-- <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" height="250px" class="relative" :style="{ zIndex: '-10px' }"> </q-img> -->

  <div class="q-pa-lg">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-4">
        <q-card>
          <q-card-section>
            <div class="q-block q-mx-auto text-center">
              <q-avatar size="100px" class="q-py-md">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
              <div class="q-gutter-sm q-mt-lg">
                <div class="text-h6">Kieattisak Suparit</div>
                <div class="text-body2">@admin</div>
                <div class="text-body2">Dragonskymonster@gmaik.com</div>
                <div class="text-body2">094 - xxx - xxxx</div>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <div class="q-mt-md">
          <q-card>
            <q-card-section>
              <div class="card-title">Select profile photo</div>
              <div class="row justify-center items-center q-mt-lg">
                <div class="col-4 text-center">
                  <q-avatar size="50px">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </div>

                <div class="col-8">
                  <q-file borderless hint="JPG, GIF or PNG. Max size of 800K" v-model="formState.files" label="Choose Image " max-files="1" multiple> </q-file>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="col-12 col-md-8">
        <div class="flex items-center q-mb-md q-gutter-sm">
          <q-btn color="primary" label="Account"></q-btn>
          <q-btn flat color="primary" label="Security"></q-btn>
          <q-btn flat color="primary" label="Billing & Plan"></q-btn>
        </div>
        <q-card>
          <q-card-section>
            <div class="card-title">Profile Infomation</div>
            <div class="row q-col-gutter-md">
              <div class="col-6">
                <q-input v-model="formState.fname" label="First name"></q-input>
              </div>
              <div class="col-6">
                <q-input v-model="formState.lname" label="Last name"></q-input>
              </div>
              <div class="col-6">
                <q-input v-model="formState.birthday" type="date" hint="Birth day" />
              </div>
              <div class="col-6">
                <q-select v-model="formState.gender" :options="['Male', 'Female']" label="Gender" />
              </div>
              <div class="col-6">
                <q-input v-model="formState.displayname" label="Displayname"></q-input>
              </div>
              <div class="col-6">
                <q-input v-model="formState.position" label="Position"></q-input>
              </div>
              <div class="col-6">
                <q-input v-model="formState.email" label="Email" disable></q-input>
              </div>
              <div class="col-6">
                <q-input v-model="formState.phonenumber" label="Phone number" mask="### - ### - ####" placeholder="eg. 094 - xxx - xxxx"> </q-input>
              </div>
            </div>

            <q-btn color="primary" label="Update profile" class="q-mt-md"></q-btn>
          </q-card-section>
        </q-card>

        <q-card class="GNL__card q-mt-md">
          <q-card-section>
            <div class="card-title">Change Password</div>
            <div class="row q-col-gutter-md">
              <div class="col-12">
                <q-input v-model="passwordState.current" label="Current password"></q-input>
              </div>
              <div class="col-12">
                <q-input v-model="passwordState.new" label="New password"></q-input>
              </div>
              <div class="col-12">
                <q-input v-model="passwordState.confirm" label="Confirm new password"></q-input>
              </div>
            </div>

            <q-btn color="primary" label="Update password" class="q-mt-md"></q-btn>
          </q-card-section>
        </q-card>

        <q-card class="q-mt-md">
          <q-card-section>
            <div class="card-title">Settings</div>
            <br />
            <div class="info_box">
              <div class="title">Security keys</div>
              <div class="content">
                <q-toggle dense v-model="settingState.key" />
              </div>
            </div>
            <q-separator class="q-my-lg" />
            <div class="info_box">
              <div class="title">SMS number</div>
              <div class="content">
                <q-toggle dense v-model="settingState.sms" />
              </div>
            </div>
            <q-separator class="q-my-lg" />
            <div class="info_box">
              <div class="title">Authenticator app</div>
              <div class="content">
                <q-toggle dense v-model="settingState.twofacetor" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const formState = reactive({
  fname: "",
  lname: "",
  phonenumber: "",
  email: "Dragonskymonster@gmaik.com",
  position: "",
  displayname: "",
  language: "",
  gender: undefined,
  birthday: undefined,
  files: undefined,
});

const passwordState = reactive({
  current: "",
  new: "",
  confirm: "",
});

const settingState = reactive({
  key: false,
  sms: false,
  twofacetor: false,
});
</script>

<style scoped lang="scss">
.info_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 7px;
  .title {
    font-weight: 500;
    color: $grey-7;
  }

  .content {
    color: #878a99 !important;
  }
}

.dark .info_box .title {
  color: white;
}

@media only screen and (max-width: 350px) {
  .info_box {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
}
</style>
