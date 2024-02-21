import { useState } from "react";

export function useForm(initialData) {
  const [data, setData] = useState(initialData);

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const resetForm = () => {
    setData(initialData);
  };

  return {
    data,
    handleInputChange,
    resetForm,
    useForm
  };
}