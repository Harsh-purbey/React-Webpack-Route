import React from 'react';
import { useNavigate } from 'react-router-dom';
const OtherComponent = () => {
  const navigate = useNavigate();
  return <div onClick={() => navigate('/')}>OTHER ROUTE from Components</div>;
};

export default OtherComponent;
