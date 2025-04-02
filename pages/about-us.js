import Section1 from '@/components/AboutUs/Section1'
import Section2 from '@/components/AboutUs/Section2'
import Section3 from '@/components/AboutUs/Section3'
import Section4 from '@/components/AboutUs/Section4'
import Section5 from '@/components/AboutUs/Section5'
import Section6 from '@/components/AboutUs/Section6'
import Section7 from '@/components/AboutUs/Section7'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { NextSeo } from 'next-seo'

export default function AboutUs() {
  return (
    <>
      <NextSeo
        title="About Us | Sleeknode"
        description="This is the about us of my sleeknode website."
        canonical="https://liquidweb-clone.vercel.app/"
        openGraph={{
          url: 'https://liquidweb-clone.vercel.app/',
          title: 'About Us | Sleeknode',
          description: 'This is the about us of my sleeknode website.',
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
      <div
        style={{
          background: '#FAF9F7',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <Section4 />
        <Section5 />
      </div>
      <Section6 />
      <Section7 />
      <Footer />
    </>
  )
}
