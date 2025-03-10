import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Section1 from '@/components/Hosting/Section1'
import Section2 from '@/components/Hosting/Section2'
import Section3 from '@/components/Hosting/Section3'
import Section4 from '@/components/Hosting/Section4'
import Section5 from '@/components/Hosting/Section5'
import { NextSeo } from 'next-seo'

export default function Hosting() {
  return (
    <>
      <NextSeo
        title="Hosting | Sleeknode"
        description="This is the hosting page of my sleeknode website."
        canonical="https://liquidweb-clone.vercel.app/"
        openGraph={{
          url: 'https://liquidweb-clone.vercel.app/',
          title: 'Hosting | Sleeknode',
          description: 'This is the hosting page of my sleeknode website.',
          images: [
            {
              url: 'https://liquidweb-clone.vercel.app/MainLogo.png',
              width: 1200,
              height: 630,
              alt: 'Sleeknode Logo',
            },
          ],
          site_name: 'Sleeknode',
        }}
      />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  )
}
