import remarkGfm from 'remark-gfm'
import remarkSupersub from 'remark-supersub'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeExternalLinks from 'rehype-external-links'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { esmExternals: true },
  pageExtensions: ['md', 'mdx', 'jsx', 'js'],
  webpack: function (config) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: '@mdx-js/loader',
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
            ]
          }
        }
      ]
    })
    return config
  }
}

export default nextConfig