import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Section1 from '@/components/sharedHosting/Section1'
import Section10 from '@/components/sharedHosting/Section10'
import Section11 from '@/components/sharedHosting/Section11'
import Section2 from '@/components/sharedHosting/Section2'
import Section3 from '@/components/sharedHosting/Section3'
import Section4 from '@/components/sharedHosting/Section4'
import Section5 from '@/components/sharedHosting/Section5'
import Section6 from '@/components/sharedHosting/Section6'
import Section7 from '@/components/sharedHosting/Section7'
import Section8 from '@/components/sharedHosting/Section8'
import Section9 from '@/components/sharedHosting/Section9'
import { NextSeo } from 'next-seo'

export default function WebHosting() {
  return (
    <>
      <NextSeo
        title="Web Hosting | Sleeknode"
        description="This is the web hosting page of my sleeknode website."
        canonical="https://liquidweb-clone.vercel.app/"
        openGraph={{
          url: 'https://liquidweb-clone.vercel.app/',
          title: 'Web Hosting | Sleeknode',
          description: 'This is the web hosting page of my sleeknode website.',
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
      <Section8 />
      <hr />
      <Section9 />
      <Section10 />
      <Section11 />
      <Footer />
    </>
  )
}
