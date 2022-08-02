const  routes = [
  {
    path: '/',
    name: '首页',
    // component: () => import(''),
    meta: {
      title: '',
      icon: '',
    }
  },{
    path: '/student',
    name: '学生',
    // component: () => import(''),
    meta: {
      title: '',
      icon: '',
    },
    children:[
      {
        path: '/a',
        name: '学生',
        // component: () => import(''),
        meta: {
          title: '',
          icon: '',
        },
      }
    ]
  },{
    path: '/teacher',
    name: '老师',
    // component: () => import(''),
    meta: {
      title: '',
      icon: '',
    }
  },
]
export default routes;
