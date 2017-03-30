export default [
  {
    name: 'Schedule',
    link: '/',
    icon: 'fa-calendar',
  },
  {
    name: 'Course',
    link: '/',
    icon: 'fa-book',
  },
  {
    name: 'Lecturer',
    link: '/',
    icon: 'fa-users',
  },
  {
    name: 'Student',
    link: '/',
    icon: 'fa-graduation-cap',
  },
  {
    name: 'Users',
    link: '/users',
    icon: 'fa-user',
    child: [
    {
      name: 'New',
      link: '/user/new',
      icon: 'fa-circle-o',
    },
    {
      name: 'Lists',
      link: '/user/list',
      icon: 'fa-circle-o'
    }
    ]
  },
]