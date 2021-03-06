import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout';

/* login */
const Login       = _import('login/index');

/* dashboard */
const dashboard   = _import('dashboard/index');

/* error page */
const Err404      = _import('404');

/* demo page */
const Form        = _import('page/form');
const Table       = _import('table/index');
    // task
const Task        = _import('task/index');
const Task_undo   = _import('task/Task_undo');

Vue.use(Router);

 /**
  * icon : the icon show in the sidebar
  * hidden : if `hidden:true` will not show in the sidebar
  * redirect : if `redirect:noredirect` will not redirct in the levelbar
  * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
  * meta : `{ role: ['admin'] }`  will control the page role
  **/
export const constantRouterMap = [
  { path: '/login', component: Login, hidden: true },
  { path: '/404', component: Err404, hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Home',
    hidden: true,
    children: [{ path: 'dashboard', component: dashboard }]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});


// 侧边菜路由哦
export const asyncRouterMap = [
  {
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: 'Example',
    icon: 'zujian',
    children: [
      { path: 'index', component: Form, name: 'Form', icon: 'zonghe' }
    ]
  },

  {
    path: '/table',
    component: Layout,
    redirect: '/table/index',
    name: 'Table',
    icon: 'tubiaoleixingzhengchang',
    noDropdown: true,
    children: [
      { path: 'index', component: Table, name: 'Table', meta: { role: ['admin'] } }
    ]
  },
  {
    path: '/task',
    component: Layout,
    redirect: '/task/index',
    name: 'Task',
    icon: 'tubiaoleixingzhengchang',
    noDropdown: true,
    children: [
      { path: 'index', component: Task, name: 'Task', meta: { role: ['admin'] } },
      { path: 'Task_undo', component: Task_undo, name: 'Task_undo', meta: { role: ['admin'] } }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
];
