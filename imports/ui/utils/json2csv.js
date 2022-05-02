import { CSV_MIME_TYPE, UTF8_PARSER } from './constants';

import { methodCallException } from './methodCall';

const json2csv = async ({ data, nombreArchivo }) => {
  try {
    const csvGenerado = await methodCallException('json2csv', { data });

    const blob = new Blob([`${UTF8_PARSER}${csvGenerado.data}`], {
      type: CSV_MIME_TYPE,
    });

    const enlaceDescarga = URL.createObjectURL(blob);

    return {
      downloadURL: enlaceDescarga,
      nombreArchivo,
    };
  } catch (error) {
    throw new Error('error generando archivo csv');
  }
};

export default json2csv;

export const json2csvFromBlob = async (data) => {
  try {
    const csvGenerado = await methodCallException('json2csv', { data });

    const blob = new Blob([`${UTF8_PARSER}${csvGenerado.data}`], {
      type: CSV_MIME_TYPE,
    });

    return new File([blob], 'analisis.csv', {
      type: 'text/csv',
    });
  } catch (error) {
    console.error(error);
    throw new Error('error generando archivo csv');
  }
};
