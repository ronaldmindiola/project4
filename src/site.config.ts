// site.config.ts
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://ronaldmindiola.com'
})

export const metadata = {
  title: 'Soluciones Eléctricas Ya!',
  description: 'Ofrecemos soluciones eléctricas rápidas y efectivas para tus necesidades.',
  ogImage: '/path/to/og-image.jpg', // Cambia esto a la ruta de tu imagen
  charset: 'utf-8',
  lang: 'en',
  defaultLanguage: 'en-us',
  locale: 'en_US',
  type: 'landingPage',
  url: 'https://astro-logos.netlify.app'
}

export const navData = {
  brand: {
    text: 'Diome',
    class: 'mr-2'
  },
  links: [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Blog', href: '/blog' },
    { text: 'Services', href: '/services' },
    { text: 'Contact', href: '/contact' }
  ]
}

export const headerData = {
  title: 'Soluciones Eléctricas',
  subtitle: 'Innovación eléctrica al alcance de tu mano. Más de 20 años encendiendo tus ideas.',
  primaryBtn: 'Descubre Nuestras Soluciones',
  primaryBtnURL: '/productos',
  secondaryBtn: 'Contactar Equipo de Ventas',
  secondaryBtnURL: '/contact',
  src: 'heroImage',
  alt: 'Imagen de productos eléctricos de Soluciones Eléctricas YA SAS'

}
