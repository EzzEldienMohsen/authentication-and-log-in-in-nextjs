import React from 'react';
import '@/app/globals.css';
import { logout } from '@/actions/authActions';

export const metadata = {
  title: 'Next Auth',
  description: 'Next.js Authentication',
};

const layout = ({ children }) => {
  return (
    <>
      <header id="auth-header">
        <p>Welcome back!</p>
        <form action={logout}>
          <button>Logout</button>
        </form>
      </header>
      {children}
    </>
  );
};

export default layout;
