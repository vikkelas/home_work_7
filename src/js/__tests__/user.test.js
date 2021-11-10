/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import Validate from '../Validator';

test.each([
  { user: 'assda122-_ew', expected: true },
  { user: '123assda122_eew', expected: false },
  { user: 'assda122_eew231', expected: false },
  { user: 'assda122435_eew', expected: false },
  { user: 'ывфчс122_ыфафывфв', expected: false },
])('checking the correct username', ({ user, expected }) => {
  const checkUser = new Validate(user).validUserName();
  expect(checkUser).toBe(expected);
});
