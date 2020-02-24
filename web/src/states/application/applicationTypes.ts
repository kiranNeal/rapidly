export const actionTypes = {
  resetState: 'RESET_METHOD',
  setMethod: 'SET_METHOD'
};

interface MethodTypes {
  [key: string]: string;
}

export const methodTypes: MethodTypes = {
  get: 'GET',
  post: 'POST',
  delete: 'DELETE',
  put: 'PUT',
  patch: 'PATCH'
};

export interface ApplicationState {
  url: string;
  method: typeof methodTypes.get;
}

export interface Action {
  type: string;
}

export interface ResetStateAction extends Action {
  type: typeof actionTypes.resetState;
}

export interface SetMethodAction extends Action {
  type: typeof actionTypes.setMethod;
  payload: string;
}
