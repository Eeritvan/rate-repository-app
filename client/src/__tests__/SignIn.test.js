import SignInForm from '../components/SignIn/SignInForm';
import { render, fireEvent, screen, waitFor } from '@testing-library/react-native';

describe('Sign In form', () => {
  it('Calls function provided by onSubmit prop after pressing the submit button', async () => {
    const onSubmit = jest.fn();

    render(<SignInForm onSubmit={onSubmit} />);
    
    fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');
    fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
    fireEvent.press(screen.getByText('Sign in'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));

    await waitFor(() => expect(onSubmit.mock.calls[0][0]).toEqual({
      username: 'kalle',
      password: 'password',
    }));
  });
});