export const BASE_URL = 'https://satisfaccion-model.herokuapp.com/prediccion';

export const HEADERS = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

export const DEFAULT_FORM_VALUES = {
  file: null,
  isAbuelo: false,
};

export const DEFAULT_DATA_PLANTILLA_ADULTOS = [
  {
    step_in_life: '',
    free_time_satisfaction: '',
    health_satisfaction: '',
    happiness_yesterday: '',
    life_worthiness: '',
    job_satisfaction: '',
    safety_satisfaction: '',
    worried_level: '',
    sadness_level: '',
    home_life_conditions: '',
    childhouse_home: '',
    home_incomes: '',
  },
];

/**
'step_in_life','free_time_satisfaction',
'health_satisfaction','happiness_yesterday',
'life_worthiness','life_satisfaction',
'safety_satisfaction','worried_level','sadness_level',
'home_life_conditions','childhouse_home','has_internet',
'parents_number','goods_quantity','poverty',
'live_after_5_years'
*/

export const DEFAULT_DATA_PLANTILLA_KIDS = [
  {
    step_in_life: '',
    free_time_satisfaction: '',
    health_satisfaction: '',
    happiness_yesterday: '',
    life_worthiness: '',
    life_satisfaction: '',
    safety_satisfaction: '',
    worried_level: '',
    sadness_level: '',
    home_life_conditions: '',
    childhouse_home: '',
    has_internet: '',
    parents_number: '',
    goods_quantity: '',
    poverty: '',
    live_after_5_years: '',
  },
];
