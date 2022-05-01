import { Meteor } from 'meteor/meteor';

const methodCall = (name, data) => new Promise((resolve) => Meteor
  .call(name, data, (error, result) => {
    if (error) {
      return resolve({
        error: error.reason || error.message,
        data: result,
      });
    }

    return resolve({
      error: null,
      data: result,
    });
  }));

export default methodCall;

export const methodCallException = (name, data) => new Promise((resolve, reject) => Meteor
  .call(name, data, (error, result) => {
    if (error) {
      return reject(error.reason || error.message);
    }

    return resolve(result);
  }));
