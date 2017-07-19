import fetch from '@/utils/fetch';

export function login(email, password) {
  return fetch({
    // url: '/user/login',
    url: '/login/tokenlogin',
    method: 'post',
    data: {
      email,
      password
    }
  });
}

export function getInfo(token) {
  return fetch({
    // url: '/user/info',
    url: '/login/info',
    method: 'get',
    params: { token }
  });
}

export function logout() {
  return fetch({
    // url: '/user/logout',
    url: '/login/logout',
    method: 'post'
  });
}



