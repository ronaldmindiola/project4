import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import siteConfig from '@/site.config.ts'

// https://astro.build/config
export default defineConfig({
  site: siteConfig,
  prefetch: true,
  integrations: [
    tailwind({
      configFile: './tailwind.config.mjs'
    }),
    react(),
    mdx()
  ],
  output: 'static'
})
