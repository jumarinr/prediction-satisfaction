import { Meteor } from 'meteor/meteor';

import BlueBird from 'bluebird';
import { stringify } from 'csv-stringify';

/**
 * Funcion para transformar el archivo de json a csv
 * @param {Object[]} fileContent
 */
const json2csv = async (fileContent) => {
  const parseCSV = BlueBird.promisify(stringify);

  try {
    const promesaParseo = parseCSV(fileContent, {
      header: true,
      quoted_string: false,
    });

    return await promesaParseo;
  } catch (error) {
    console.error(error);

    throw new Meteor.Error(
      'error_converting_file',
      'Error transformando el archivo, por favor validar el documento',
    );
  }
};

export default json2csv;
