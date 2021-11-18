import remarkGfm from 'remark-gfm'
import supersub from 'remark-supersub'

export default {
  reactStrictMode: true,
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            remarkPlugins: [remarkGfm, supersub],
          },
        },
      ],
    })

    return config
  },
}
