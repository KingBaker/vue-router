function formatRouterTree (data) {
  const parents = data.filter(p => p.pid === 0)
  const children = data.filter(c => c.pid !== 0)

  dataTree(parents, children)

  function dataTree (parents, children) {
    parents.forEach((p) => {
      children.forEach((c, i) => {
        if (c.pid === p.id) {
          const _c = JSON.parse(JSON.stringify(children))
          _c.splice(i, 1)
          dataTree([c], _c)

          if (p.children) {
            p.children.push(c)
          } else {
            p.children = [c]
          }
        }
      })
    })
  }

  return parents
}

function generateRouter (userRouters) {
  return userRouters.map(r => {
    const routers = {
      path: r.path,
      name: r.name,
      component: () => import(`@/views/${r.name}`)
    }
    if (r.children) {
      routers.children = generateRouter(r.children)
    }
    return routers
  })
}
export {
  formatRouterTree,
  generateRouter
}
