import _ from 'lodash';

import axios from 'axios';

import {
  BIEN, CARA_BIEN, CARA_MUY_BIEN, CARA_MUY_TRISTE, CARA_NEUTRAL,
  CARA_TRISTE, MUY_TRISTE, NEUTRAL, TRISTE,
} from './constantsFaces';
import { BASE_URL, HEADERS } from '../../utils/constants';
import { json2csvFromBlob } from '../../utils/json2csv';

export const buildOptionsOneToTen = ({ left, right }) => {
  const elements = [];

  for (let index = left; index < right + 1; index += 1) {
    elements.push({
      value: index,
      description: index,
    });
  }

  return elements;
};

export const calculateSegmento = (resultado) => {
  if (resultado >= 0 && resultado <= MUY_TRISTE) {
    return CARA_MUY_TRISTE;
  }

  if (resultado > MUY_TRISTE && resultado <= TRISTE) {
    return CARA_TRISTE;
  }

  if (resultado > TRISTE && resultado <= NEUTRAL) {
    return CARA_NEUTRAL;
  }

  if (resultado > NEUTRAL && resultado <= BIEN) {
    return CARA_BIEN;
  }

  return CARA_MUY_BIEN;
};

export const obtenerSatisfaccion = async({ formValues, isAbuelo }) => {
  try {
    const file = await json2csvFromBlob([formValues]);

    const formData = new FormData();

    formData.append('file', file);
    formData.append('isAbuelo', isAbuelo);

    const respuesta = await axios.post(BASE_URL, formData, HEADERS);

    return _.get(respuesta, 'data.data.0.values', null);
  } catch (error) {
    console.error(error);
    throw new Error('error generando analisis de los datos');
  }
};
