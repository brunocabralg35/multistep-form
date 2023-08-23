import { createContext, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [register, setRegister] = useState({});

  const [currentPage, setCurrentPage] = useState(0);

  const planValues = {
    monthly: {
      arcade: { name: "Arcade", price: 9 },
      advanced: { name: "Advanced", price: 12 },
      pro: { name: "Pro", price: 15 },
    },
    yearly: {
      arcade: { name: "Arcade", price: 90 },
      advanced: { name: "Advanced", price: 120 },
      pro: { name: "Pro", price: 150 },
    },
  };


  return (
    <FormContext.Provider
      value={{ register, setRegister, currentPage, setCurrentPage, planValues }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
