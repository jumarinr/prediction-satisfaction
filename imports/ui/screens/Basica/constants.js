import { buildOptionsOneToTen } from './utils';

const OPTIONS_BUENAS_MALAS = [
  {
    value: 1,
    description: 'Muy buenas',
  },
  {
    value: 2,
    description: 'Buenas',
  },
  {
    value: 3,
    description: 'Regulares',
  },
  {
    value: 4,
    description: 'Malas',
  },
];

const OPTIONS_MEJOR_PEOR = [
  {
    value: 1,
    description: 'Mejor',
  },
  {
    value: 2,
    description: 'Igual',
  },
  {
    value: 3,
    description: 'Peor',
  },
];

const OPTIONS_SI_NO = [
  {
    value: 1,
    description: 'Si',
  },
  {
    value: 2,
    description: 'No',
  },
];

export const PREGUNTAS_ABUELOS_SELECT = [
  {
    attributeName: 'step_in_life',
    label: '¿En cuál escalón diría usted que se encuentra parado(a) en este momento? 10 Mejor vida: 0 Peor vida',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
  {
    attributeName: 'free_time_satisfaction',
    label: 'En general, ¿Qué tan satisfecho/a se siente con su tiempo libre? 10 Totalmente satisfecho(a): 0 Totalmente insatisfecho(a)',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
  {
    attributeName: 'health_satisfaction',
    label: 'En general, qué tan satisfecho(a) se siente con su salud actualmente? 10 Totalmente satisfecho(a): 0 Totalmente insatisfecho(a)',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
  {
    attributeName: 'happiness_yesterday',
    label: '¿Qué tan feliz se sintió el día de ayer? 10 Todo el tiempo feliz: 0 Para nada feliz',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
  {
    attributeName: 'life_worthiness',
    label: '¿Qué tanto considera que las cosas que hace en su vida valen la pena? 10 Valen totalmente la pena: 0 No valen la pena',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
  {
    attributeName: 'job_satisfaction',
    label: 'En general, qué tan satisfecho(a) se siente con su trabajo/actividad actualmente? 10 Totalmente satisfecho(a): 0 Totalmente insatisfecho(a)',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
  {
    attributeName: 'safety_satisfaction',
    label: 'En general, qué tan satisfecho(a) se siente con su nivel de seguridad actualmente? 10 Totalmente satisfecho(a): 0 Totalmente insatisfecho(a)',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
  {
    attributeName: 'worried_level',
    label: '¿Qué tan preocupado(a) se sintió el día de ayer? 10 Todo el tiempo preocupado(a): 0 Para nada preocupado(a)',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
  {
    attributeName: 'sadness_level',
    label: '¿Qué tan triste se sintió el día de ayer? 10 Todo el tiempo triste: 0 Para nada triste',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
  {
    attributeName: 'home_life_conditions',
    label: '¿Actualmente las condiciones de vida en su hogar son?',
    options: OPTIONS_BUENAS_MALAS,
  },
  {
    attributeName: 'childhouse_home',
    label: '¿Con relación del hogar donde usted se crió, este hogar vive económicamente?',
    options: OPTIONS_MEJOR_PEOR,
  },
  {
    attributeName: 'home_incomes',
    label: '¿Los ingresos de su hogar?',
    options: [
      { value: 1, description: 'No alcanza para cubrir los gatos mínimos' },
      { value: 2, description: 'Sólo alcanza para cubrir los gastos mínimos' },
      { value: 3, description: 'Cubre más que los gastos mínimos' },
    ],
  },
  {
    attributeName: 'has_partner',
    label: 'Vive con su pareja?',
    options: [
      { value: 0, description: 'No' },
      { value: 1, description: 'Sí' },
    ],
  },
];

export const PREGUNTAS_ABUELOS_INPUT = [
  {
    attributeName: 'kids_amount',
    label: 'Ingrese la cantidad de niños que hay en el hogar',
  },
  {
    attributeName: 'teenagers_amount',
    label: 'Ingrese la cantidad de adolescentes que hay en el hogar',
  },
  {
    attributeName: 'sons_amount',
    label: 'Ingrese la cantidad de hijos que hay en el hogar',
  },
];

export const PREGUNTAS_KIDS_SELECT = [
  {
    attributeName: 'step_in_life',
    label: '¿En cuál escalón diría usted que se encuentra parado(a) en este momento? 10 Mejor vida: 0 Peor vida',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
  {
    attributeName: 'free_time_satisfaction',
    label: 'En general, ¿qué tan satisfecho/a se siente con su tiempo libre? 10 Totalmente satisfecho(a): 0 Totalmente insatisfecho(a)',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
  {
    attributeName: 'health_satisfaction',
    label: 'En general, qué tan satisfecho(a) se siente  con su salud actualmente? 10 Totalmente satisfecho(a): 0 Totalmente insatisfecho(a)',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
  {
    attributeName: 'happiness_yesterday',
    label: '¿Qué tan feliz se sintió el día de ayer? 10 Todo el tiempo feliz: 0 Para nada feliz',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
  {
    attributeName: 'life_worthiness',
    label: '¿Qué tanto considera que las cosas que hace en su vida valen la pena? 10 Valen totalmente la pena: 0 No valen la pena',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
  {
    attributeName: 'safety_satisfaction',
    label: 'En general, qué tan satisfecho(a) se siente con su nivel de seguridad actualmente? 10 Totalmente satisfecho(a): 0 Totalmente insatisfecho(a)',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
  {
    attributeName: 'worried_level',
    label: '¿Qué tan preocupado(a) se sintió el día de ayer? 10 Todo el tiempo preocupado(a): 0 Para nada preocupado(a)',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
  {
    attributeName: 'sadness_level',
    label: '¿Qué tan triste se sintió el día de ayer? 10 Todo el tiempo triste: 0 Para nada triste',
    options: buildOptionsOneToTen({
      left: 0,
      right: 10,
    }),
  },
  {
    attributeName: 'home_life_conditions',
    label: '¿Actualmente las condiciones de vida en su hogar son?',
    options: OPTIONS_BUENAS_MALAS,
  },
  {
    attributeName: 'childhouse_home',
    label: '¿Con relación del hogar donde usted se crió, este hogar vive económicamente?',
    options: OPTIONS_MEJOR_PEOR,
  },
  {
    attributeName: 'has_internet',
    label: '¿El hogar tiene conexión a internet?',
    options: OPTIONS_SI_NO,
  },
  {
    attributeName: 'poverty',
    label: '¿Usted se considera pobre?',
    options: OPTIONS_SI_NO,
  },
  {
    attributeName: 'live_after_5_years',
    label: '¿Usted piensa que el nivel de vida actúal de su hogar, respecto al que tenía 5 años atrás es?',
    options: OPTIONS_MEJOR_PEOR,
  },
];

export const PREGUNTAS_KIDS_INPUT = [
  {
    attributeName: 'goods_quantity',
    label: 'Ingrese la cantidad de bienes que hay en el hogar',
  },
  {
    attributeName: 'parents_number',
    label: 'Ingrese la cantidad de padres que hay en el hogar',
  },
];
