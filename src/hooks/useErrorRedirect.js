import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const useErrorRedirect = (error) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 1500); // Adjust timing if needed

      return () => clearTimeout(timer); // cleanup on unmount
    }
  }, [error, navigate]);
};

export default useErrorRedirect;
