import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Section1 from '@/components/TermsOfService/Section1'
import Section2 from '@/components/TermsOfService/Section2'
import { NextSeo } from 'next-seo'

export default function TermsOfService() {
  return (
    <>
      <NextSeo
        title="Terms Of Service | Sleeknode"
        description="This is the terms of service of my sleeknode website."
        canonical="https://liquidweb-clone.vercel.app/"
        openGraph={{
          url: 'https://liquidweb-clone.vercel.app/',
          title: 'Terms Of Service | Sleeknode',
          description: 'This is the terms of service of my sleeknode website.',
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
      <Footer />
    </>
  )
}
