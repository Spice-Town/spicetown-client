import React, { useEffect, useState }  from 'react';
import { Button } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { setActive } from '../../store/reducers/activeSlice';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [serverRunning, setServerRunning] = useState(false);

  const handleNavClick = (value) => {
    dispatch(setActive(value));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/' + value);
  };

  console.log(serverRunning);

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        // Send a request to the health check endpoint on your server
        let response = await fetch(`${import.meta.env.VITE_SERVER}/health`);
        let data = await response.json();

        if (data.status === 'ok') {
          setServerRunning(true);
        } else {
          // If the server is not running, start it up
          await fetch(`${import.meta.env.VITE_SERVER}/start-server`);
          setServerRunning(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkServerStatus();
  }, []);

  return (
    <div className='splash'>
      <div className='splash__image'>
          <Button
            className='splash__button'
            color='orange'
            size='xl'
            uppercase
            onClick={() => handleNavClick('repairs')}
          >
            Get Fixed Up Now!
          </Button>
      </div>
    </div>
  );
}
