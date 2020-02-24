import React, { useReducer } from 'react';
import {
  render,
  cleanup,
  fireEvent,
  screen,
  getByLabelText
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import RequestMethod from './index';
import { AppContext } from '../../App';
import reducer, {
  initialState
} from '../../states/application/applicationReducer';
import * as applicationActions from '../../states/application/applicationActions';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FunctionComponent<WrapperProps> = (
  props: WrapperProps
) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

describe('Request Method component tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Request method renders correctly with no initial Method prop passes', () => {
    const { asFragment } = render(
      <Wrapper>
        <RequestMethod />
      </Wrapper>
    );
    const container = document.body;
    expect(
      getByLabelText(container, 'Select Request Method')
    ).toHaveTextContent('GET');
    expect(asFragment()).toMatchSnapshot();
  });

  it('Request method renders correctly with initial Method and changes on select', async () => {
    render(
      <Wrapper>
        <RequestMethod initialMethod="post" />
      </Wrapper>
    );
    const container = document.body;
    expect(
      getByLabelText(container, 'Select Request Method')
    ).toHaveTextContent('POST');

    fireEvent.click(screen.getByText('POST'));
    const deleteOption = await screen.getByText('DELETE');
    fireEvent.click(deleteOption);

    expect(
      getByLabelText(container, 'Select Request Method')
    ).toHaveTextContent('DELETE');
  });
});
