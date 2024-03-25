'use client';

import { useEffect } from 'react';
import { signOut } from "next-auth/react";
import { SafeUser } from '../types';
import toast from 'react-hot-toast';


const InactivityTimer = ({ timeout = 600000, currentUser  }: 
  { timeout?: number, currentUser?: SafeUser | null}) => {

  useEffect(() => {
    const handleActivity = () => {
        if (currentUser) {
            toast.error('Session timed out due to inactivity');
            setTimeout(() => {
                signOut();
            }, 3000); 
        }
        
    };

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(handleActivity, timeout);
    };

    let timer = setTimeout(handleActivity, timeout);

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
    };
  }, [currentUser, timeout]);

  return null;
};

export default InactivityTimer;
