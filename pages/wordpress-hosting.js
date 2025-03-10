import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Section3FromHomepage from '@/components/Homepage/Section5'
import Section7FromHomepage from '@/components/Homepage/Section7'
import Section1 from '@/components/WordpressHosting/Section1'
import Section2 from '@/components/WordpressHosting/Section2'
import Section3 from '@/components/WordpressHosting/Section3'
import Section4 from '@/components/WordpressHosting/Section4'
import Section5 from '@/components/WordpressHosting/Section5'
import Section6 from '@/components/WordpressHosting/Section6'
import { NextSeo } from 'next-seo'

export default function WordpressHosting() {
  return (
    <>
      <NextSeo
        title="WordPress Hosting | Sleeknode"
        description="This is the wordpress hosting page of my sleeknode website."
        canonical="https://liquidweb-clone.vercel.app/"
        openGraph={{
          url: 'https://liquidweb-clone.vercel.app/',
          title: 'WordPress Hosting | Sleeknode',
          description:
            'This is the wordpress hosting page of my sleeknode website.',
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
      <hr />
      <Section2 />
      <Section3FromHomepage />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7FromHomepage />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}
