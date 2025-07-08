import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import PostsList from '../../components/PostsList';

const mockPosts = [
  { _id: '1', title: 'First Post' },
  { _id: '2', title: 'Second Post' },
];

const server = setupServer(
  rest.get('/api/posts', (req, res, ctx) => {
    return res(ctx.json(mockPosts));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('PostsList', () => {
  it('renders posts from API', async () => {
    render(<PostsList />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText('First Post')).toBeInTheDocument());
    expect(screen.getByText('Second Post')).toBeInTheDocument();
  });

  it('shows error on API failure', async () => {
    server.use(
      rest.get('/api/posts', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<PostsList />);
    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
  });

  it('shows no posts message if API returns empty array', async () => {
    server.use(
      rest.get('/api/posts', (req, res, ctx) => {
        return res(ctx.json([]));
      })
    );
    render(<PostsList />);
    await waitFor(() => expect(screen.getByText(/no posts found/i)).toBeInTheDocument());
  });
}); 