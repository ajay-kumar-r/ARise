import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "expo-router";

interface FormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  branch: string;
  course: string;
  yearOfStudy: string;
  password: string;
  confirmPassword: string;
}

interface FormContextType {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormDataState] = useState<FormData>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    branch: "",
    course: "",
    yearOfStudy: "",
    password: "",
    confirmPassword: "",
  });

  const setFormData = (data: Partial<FormData>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  };

  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.includes("signup")) {
      setFormDataState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        branch: "",
        course: "",
        yearOfStudy: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [pathname]);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
