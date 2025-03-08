import CommonStyle from '../../styles/commomStyle.module.css'
import Accordion from './components/accordion'

export default function Section6() {
  const faqData = [
    {
      title: 'What is a VPS? Flexibility, power, and control',
      content: `
        With web hosting (shared hosting), your website shares the resources of a single server with other clients. This means you use only a part of the server’s resources (e.g. RAM, CPU, etc.).

        WordPress hosting is shared hosting with additional WordPress-specific features and services. Managed WordPress hosting handles all technical details such as updates, security, and speed optimizations.

        Cloud hosting uses multiple servers that pool resources (CPU, RAM, etc.), allowing virtual allocation among many websites. The key difference is that shared hosting uses one server while cloud hosting leverages a pool of servers for dedicated resource allocation.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'How does VPS hosting work?',
      content: `
        VPS hosting splits a physical server into several independent virtual servers using a hypervisor. Each VPS acts like its own server—allowing you to install your own operating system and software.
        
        This isolation gives you dedicated resources and improved performance and security. Our VPS hosting comes with flexible options—whether you want more control or prefer managed services.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What is VPS hosting?',
      content: `
        VPS hosting uses virtualization (via a hypervisor) to partition a physical server into multiple isolated virtual servers. Each VPS operates independently, offering a private, secure environment with dedicated resources.
        
        Our VPS solutions provide the flexibility and performance of dedicated servers, combined with the convenience of virtualization.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What can I use VPS hosting for?',
      content: `
        VPS hosting is versatile and ideal for hosting websites, running applications, managing databases, and handling high-traffic loads. It’s popular with ecommerce, startups, media, and financial services for its security, performance, and flexibility.
      `,
      buttonText: 'Chat with an expert',
    },
  ]

  return (
    <div className="py-5" style={{ background: '#EDEBE7' }}>
      <div className={`${CommonStyle.ContainerWidth} py-lg-5`}>
        <p className="fs-2">Web hosting migration FAQ</p>
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            title={faq.title}
            content={faq.content}
            buttonText={faq.buttonText}
          />
        ))}
      </div>
    </div>
  )
}
