import FormularioAvanzado from '../Avanzada/FormularioAvanzado.jsx';
import FormularioBasico from '../Basica/FormularioBasico.jsx';

export const ADVANCED_TAB = {
  description: 'Avanzado',
  value: 2,
};

export const BASIC_TAB = {
  description: 'Basico',
  value: 1,
};

export const TABS = [BASIC_TAB, ADVANCED_TAB];

export const VIEW_TYPE = new Map([
  [BASIC_TAB.value, FormularioBasico],
  [ADVANCED_TAB.value, FormularioAvanzado],
]);
