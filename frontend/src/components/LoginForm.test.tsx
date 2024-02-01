import React from 'react';
import LoginForm from './LoginForm';
import render from '../mocks/render';
import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';

const mockApiCall = jest.fn();
jest.mock('../apis/userApi', () => ({
  postLogin: () => mockApiCall().mockResolvedValue({ data: {} }),
}));

describe('LoginForm', () => {
  test('renders login form', () => {
    const { getByRole } = render(<LoginForm />);
    const emailField = getByRole('textbox', {
      name: /email/i,
    });
    const passwordField = getByRole('password', {
      name: /password/i,
    });
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  test.only('calls login function when user submits login form', async () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    const { findByRole } = render(<LoginForm />);
    const emailField = await findByRole('textbox', {
      name: /email/i,
    });
    const passwordField = await findByRole('password', {
      name: /password/i,
    });
    const submitButton = await findByRole('button', {
      name: /submit/i,
    });
    await act(async () => await userEvent.type(emailField, 'test@test.com'));
    await act(async () => await userEvent.type(passwordField, 'testPassword'));
    await act(async () => await userEvent.click(submitButton));
    expect(mockApiCall).toBeCalled();
  });
});
