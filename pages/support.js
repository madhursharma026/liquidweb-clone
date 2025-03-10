import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Section1 from '@/components/Support/Section1'
import Section2 from '@/components/Support/Section2'
import Section3 from '@/components/Support/Section3'
import Section4 from '@/components/Support/Section4'
import Section5 from '@/components/Support/Section5'
import Section6 from '@/components/Support/Section6'
import Section7 from '@/components/Support/Section7'
import { NextSeo } from 'next-seo'

export default function Support() {
  return (
    <>
      <NextSeo
        title="Support | Sleeknode"
        description="This is the support page of my sleeknode website."
        canonical="https://liquidweb-clone.vercel.app/"
        openGraph={{
          url: 'https://liquidweb-clone.vercel.app/',
          title: 'Support | Sleeknode',
          description: 'This is the support page of my sleeknode website.',
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
      <Section6 />
      <Section7 />
      <Footer />
    </>
  )
}
