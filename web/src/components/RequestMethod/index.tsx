import React, { useContext, useEffect } from 'react';
import { Dropdown } from 'carbon-components-react';

import './requestMethod.scss';
import { AppContext } from '../../App';
import { methodTypes } from '../../states/application/applicationTypes';
import * as applicationActions from '../../states/application/applicationActions';

const getMethodOption = (): Array<string> => {
  return Object.keys(methodTypes);
};

interface RequestMethodProps {
  initialMethod?: string;
}

const RequestMethod: React.FC<RequestMethodProps> = (
  props: RequestMethodProps
) => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    if (props.initialMethod) {
      dispatch(applicationActions.setMethod(props.initialMethod));
    }
  }, [dispatch, props.initialMethod]);
  return (
    <Dropdown
      id="request_method__dropdown"
      data-testid="request_method__dropdown"
      ariaLabel="Select Request Method"
      items={getMethodOption()}
      itemToString={(item: string): string => (item ? methodTypes[item] : '')}
      label=""
      titleText=""
      selectedItem={state.method}
      onChange={({ selectedItem }): void => {
        if (selectedItem) {
          dispatch(applicationActions.setMethod(selectedItem));
        }
      }}
    />
  );
};

export default RequestMethod;
