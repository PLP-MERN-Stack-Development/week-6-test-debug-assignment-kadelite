import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import LoginForm from '../../components/LoginForm';

const server = setupServer(
  rest.post('/api/auth/login', (req, res, ctx) => {
    const { email, password } = req.body;
    if (email === 'test@example.com' && password === 'password123') {
      return res(ctx.json({ token: 'mock-jwt-token' }));
    }
    return res(ctx.status(401), ctx.json({ error: 'Invalid credentials' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('LoginForm', () => {
  it('shows validation errors for empty fields', async () => {
    render(<LoginForm />);
    fireEvent.click(screen.getByText(/login/i));
    expect(await screen.findByRole('alert')).toHaveTextContent(/email is required/i);
    expect(screen.getByRole('alert', { name: '' })).toHaveTextContent(/password is required/i);
  });

  it('shows validation error for invalid email', async () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'invalid' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText(/login/i));
    expect(await screen.findByRole('alert')).toHaveTextContent(/invalid email/i);
  });

  it('shows success message on valid login', async () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText(/login/i));
    await waitFor(() => expect(screen.getByText(/login successful/i)).toBeInTheDocument());
    expect(screen.getByText(/mock-jwt-token/)).toBeInTheDocument();
  });

  it('shows error message on invalid login', async () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'wrong@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'wrongpass' } });
    fireEvent.click(screen.getByText(/login/i));
    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
    expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
  });
}); 