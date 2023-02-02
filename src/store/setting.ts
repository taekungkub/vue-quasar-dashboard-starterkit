import { defineStore } from "pinia";
import { useDark, useToggle } from "@vueuse/core";
import { Dark } from "quasar";

export const useSettingStore = defineStore("setting", {
  state: () => ({
    currentTheme: "",
    miniSidebar: false,
    isSettingDrawer: false,
  }),
  actions: {
    initTheme() {
      useDark({
        onChanged(dark: boolean) {
          if (dark) {
            document.documentElement.classList.add("dark");
            Dark.set(true);
          } else {
            document.documentElement.classList.remove("dark");
            Dark.set(false);
          }
        },
      });
    },
    toggleSetting() {},
    setTheme(theme: string) {
      this.currentTheme = theme;
    },
    setMiniSidebar() {},
  },
  getters: {},
});
