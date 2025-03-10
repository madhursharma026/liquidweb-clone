import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Section1 from '@/components/Homepage/Section1'
import Section2 from '@/components/Homepage/Section2'
import Section4 from '@/components/Homepage/Section4'
import Section5 from '@/components/Homepage/Section5'
import Section6 from '@/components/Homepage/Section6'
import Section7 from '@/components/Homepage/Section7'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Homepage | Sleeknode"
        description="This is the homepage of my sleeknode website."
        canonical="https://liquidweb-clone.vercel.app/"
        openGraph={{
          url: 'https://liquidweb-clone.vercel.app/',
          title: 'Homepage | Sleeknode',
          description: 'This is the homepage of my sleeknode website.',
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
      <br />
      <hr />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}
