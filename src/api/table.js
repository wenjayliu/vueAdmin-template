import fetch from '@/utils/fetch';

export function getList(params) {
  return fetch({
    // url: '/table/list',
    url: '/login/tablelist',
    method: 'get',
    params
  });
}


