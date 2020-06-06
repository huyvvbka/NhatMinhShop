const splashRoot = {
  root: {
    stack: {
      children: [{
        component: {
          name: 'Splash'
        }
      }]
    }
  }
}

const loginRoot = {
  root: {
    stack: {
      children: [{
        component: {
          name: 'Login'
        }
      }]
    }
  }
}

const mainRoot = {
  root: {
    bottomTabs: {
      children: [{
          stack: {
            children: [{
              component: {
                name: 'Home'
              }
            }]
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: 'Category'
              }
            }]
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: 'Setting'
              },
            }]
          }
        }
      ]
    }
  }
}

export {loginRoot, mainRoot, splashRoot};