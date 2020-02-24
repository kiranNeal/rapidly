import React from 'react';

import './requestOptions.scss';
import RequestMethod from '../RequestMethod';

const RequestOptions: React.FC = () => {
  return (
    <div className="request_options__container">
      <RequestMethod />
    </div>
  );
};

export default RequestOptions;
