<template>
  <div>
    <q-header>
      <q-toolbar class="GNL__toolbar">
        <q-btn dense flat round icon="fa-solid fa-bars" class="q-pa-md" @click="setting.leftDrawerOpen = !setting.leftDrawerOpen" />
        <q-space />
        <div>
          <q-btn round flat icon="fa-solid fa-sun" size="sm" v-if="isDark" @click="toggleDark()"> </q-btn>
          <q-btn round flat icon="fa-solid fa-moon" size="sm" v-else @click="toggleDark()"> </q-btn>
        </div>
        <q-btn round flat icon="fa-solid fa-bell" size="sm">
          <q-badge color="red" floating transparent>3</q-badge>
          <q-menu auto-close anchor="bottom right" self="top right" transition-show="jump-down" transition-hide="jump-up">
            <q-list style="max-width: 300px; min-width: 300px">
              <q-item dense>
                <q-item-section>Notifications</q-item-section>
                <q-item-section avatar class="text-caption text-primary cursor-pointer"> View all </q-item-section>
              </q-item>
              <q-separator />

              <q-scroll-area style="height: 200px; max-width: 300px; min-width: 300px">
                <q-item clickable v-ripple class="q-py-md">
                  <q-item-section avatar>
                    <q-icon color="primary" name="fa-solid fa-cart-shopping" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Your order is placed</q-item-label>
                    <q-item-label class="text-caption">If several languages coalesce the grammar</q-item-label>
                    <q-item-label caption>3 min ago</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple class="q-py-md">
                  <q-item-section avatar> <q-icon color="positive" name="fa-solid fa-circle-check" /> </q-item-section>

                  <q-item-section>
                    <q-item-label>Your item is shiped</q-item-label>
                    <q-item-label class="text-caption">If several languages coalesce the grammar</q-item-label>
                    <q-item-label caption>1 hour ago</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple class="q-py-md">
                  <q-item-section avatar>
                    <q-icon color="primary" name="fa-solid fa-cart-shopping" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Your order is placed</q-item-label>
                    <q-item-label class="text-caption">If several languages coalesce the grammar</q-item-label>
                    <q-item-label caption>3 min ago</q-item-label>
                  </q-item-section>
                </q-item>
              </q-scroll-area>
              <q-separator />

              <q-item dense class="text-center">
                <q-item-section class="text-primary cursor-pointer">View more...</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn round flat icon="fa-solid fa-gear" size="sm" class="q-mx-sm" @click="setting.settingDrawerOpen = !setting.settingDrawerOpen"> </q-btn>

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <div class="q-ml-sm text-caption">Kieattisak Suparit</div>
            <div class="row items-center no-wrap q-ml-sm">
              <q-icon name="arrow_drop_down" size="16px" style="margin-left: -2px" />
            </div>
            <q-tooltip>Account</q-tooltip>

            <q-menu auto-close anchor="bottom right" self="top right" transition-show="jump-down" transition-hide="jump-up">
              <q-list style="min-width: 150px">
                <q-item clickable @click="$router.push('/profile')">
                  <q-item-section>
                    <div>
                      <q-icon name="fa-solid fa-user" size="14px" />
                      <span class="q-ml-sm"> Profile</span>
                    </div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>
                    <div>
                      <q-icon name="fa-solid  fa-right-from-bracket" size="14px" color="negative" />
                      <span class="q-ml-sm"> Logout</span>
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="setting.leftDrawerOpen" side="left" :width="250" :class="'bg__drawer'">
      <!-- drawer content -->
      <q-scroll-area class="fit">
        <q-list class="GNL__drawer">
          <div v-for="item in menuList" :key="item.path">
            <q-item clickable active-class="menu-link" v-ripple :active="$route.path === item.path" v-if="!item.isDropdown" @click="$router.push(item.path)">
              <q-item-section avatar>
                <q-icon :name="item.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ item.title }} </q-item-label>
              </q-item-section>
            </q-item>

            <div v-else-if="item.isDropdown">
              <q-expansion-item
                group="somegroup"
                :default-opened="`/${$route.path.split('/')[1]}` === item.path"
                :header-class="{ 'text-primary': `/${$route.path.split('/')[1]}` === item.path }"
                :expand-icon-class="{ 'text-primary': `/${$route.path.split('/')[1]}` === item.path }"
                active-class="menu-link"
              >
                <template v-slot:header="{ expanded }">
                  <q-item-section avatar>
                    <q-icon :name="item.icon" />
                  </q-item-section>
                  <q-item-section> {{ item.title }} </q-item-section>
                </template>
                <div v-for="subItem in item.children" :key="subItem.path">
                  <q-item clickable active-class="sub-menu-link" v-ripple :active="$route.path === subItem.path" @click="$router.push(subItem.path)">
                    <q-item-section avatar> </q-item-section>
                    <q-item-section>
                      <q-item-label> {{ subItem.title }} </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </q-expansion-item>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { menuList } from "../config/mockData"
import { useSettingStore } from "../store/setting"
import { useDark, useToggle } from "@vueuse/core"
import { useQuasar } from "quasar"

const setting = useSettingStore()
const $q = useQuasar()
const isDark = useDark({
  onChanged(dark: boolean) {
    if (dark) {
      $q.dark.set(true)
      document.documentElement.classList.add("dark")
      setting.setTheme("dark")
    } else {
      $q.dark.set(false)
      document.documentElement.classList.remove("dark")
      setting.setTheme("light")
    }
  },
})
const toggleDark = useToggle(isDark)
</script>

<style lang="scss" scoped>
.GNL__drawer {
  padding: 10px !important;
  text-align: left !important;
}
.GNL__drawer .q-item,
.GNL__drawer .q-expansion-item {
  margin-top: 10px !important;
  border-radius: 4px !important;

  html.dark &:hover {
    color: $grey-3;
  }
}
.menu-link {
  color: $primary !important;
}

.sub-menu-link {
  color: $primary !important;
}

.GNL__toolbar {
  background-color: var(--bg-app);
  color: var(--color-app);
}
</style>
