import fetch from '@/utils/fetch';

export function taskList(params) {
  return fetch({
    url: '/task/Task',
    method: 'get',
    params
  });
}


