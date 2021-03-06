import remarkGfm from 'remark-gfm'
import remarkSupersub from 'remark-supersub'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeExternalLinks from 'rehype-external-links'

export default {
  reactStrictMode: true,
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  experimental: {
    styledComponents: true,
  },
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
            rehypePlugins: [
              rehypeSlug,
              [
                rehypeExternalLinks,
                { target: '_blank', rel: ['noopener noreferrer'] },
              ],
            ],
          },
        },
      ],
    })

    return config
  },
}
