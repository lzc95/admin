let nav = [
  {
    id: 'article',
    title: '文章管理',
    icon:'file',
    path: '/article'
  },
  {
    id: 'category',
    title: '分类管理',
    icon:'appstore',
    path: '/category'
  },
  {
    id: 'tags',
    title: '标签管理',
    icon:'tags',
    path: '/tags'
  },
  {
    id: 'charts',
    title: '图表分析',
    icon:'pie-chart',
    path: '/charts'
  },
  {
    id: 'setting',
    title: '其他设置',
    icon:'setting',
    children: [
      {
        id: 'account',
        title: '账户管理',
        icon:'mail',
        path: '/account'
      }
    ]
  }
]

export{
  nav
}