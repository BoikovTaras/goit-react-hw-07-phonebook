import actions from './input-actions';

const BASE_URL = 'https://61fc3a9c3f1e34001792c840.mockapi.io/';

const addContact = text => dispatch => {
  dispatch(actions.addContactReqwest());
  fetch(`${BASE_URL}`);
};
