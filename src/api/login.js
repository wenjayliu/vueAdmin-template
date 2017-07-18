import fetch from '@/utils/fetch';

export function login(email, password) {
  return fetch({
    url: '/user/login',
    // url: '/login/checklogin',
    method: 'post',
    data: {
      email,
      password
    }
  });
}

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    // url: '/login/checkif',
    method: 'get',
    params: { token }
  });
}

export function logout() {
  return fetch({
    url: '/user/logout',
    method: 'post'
  });
}



