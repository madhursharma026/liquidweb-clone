import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Section1 from '@/components/VpsHosting/Section1'
import Section2 from '@/components/VpsHosting/Section2'
import Section3 from '@/components/VpsHosting/Section3'
import Section4 from '@/components/VpsHosting/Section4'
import Section5 from '@/components/VpsHosting/Section5'
import Section6 from '@/components/VpsHosting/Section6'
import Section7 from '@/components/VpsHosting/Section7'
import Section7New from '@/components/VpsHosting/Section7New'
import Section8 from '@/components/VpsHosting/Section8'

export default function Home() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <hr />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7New />
      {/* <Section3FromHomepage /> */}
      <Section7 />
      <Section8 />
      <Footer />
    </>
  )
}
