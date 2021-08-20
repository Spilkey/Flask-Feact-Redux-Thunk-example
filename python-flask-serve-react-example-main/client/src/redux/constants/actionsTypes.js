const asyncActionType = (type) => ({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`,
  });

  /* API */
export const API_REQUEST = 'API_REQUEST';
export const API_REQUEST_POST = 'API_REQUEST_POST';

export const GET_COLOUR_PALETTE = asyncActionType('GET_COLOUR_PALETTE');
