import CommonStyle from '../../styles/commomStyle.module.css'
import Accordion from './components/accordion' // Ensure the filename matches

export default function Section7() {
  const faqData = [
    {
      title: 'What is a VPS? Flexibility, power, and control',
      content: `
        With web hosting, also known as shared hosting, your website shares the resources of a single server with other clients’ websites. This means that you use only a part of this server’s resources, e.g. RAM, CPU, and others.

        WordPress hosting is shared hosting that includes additional WordPress-specific features and services for an extra layer of convenience for WordPress website owners. With Managed WordPress hosting, the web hosting provider handles all the technical details of managing a website, such as software updates, security and speed optimizations, and others.

        Cloud hosting, on the other hand, is a group of servers which share their CPU, RAM, and space to make a bigger pool of resources. Then, these resources are virtually shared among multiple websites and clients. The main difference between cloud hosting and shared hosting is the number of servers and the way resources are allocated. With shared hosting, you get one server to share with all the rest of the sites hosted on it. With cloud hosting, you get hosted on a pool of servers, and your site receives a dedicated amount of the virtually partitioned shared resources.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'How does VPS hosting work?',
      content: `
        VPS hosting splits a physical server into several separate virtual servers using special software called a hypervisor. Each virtual server, or VPS, acts like its own independent server.

This means you can install your own operating system, software, and applications on your VPS. Each VPS is isolated from the others, so you have your own dedicated resources like CPU, RAM, and storage, which means better performance and security.

At Liquid Web, we offer VPS hosting with flexible options to fit your needs, whether you want more control or prefer managed services. Our VPS hosting provides fast, secure, and scalable solutions to support your business. Ready to get started? We can help you set up today.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What is VPS hosting?',
      content: `
        VPS hosting uses software called a hypervisor to split a physical server, often a bare metal server, into multiple virtual servers. Each virtual server, or VPS, operates independently with its own operating system and resources. This creates several hosting benefits, including a private, secure space on the server with dedicated resources just for you.

At Liquid Web, our VPS hosting solutions offer the flexibility of dedicated resources and the convenience of a virtual setup. Whether you need control or managed services, we’re here to support your business with fast, secure, and scalable hosting. Ready to get started? Let us help you today.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What can I use VPS hosting for?',
      content: `
        VPS hosting is versatile and ideal for various needs. Common VPS use cases include hosting websites, running applications, managing databases, and handling high-traffic loads. Industries such as ecommerce, technology startups, media and entertainment, and financial services often rely on VPS hosting for its security, performance, and flexibility.

Ready to elevate your hosting experience? At Liquid Web, we offer tailored VPS solutions designed to support your business’s growth. Let’s get started today.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What support is available if I need help?',
      content: `
        If you need assistance, we’ve got you covered. Liquid Web offers 24/7 expert support through phone, chat, and email. Our team is here to help with any questions or issues you might have, ensuring your VPS hosting runs smoothly.

Ready to experience top-notch support? Reach out to us anytime, and let’s get you the help you need.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'Is VPS hosting safe and secure?',
      content: `
        Yes, VPS hosting is very secure. Each VPS instance is isolated from others, which means your environment is protected from vulnerabilities in other instances. 

Unlike shared hosting, where resources and potential risks are shared, VPS hosting ensures that your data and operations remain secure within your private virtual space.

At Liquid Web, we prioritize your security with robust measures and expert support. Ready to safeguard your online presence? Let’s get started today.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'Is VPS hosting fast and reliable?',
      content: `
        Yes, VPS hosting is both fast and reliable. Unlike shared hosting, where resources are shared among many users, VPS hosting gives you dedicated bandwidth and resources. This means you get performance that’s comparable to a dedicated server, ensuring that your applications and websites run smoothly and efficiently.

Want to experience the speed and reliability of VPS hosting? Check out our dedicated servers and see how we can meet your needs.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What are the types of VPS hosting solutions?',
      content: `
        VPS hosting comes in various forms to suit different needs and technical skills. The main types include managed VPS, cloud VPS, reseller VPS, and preconfigured VPS. Each type offers unique features and benefits:

* Managed VPS: Ideal if you prefer to leave the technical details to us, with expert support and maintenance included
* Cloud VPS: Provides scalable and flexible resources, perfect for growing businesses and dynamic workloads. Learn more about our cloud VPS
* Reseller VPS: Designed for those looking to offer hosting services to others, with features to support multiple clients
* Preconfigured VPS: Comes with ready-to-use setups, streamlining the process for specific applications or use cases
* Explore these options to find the perfect fit for your needs.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What is Windows VPS?',
      content: `
        A Windows VPS (virtual private server) offers the power and functionality of a dedicated Windows server at a lower cost. It provides a fully isolated environment where you can run applications, host websites, and manage tasks just like you would on a physical server, but with added flexibility and scalability.

If you’re looking for a VPS with reliable Windows technology, we’ve got you covered. Shop Windows VPS today and experience top-notch performance and support.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What type of VPS hosting does Liquid Web offer?',
      content: `
        We offer several types of VPS hosting, including self-managed, managed, CPU-optimized, memory-optimized, and general compute-optimized.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'When is VPS hosting not the right choice?',
      content: `
        Not all VPS hosting plans are managed at Liquid Web. Some of our VPS hosting plans are self-managed to suit every business need. Choose from these options:

New companies on a shoestring budget: If you’re primarily choosing hosting based on budget and don’t fall under regulations like PCI, shared hosting will be a cheaper option. However, there are security and performance trade-offs.
Businesses with zero technical skills: Because VPS provides root access to the server, it’s typically used by companies that have at least a basic degree of IT administration and troubleshooting capabilities. If you do have a skill gap, you can use a managed hosting provider for VPS to handle virtually anything that requires root access. You’ll still need the ability to use cPanel and Plesk for basic tasks.
Enterprises that need an entire dedicated server: If you don’t need to split environments into isolated VMs, dedicated servers will most likely be a better choice for you. For example, streaming, database-driven, and other bandwidth-intensive sites typically require a dedicated server.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'How to make VPS secure?',
      content: `
        The security of a VPS largely depends on how it’s configured, maintained, and managed. Here are a few key ways to improve VPS security:

Use root access: With root access, you can implement customized security measures, like installing firewalls, configuring intrusion detection systems, and setting up automated security updates to address unique threats relevant to your applications. Liquid Web offers several of these features as add-ons.
Regular updates: Keeping the operating system, software, and applications up to date is crucial. Liquid Web performs regular updates and patches for known vulnerabilities on the operating system level, reducing the risk of exploitation by hackers.
Regular backups: Regular backups ensure that you can quickly restore your system in case of a security breach or data loss, minimizing downtime and potential damage. Liquid Web offers an Acronis backup solution where you can customize frequency, snapshots, and more.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'How much does VPS hosting cost?',
      content: `
        VPS hosting costs depend on a number of factors, like the provider’s level of service and support, performance, bandwidth, and the features included. Overall, you can expect to pay more than you would for shared hosting but less than you would for dedicated.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'Which VPS is fastest?',
      content: `
        Liquid Web’s VPS hosting is known for delivering the fastest Linux, Apache, MySQL, and PHP (LAMP) stack performance. Third-party performance analyst firm Cloud Spectator found that our VPS speed is faster than Rackspace, DigitalOcean, and Amazon. Here are a few things we do to ensure your VPS speed stays blazing fast:

High-performance hardware: Liquid Web VPS hosting is built on our industry-famous servers, equipped with premium-quality disks and SSD drives.
KVM virtualization: We use KVM to create your private virtual environment and make it accessible through our Cloud Studio interface.
Redundant infrastructure: Our data centers are prepped and ready to handle heavy workloads with N+2 redundancies and much more.
Uptime guarantee: We guarantee 100% uptime on our elite network, and we also guarantee that power is up 24/7/365.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What is managed VPS hosting?',
      content: `
        Managed VPS (virtual private server) hosting gives you the power of a dedicated server with none of the hassle. Our team handles everything—from setup and security updates to performance monitoring and backups—so you can focus on growing your business. With a managed VPS, you get the flexibility, control, and performance you need, backed by expert support every step of the way. It’s the perfect solution for those who want a worry-free hosting experience without compromising on power or scalability.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What are the pros and cons of managed VPS?',
      content: `
       With managed VPS hosting, we take care of the technical heavy lifting, ensuring your server is secure, up-to-date, and running smoothly. From routine maintenance to troubleshooting and software installations, we handle it all so you can save time and focus on your business.

Benefits of managed VPS hosting:

Save time and effort
No IT expertise required
Automatic OS updates and patches
Server changes handled by professionals
Drawbacks of managed VPS hosting:

Higher cost compared to unmanaged
Less direct control over server management
Our managed VPS hosting ensures your environment is optimized for performance and security, backed by a team that stays on top of best practices and evolving technologies. With hands-on experience across a wide range of environments, our experts can quickly troubleshoot and resolve issues, giving you peace of mind.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What are the pros and cons of a self-managed VPS?',
      content: `
        With a self-managed VPS, your hosting provider handles the basics—delivering the VPS, maintaining the hardware, and running system health checks. The rest is in your hands. You’ll be responsible for server maintenance, monitoring, updates, and making any necessary adjustments.

Pros of self-managed VPS hosting

Cost savings: Save money upfront by taking control of server management.
Total control: Customize your server exactly how you need it, with no restrictions.
Cons of self-managed VPS hosting

Time-consuming: Management tasks divert attention from your core business operations.
Requires expertise: Your IT team will need advanced skills to manage and maintain the server.
Manual updates: OS updates, patches, and security fixes aren’t automated.
Increased risk: Without proactive monitoring, security and reliability can take a hit.
Choosing a self-managed VPS means your IT team takes on the work of a dedicated hosting staff while juggling their regular duties. And unless you’re prepared for round-the-clock server management, the potential for downtime and security vulnerabilities grows. While the upfront savings might seem appealing, businesses often find themselves paying more in the long run due to unexpected downtime or security breaches.
      `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What are the pros and cons of a core managed VPS?',
      content: `
        A core managed VPS strikes the perfect balance between full control and essential support. While you still have flexibility and autonomy, your hosting provider takes care of critical software installations, updates, and support. This includes OS patches, security enhancements, full web server management, and proactive monitoring with quick response and restoration when issues arise.

Pros of core managed VPS hosting

Enhanced security: Regular OS updates, patches, and security measures keep your server protected.
Proactive monitoring: Your provider watches for potential issues and responds before they cause problems.
Reduced workload: Core server management tasks are handled by experts, freeing up your team.
Reliable support: Full web server support and assistance with core software provide peace of mind.
Cons of core managed VPS hosting

Less control: Some customization and server management are offloaded to your provider.
Higher cost: You pay more for the added management and support compared to a self-managed VPS.
Core managed VPS hosting is ideal for businesses that want a balance between maintaining control and ensuring their server is secure and up-to-date without requiring constant oversight from their in-house team. It offers peace of mind, letting you focus on growth while the experts handle the technical heavy lifting.
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
