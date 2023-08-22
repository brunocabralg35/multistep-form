import { createContext, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [register, setRegister] = useState({});

  const [currentPage, setCurrentPage] = useState(0);

  const planValues = {
    monthly: {
      arcade: { name: "arcade", price: 9 },
      advanced: { name: "advanced", price: 12 },
      pro: { name: "pro", price: 15 },
    },
    yearly: {
      arcade: { name: "arcade", price: 90 },
      advanced: { name: "advanced", price: 120 },
      pro: { name: "pro", price: 150 },
    },
  };

  return (
    <FormContext.Provider
      value={{ planValues, register, setRegister, currentPage, setCurrentPage }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
