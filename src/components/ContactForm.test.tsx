import userEvent from '@testing-library/user-event';
import messageApi, { Message } from '../apis/messageApi';
import render from '../mocks/render';
import ContactForm from './ContactForm';
import { act, waitFor } from '@testing-library/react';

jest.mock('../apis/messageApi');

describe('ContactForm Tests', () => {
  test('renders form properly', async () => {
    const { findByRole } = render(<ContactForm />);
    const emailField = await findByRole('textbox', {
      name: /email/i,
    });
    const subjectField = await findByRole('textbox', {
      name: /subject/i,
    });

    expect(emailField).toBeInTheDocument();
    expect(subjectField).toBeInTheDocument();
  });

  test('submits a new message', async () => {
    const datetime = new Date(),
      id = 0;

    const postMessageMock = jest
      .spyOn(messageApi, 'postMessage')
      .mockResolvedValue({
        id,
        datetime,
        senderEmail: 'test@test.com',
        subject: 'Test Subject',
        body: 'Test Body',
      } as Message);

    const { findByRole, findByPlaceholderText } = render(<ContactForm />);

    const emailField = await findByRole('textbox', {
      name: /email/i,
    });
    const subjectField = await findByRole('textbox', {
      name: /subject/i,
    });
    const messageField = await findByPlaceholderText(
      /Let us know how we can help you./i
    );
    const submitButton = await findByRole('button', {
      name: /submit/i,
    });
    await act(async () => await userEvent.type(emailField, 'test@test.com'));
    await act(async () => await userEvent.type(subjectField, 'Test Subject'));
    await act(async () => await userEvent.type(messageField, 'Test Body'));

    await act(async () => await userEvent.click(submitButton));

    await waitFor(() => {
      expect(postMessageMock).toHaveBeenCalled();
      const calledWith = postMessageMock.mock.calls[0][0];
      expect(calledWith.id).toEqual(id);
      expect(calledWith.senderEmail).toEqual('test@test.com');
      expect(calledWith.subject).toEqual('Test Subject');
      expect(calledWith.body).toEqual('Test Body');
      expect(calledWith.datetime.toLocaleDateString()).toEqual(
        datetime.toLocaleDateString()
      );
    });

    await waitFor(() => {
      expect(emailField).toHaveValue('');
      expect(subjectField).toHaveValue('');
      expect(messageField).toHaveValue('');
    });
  });

  test('handles error during message submission', async () => {
    jest.spyOn(messageApi, 'postMessage').mockRejectedValue(new Error('Error'));

    const { findByRole, findByPlaceholderText } = render(<ContactForm />);

    const emailField = await findByRole('textbox', {
      name: /email/i,
    });
    const subjectField = await findByRole('textbox', {
      name: /subject/i,
    });
    const messageField = await findByPlaceholderText(
      /Let us know how we can help you./i
    );
    const submitButton = await findByRole('button', {
      name: /submit/i,
    });
    await act(async () => await userEvent.type(emailField, 'test@test.com'));
    await act(async () => await userEvent.type(subjectField, 'Test Subject'));
    await act(async () => await userEvent.type(messageField, 'Test Body'));

    await act(async () => await userEvent.click(submitButton));

    waitFor(async () => expect(await findByRole('alert')).toBeInTheDocument());
  });
});
