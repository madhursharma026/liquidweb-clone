import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section3FromHomepage from "@/components/Homepage/Section5";
import Section7FromVpsHosting from "@/components/VpsHosting/Section7";
import Section7FromHomepage from "@/components/Homepage/Section7";
import Section1 from "@/components/WordpressHosting/Section1";
import Section2 from "@/components/WordpressHosting/Section2";
import Section3 from "@/components/WordpressHosting/Section3";
import Section4 from "@/components/WordpressHosting/Section4";
import Section5 from "@/components/WordpressHosting/Section5";

export default function wordpresshosting() {
    return (
        <>
            <Header />
            <Section1 />
            <hr />
            <Section2 />
            <Section3FromHomepage />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section7FromVpsHosting />
            <Section7FromHomepage />
            <br /><br /><br /><br /><br />
            <Footer />
        </>
    );
}
