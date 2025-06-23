import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

const ByPass = ({ Component }) => {
  const navigate = useNavigate();
  const authToken = secureLocalStorage.getItem('TnTrdx');

  useEffect(() => {
    console.log("bypass for other");
    if (!authToken) {
      // If token exists, go to home
      secureLocalStorage.clear();
      navigate('/login');
    }
  }, [authToken, navigate]);

  return <Component />;
};

export default ByPass;
