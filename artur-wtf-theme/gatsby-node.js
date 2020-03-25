const standardBasePath = `/`

exports.createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions

  const basePath = themeOptions.basePath || standardBasePath

  createPage({
    path: basePath,
    component: require.resolve(`./src/templates/artur-wtf.tsx`),
  })
  createPage({
    path: `/404/`,
    component: require.resolve(`./src/templates/404.index.tsx`),
  })
}

