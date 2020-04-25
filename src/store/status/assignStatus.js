// @flow

const request = <T: string, P>(type: T, payload: P) => {
  return {
    type: `${type}_REQUEST`,
    payload,
  };
};

const success = <T: string, P>(type: T, payload: P) => {
  return {
    type: `${type}_SUCCESS`,
    payload,
  };
};

const failure = <T: string, E>(type: T, err: E) => {
  return {
    type: `${type}_FAILURE`,
    payload: err,
  };
};

export default {
  request,
  success,
  failure,
};
