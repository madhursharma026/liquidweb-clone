import CommonStyle from '../../styles/commomStyle.module.css'
import Accordion from './components/accordion' // Ensure the filename matches

export default function Section7() {
  const faqData = Array(20).fill({
    title: 'What is a VPS? Flexibility, power, and control',
    content: `
      A virtual private server (VPS) is an isolated environment created within a physical server.
      Unlike shared hosting, VPS hosting provides your business with dedicated resources—without
      the complexity of managing physical hardware. Each VPS operates independently, offering
      the security, flexibility, and control of a fraction of the cost of a physical server.

      With VPS hosting, you'll enjoy enhanced security and performance, as well as the flexibility
      to scale resources like CPU, RAM, and storage as your business grows. You get the freedom
      to run your own operating system, install the software you need, and have full control over
      your environment—making it ideal for businesses that require more power and customizability.

      At Liquid Web, we go beyond just offering VPS hosting. Whether you need a fully managed
      solution or prefer more control, our experts will guide you through the setup process,
      ensuring that your hosting is optimized for your business needs. With a blend of the
      backend physical server management, ensuring uptime, speed, and security, so you can focus
      on what matters most: growing your business.

      Ready to get started? Liquid Web's tailored VPS solutions deliver the perfect balance
      of power and simplicity, all backed by our 24/7/365 support. Let us set up your VPS today.
    `,
    buttonText: 'Chat with an expert',
  })

  return (
    <div className={`${CommonStyle.ContainerWidth} my-5 py-lg-5`}>
      <p className="fs-2">Virtual Private Server (VPS) Hosting FAQ</p>
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
