import CommonStyle from '../../styles/commomStyle.module.css'
import Accordion from '../VpsHosting/components/accordion'

export default function Section5() {
  const faqData = [
    {
      title:
        'What’s the difference between web hosting and domain name hosting?',
      content: `
       People often confuse the definition of web hosting with domain name hosting. Although the two are related, and many companies offer both services, they’re quite different.

* Web hosts provide a place for your website to live
* Domain hosts provide a way for users to easily find your website

To go a bit deeper, domain hosts manage names of addresses. Your site’s actual address is a series of numbers known as Internet Protocol (IP). The internet would be a lot more cumbersome to navigate if we used IPs. Domain names are much easier to remember. Most of us don’t even remember phone numbers anymore.

Web hosts are where you keep your site. Web domain hosts are who you turn to when registering a domain.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'How do I choose the right web hosting product for my needs?',
      content: `
       When choosing a Liquid Web hosting product, consider factors like your website’s traffic and performance requirements, budget, technical expertise, and scalability. Assess the features, resources, and support offered to find the best fit for your website or application. If you’re not sure which hosting product is right for you, start a chat with a hosting advisor now.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'Can I upgrade or downgrade my hosting plan?',
      content: `
       Yes, Liquid Web offers the flexibility to upgrade or downgrade hosting plans based on your changing needs. Whether you need more resources to accommodate growth or wish to scale down to a more cost-effective plan, our scalability options are only a click or call away.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What level of technical support is available?',
      content: `
       Liquid Web offers fast technical support by phone, ticket, and live chat, as well as an extensive knowledge base. We offer varying levels of management that include higher-level support if you choose.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'Does Liquid Web offer web hosting migrations?',
      content: `
       Web hosting migration involves transferring your website or digital assets from one hosting provider to another. Liquid Web offers hassle-free, fully managed migration services for most hosting products. Each migration is handled by dedicated specialists.
      `,
      buttonText: 'Chat with an expert',
    },
  ]

  return (
    <div className={`${CommonStyle.ContainerWidth} my-5 py-lg-5`}>
      <p className="fs-1">Hosting services FAQ</p>
      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          title={faq.title}
          content={faq.content}
          buttonText={faq.buttonText}
        />
      ))}
    </div>
  )
}
