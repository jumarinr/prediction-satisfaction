import axios from 'axios';

import { json2csvFromBlob } from '../../utils/json2csv';
import { BASE_URL_TRABAJO_2, HEADERS } from '../../utils/constants';

export const obtenerResultados = async(formValues) => {
  try {
    const file = await json2csvFromBlob([{ ...formValues }]);
    const formData = new FormData();
    formData.append('file', file);

    const respuesta = await axios.post(BASE_URL_TRABAJO_2, formData, HEADERS);

    return respuesta?.data?.data;
  } catch (error) {
    console.error(error);
    throw new Error('error generando analisis de los datos');
  }
};

export const a = 1;
