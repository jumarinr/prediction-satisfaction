import { buildOptionsOneToTen } from '../Basica/utils';

const FUNDED_AMNT = 'funded_amnt';
const FUNDED_AMNT_INV = 'funded_amnt_inv';
const INT_RATE = 'int_rate';
const INSTALLMENT = 'installment';
const EMP_LENGTH = 'emp_length';
const REVOL_BAL = 'revol_bal';
const TOTAL_ACC = 'total_acc';
const OUT_PRNCP = 'out_prncp';
const OUT_PRNCP_INV = 'out_prncp_inv';
const TOTAL_PYMNT_INV = 'total_pymnt_inv';
const COLLECTION_RECOVERY_FEE = 'collection_recovery_fee';
const EARLIEST_CR_LINE_Y = 'earliest_cr_line_Y';
const LAST_PYMNT_D_Y = 'last_pymnt_d_Y';
const LAST_CREDIT_PULL_D_Y = 'last_credit_pull_d_Y';

export const DEFAULT_FORM_VALUES = {
  file: null,
};

export const PLANTILLA_MIGRACION = [{
  [FUNDED_AMNT]: '',
  [FUNDED_AMNT_INV]: '',
  [INT_RATE]: '',
  [INSTALLMENT]: '',
  [EMP_LENGTH]: '',
  [REVOL_BAL]: '',
  [TOTAL_ACC]: '',
  [OUT_PRNCP]: '',
  [OUT_PRNCP_INV]: '',
  [TOTAL_PYMNT_INV]: '',
  [COLLECTION_RECOVERY_FEE]: '',
  [EARLIEST_CR_LINE_Y]: '',
  [LAST_PYMNT_D_Y]: '',
  [LAST_CREDIT_PULL_D_Y]: '',
}];

export const FORMULARIO_NUMBER = [
  {
    attributeName: FUNDED_AMNT,
    label: 'El monto total comprometido con su último préstamo al momento actual',
  },
  {
    attributeName: FUNDED_AMNT_INV,
    label: 'El monto total comprometido por los inversionistas con su último préstamo al momento actual',
  },
  {
    attributeName: INT_RATE,
    label: 'Tasa de interés del préstamo',
  },
  {
    attributeName: INSTALLMENT,
    label: 'El pago mensual que debe el prestatario si el préstamo se origina',
  },
  {
    attributeName: REVOL_BAL,
    label: 'Saldo total del crédito renovable',
  },
  {
    attributeName: TOTAL_ACC,
    label: 'Número total de líneas de crédito actualmente en el expediente de crédito del prestatario',
  },
  {
    attributeName: OUT_PRNCP,
    label: 'Capital pendiente de pago para el importe total financiado',
  },
  {
    attributeName: OUT_PRNCP_INV,
    label: 'Resto del capital pendiente para la parte del importe total financiada por los inversores',
  },
  {
    attributeName: TOTAL_PYMNT_INV,
    label: 'Pagos recibidos hasta la fecha por la parte del importe total financiado por los inversores',
  },
  {
    attributeName: COLLECTION_RECOVERY_FEE,
    label: 'Tasa de cobro posterior a la carga',
  },
  {
    attributeName: EARLIEST_CR_LINE_Y,
    label: 'Año de la fecha de la primera línea de crédito declarada por el prestatario se abrió',
  },
  {
    attributeName: LAST_PYMNT_D_Y,
    label: 'Año de la última fecha de recepción del pago',
  },
  {
    attributeName: LAST_CREDIT_PULL_D_Y,
    label: 'Año de la fecha más reciente en la que LC sacó crédito para este préstamo',
  },
];

export const FORMULARIO_LIST = [
  {
    attributeName: EMP_LENGTH,
    label: 'Duración del empleo en años. Los valores posibles son entre 0 y 10, donde 0 significa menos de un año y 10 significa diez o más años',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
];

export const BASIC_TAB = {
  description: 'Basico',
  value: 1,
};

export const ADVANCED_TAB = {
  description: 'Avanzado',
  value: 2,
};

export const TABS = [BASIC_TAB, ADVANCED_TAB];

export const SEGMENTS_LABEL = [
  { text: 'Muy Malo', position: 'OUTSIDE' },
  { text: 'Malo', position: 'OUTSIDE' },
  { text: 'Regular', position: 'OUTSIDE' },
  { text: 'Bueno', position: 'OUTSIDE' },
  { text: 'Muy Bueno', position: 'OUTSIDE' },
];
