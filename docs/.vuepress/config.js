module.exports = {
    title: '轱辘UI',
    description: '一个vue UI组件库',
    themeConfig: {
        sidebar: [
            {
                title: '快速入门',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                     '/install/','/getStarted/'
                ]
              },
              {
                title: '组件',   // 必要的
                collapsable: false,
                children: [
                  '/components/icon/',
                  '/components/button/',
                  '/components/nav/'
                ]
              }
        ]
    }
  }