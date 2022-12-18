import nextra from 'nextra'
import remarkSuperSub from 'remark-supersub';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  mdxOptions: {
    remarkPlugins: [
      remarkSuperSub
    ]
  },
  staticImage: true
})

export default withNextra()

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })