import history from '../../history';

export const SELECT_TYPE = "SELECT_TYPE";

export const showList = selectType => dispatch => {
  dispatch({type: SELECT_TYPE, data: selectType});
  history.push("/typesList");
};