import { getCurrentPin } from "../../pins/index.js";
import { openComplaintsModal } from "../components/complaintModal.js";


function handleOpenComplaintsModal(e) {
    const currentPin = getCurrentPin();
    openComplaintsModal(currentPin);
}

export {
    handleOpenComplaintsModal
}