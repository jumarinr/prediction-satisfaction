import { createContext } from 'react';

const value = {
  formValues: {
    file: null,
  },
  setFormValues: () => null,
  resultado: null,
  setResultado: () => null,
};

const FormContext = createContext(value.light);

export default FormContext;
