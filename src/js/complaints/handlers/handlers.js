import { getCurrentPin, addComplaintToPin } from "../../pins";

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