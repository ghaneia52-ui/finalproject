import { BASE_URL } from '../constants';
import { router } from '../utils/router';

export async function SignUpUser() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('log-message');

  if (!usernameInput || !passwordInput || !errorMessage) {
    console.error('Required DOM elements not found.');
    return;
  }

  const username = usernameInput.value;
  const password = passwordInput.value;

  try {
    const response = await fetch(`${BASE_URL}/auth/signup`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json();

    console.log(data);

    if (response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.user?.username ?? username);

      errorMessage.innerText = 'ثبت نام با موفقیت انجام شد';
      setTimeout(() => {
        router.navigate('/');
      }, 2000);

      return data;
    } else {
  
      const message = Array.isArray(data?.message)
        ? data.message[0]
        : data?.message ?? 'خطای ناشناخته در ثبت نام';
      errorMessage.innerText = message;
      return data;
    }
  } catch (error) {
    console.log(error);
    if (errorMessage) {
      errorMessage.innerText = 'خطا در ارتباط با سرور';
    }
  }
}