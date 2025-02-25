import CommonStyle from '../../styles/commomStyle.module.css'
import Accordion from './components/accordion'

export default function Section7() {
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
    {
      title: 'What support is available if I need help?',
      content: `
        Our 24/7 expert support is available via phone, chat, and email. We ensure your VPS runs smoothly by promptly addressing any issues.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'Is VPS hosting safe and secure?',
      content: `
        Yes. Each VPS instance is isolated, meaning your data and operations are protected from vulnerabilities in other instances. This dedicated resource allocation ensures better security than shared hosting.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'Is VPS hosting fast and reliable?',
      content: `
        Absolutely. With dedicated resources and improved isolation, VPS hosting delivers performance similar to dedicated servers—ensuring smooth and efficient operation.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What are the types of VPS hosting solutions?',
      content: `
        VPS hosting options include managed VPS, cloud VPS, reseller VPS, and preconfigured VPS. Managed VPS is ideal if you prefer technical details handled by experts; cloud VPS offers scalability; reseller VPS is for those providing hosting services; and preconfigured VPS offers ready-to-use setups.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What is Windows VPS?',
      content: `
        A Windows VPS offers the functionality of a dedicated Windows server at a lower cost. It provides an isolated environment to run Windows applications and manage tasks with added flexibility and scalability.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What type of VPS hosting does Liquid Web offer?',
      content: `
        We offer various VPS hosting options, including self-managed, managed, CPU-optimized, memory-optimized, and general compute-optimized solutions.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'When is VPS hosting not the right choice?',
      content: `
        VPS hosting may not be ideal for new companies on a tight budget, businesses with zero technical skills, or enterprises that need a full dedicated server. While VPS hosting provides flexibility and security, these cases may benefit from shared or dedicated hosting solutions.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'How to make VPS secure?',
      content: `
        VPS security depends on configuration, updates, and management. Use root access to implement custom security measures (firewalls, intrusion detection, etc.), perform regular updates, and schedule backups. We offer additional features to enhance security.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'How much does VPS hosting cost?',
      content: `
        VPS hosting costs vary depending on service level, performance, bandwidth, and features. Expect to pay more than shared hosting but less than a dedicated server.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'Which VPS is fastest?',
      content: `
        Our VPS hosting is known for its fast performance across the LAMP stack. Independent analyses show our speed exceeds that of many competitors. We achieve this with high-performance hardware, KVM virtualization, redundant infrastructure, and a 100% uptime guarantee.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What is managed VPS hosting?',
      content: `
        Managed VPS hosting offers the power of a VPS with the ease of having experts manage setup, updates, security, and backups. This gives you flexibility without the hassle of server management.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What are the pros and cons of managed VPS?',
      content: `
        Pros:
        - Saves time and effort
        - No IT expertise required
        - Automatic updates and patches
        - Professional server management
        Cons:
        - Higher cost than unmanaged
        - Less direct control over server configuration
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What are the pros and cons of a self-managed VPS?',
      content: `
        Pros:
        - Cost savings and full control
        - Customizable server setup
        Cons:
        - Requires technical expertise
        - Time-consuming maintenance
        - Manual updates and increased risk without proactive monitoring
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What are the pros and cons of a core managed VPS?',
      content: `
        Core managed VPS hosting offers essential support while giving you flexibility. Pros include enhanced security, proactive monitoring, reduced workload, and reliable support. Cons include less customization and higher cost compared to self-managed VPS.
      `,
      buttonText: 'Chat with an expert',
    },
  ]

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
