import Cookies from 'js-cookie';

export const getToken = () => Cookies.get('auth_token');
export const setToken = (token) => Cookies.set('auth_token', token, { expires: 7 });
export const removeToken = () => Cookies.remove('auth_token');

export const isAuthenticated = () => Boolean(getToken());
