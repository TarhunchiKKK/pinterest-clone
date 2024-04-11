import { getCurrentPin } from "../../pins/lib/currentPin";
import { addComplaintToPin } from "../../pins/pins";

function handleAddComplaintToPin(e) {
    e.stopPropagation();
    e.preventDefault();

    const complaint = e.target.value;
    const currentPin = getCurrentPin();

    addComplaintToPin(currentPin.id, complaint);
    updatePin(currentPin);
}

export {
    handleAddComplaintToPin,
}