import {
  Action,
  actionTypes,
  ApplicationState,
  ResetStateAction,
  SetMethodAction
} from './applicationTypes';

export const initialState = {
  url: '',
  method: 'get'
};

// The Type Guard Functions
function isResetStateAction(action: Action): action is ResetStateAction {
  return action.type === actionTypes.resetState;
}
function isSetMethodAction(action: Action): action is SetMethodAction {
  return action.type === actionTypes.setMethod;
}

export default function reducer(
  state: ApplicationState = initialState,
  action: Action
): ApplicationState {
  if (isSetMethodAction(action)) {
    return {
      ...state,
      method: action.payload
    };
  }
  if (isResetStateAction(action)) {
    return { ...initialState };
  }

  return state;
}
