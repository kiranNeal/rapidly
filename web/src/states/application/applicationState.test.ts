import reducer, { initialState } from './applicationReducer';
import * as applicationActions from './applicationActions';
import { methodTypes } from './applicationTypes';

describe('applicationState unit tests', () => {
  it('change method unit test', () => {
    expect(
      reducer(initialState, applicationActions.setMethod(methodTypes.post))
    ).toEqual({ ...initialState, method: 'POST' });
  });
  it('reset state unit test', () => {
    expect(
      reducer(
        { ...initialState, url: 'bad url' },
        applicationActions.resetState()
      )
    ).toEqual({ ...initialState });
  });
});
