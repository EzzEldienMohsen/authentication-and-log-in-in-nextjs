'use client';
import { auth } from '@/actions/authActions';
import Link from 'next/link';
import { useFormState } from 'react-dom';

export default function AuthForm({ mode }) {
  const [state, formAction] = useFormState(auth.bind(null, mode), {});
  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {state?.errors && (
        <ul id="form-errors">
          {Object.keys(state.errors).map((error) => {
            return <li key={error}>{state.errors[error]}</li>;
          })}
        </ul>
      )}
      <p>
        <button type="submit">
          {mode === 'login' ? 'Log in' : 'Create Account'}
        </button>
      </p>
      <p>
        {mode === 'login' && (
          <Link href="/?mode=signup">Create an account.</Link>
        )}
        {mode === 'signup' && (
          <Link href="/?mode=login">Login with existing account.</Link>
        )}
      </p>
    </form>
  );
}
