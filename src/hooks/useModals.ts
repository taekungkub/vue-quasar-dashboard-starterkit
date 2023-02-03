import { ref } from "vue";
import { QDialog } from "quasar";

const modalEditUserRef = ref<InstanceType<typeof QDialog> | null>(null);
const modalOtpRef = ref<InstanceType<typeof QDialog> | null>(null);
const modalShareProjectRef = ref<InstanceType<typeof QDialog> | null>(null);
const modalSubscribeRef = ref<InstanceType<typeof QDialog> | null>(null);

export default function useModals() {
  return {
    modalEditUserRef,
    modalOtpRef,
    modalShareProjectRef,
    modalSubscribeRef,
  };
}
