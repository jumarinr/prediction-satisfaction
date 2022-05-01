import { Promise as MPromise } from 'meteor/promise';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import json2csv from './json2csv';

export default new ValidatedMethod({
  name: 'json2csv',
  authenticate: true,
  validate: null,
  run({ data }) {
    this.unblock();

    const promesaArchivoConvertido = json2csv(data);

    return {
      status: 200,
      data: MPromise.await(promesaArchivoConvertido),
    };
  },
});
