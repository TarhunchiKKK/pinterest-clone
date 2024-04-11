import { getCurrentPin, addComplaintToPin } from "../../pins";
import { openComplaintsModal } from "../components/complaintModal";

// function handleAddComplaintToPin(e) {
//     e.stopPropagation();
//     e.preventDefault();

//     const complaint = e.target.value;
//     const currentPin = getCurrentPin();

//     addComplaintToPin(currentPin.id, complaint);
//     updatePin(currentPin);
// }

function handleOpenComplaintsModal(e) {
    openComplaintsModal();
}

export {
    // handleAddComplaintToPin,
    handleOpenComplaintsModal
}