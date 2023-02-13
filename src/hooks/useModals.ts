import { ref } from "vue";
import { QDialog } from "quasar";
import ModalImage from "../components/ModalImage.vue";
const modalEditUserRef = ref<InstanceType<typeof QDialog> | null>(null);
const modalOtpRef = ref<InstanceType<typeof QDialog> | null>(null);
const modalShareProjectRef = ref<InstanceType<typeof QDialog> | null>(null);
const modalSubscribeRef = ref<InstanceType<typeof QDialog> | null>(null);
const modalDigicodeRef = ref<InstanceType<typeof QDialog> | null>(null);
const modalImageRef = ref<InstanceType<typeof ModalImage> | null>(null);
export default function useModals() {
  return {
    modalEditUserRef,
    modalOtpRef,
    modalShareProjectRef,
    modalSubscribeRef,
    modalDigicodeRef,
    modalImageRef,
  };
}
