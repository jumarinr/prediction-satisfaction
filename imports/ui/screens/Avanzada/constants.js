import _ from 'lodash';

import {
  PREGUNTAS_ABUELOS_INPUT, PREGUNTAS_ABUELOS_SELECT, PREGUNTAS_KIDS_INPUT, PREGUNTAS_KIDS_SELECT,
} from '../Basica/constants';

export const DEFAULT_FORM_VALUES = {
  file: null,
  isAbuelo: false,
};

const getQuestions = (acum, current) => ({ ...acum, [current]: '' });

// obtenemos la plantilla para niños
const preguntasKids = _.concat(PREGUNTAS_KIDS_SELECT, PREGUNTAS_KIDS_INPUT);
const preguntasKidsVariables = _.map(preguntasKids, 'attributeName').reduce(getQuestions, {});

// obtenemos la plantilla para abuelos
const preguntasAbuelos = _.concat(PREGUNTAS_ABUELOS_SELECT, PREGUNTAS_ABUELOS_INPUT);
const preguntasAbuelosVariables = _.map(preguntasAbuelos, 'attributeName').reduce(getQuestions, {});

export const DEFAULT_DATA_PLANTILLA_ADULTOS = [preguntasAbuelosVariables];

export const DEFAULT_DATA_PLANTILLA_KIDS = [preguntasKidsVariables];
