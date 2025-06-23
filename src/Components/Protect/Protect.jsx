import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

const Protect = ({ Component }) => {
  const navigate = useNavigate();
  const authToken = secureLocalStorage.getItem('TnTrdx');

  useEffect(() => {
    console.log("protect for auths");
    if (authToken) {
      navigate('/');
    }
  }, [authToken, navigate]);

  return <Component />;
};

export default Protect;
