import { API_REQUEST } from "../constants/actionsTypes";


const apiMiddleware = ({ dispatch }) => next => action => {
  const handleResponse = response => {
    const { next, url, ...rest } = action.payload;

    dispatch({
      type: action.payload.next.SUCCESS,
      payload: { ...rest, ...response }
    });
  };

  if (action.type === API_REQUEST) {

    var requestParams = {
        method: action.payload.method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        data: action.payload.data,
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }

    fetch(action.payload.url, requestParams)
    .then(response => response.json())
    .then(handleResponse)
    .catch(error => {
        dispatch({ type: action.payload.next.ERROR, error });
    });
    dispatch({ type: action.payload.next.PENDING });
  }
  console.log(action)
  return next(action);
};

export default apiMiddleware; 