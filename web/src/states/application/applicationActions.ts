import {
  actionTypes,
  SetMethodAction,
  ResetStateAction
} from './applicationTypes';

export function setMethod(method: string): SetMethodAction {
  return {
    type: actionTypes.setMethod,
    payload: method
  };
}

export function resetState(): ResetStateAction {
  return {
    type: actionTypes.resetState
  };
}
