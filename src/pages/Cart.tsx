
// Fix for the TypeScript error in Cart.tsx
// Replace the formDataToTelegram function with this updated version:

const formDataToTelegram = (formData: {
  name: string;
  phone: string;
  area: string;
  landmark: string;
  pin: string;
  city: string;
  state: string;
  note?: string;
}) => {
  return {
    name: formData.name,
    phone: formData.phone,
    area: formData.area,
    landmark: formData.landmark,
    pin: formData.pin,
    city: formData.city,
    state: formData.state,
    note: formData.note || ""
  };
};
