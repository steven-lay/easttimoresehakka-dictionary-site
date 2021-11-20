import remarkGfm from 'remark-gfm'
import remarkSupersub from 'remark-supersub'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

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
            remarkPlugins: [
              remarkGfm,
              [remarkToc, { maxDepth: 2, tight: true, ordered: true }],
              remarkSupersub,
            ],
            rehypePlugins: [rehypeSlug],
          },
        },
      ],
    })

    return config
  },
}
