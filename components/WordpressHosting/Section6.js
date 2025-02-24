import CommonStyle from '../../styles/commomStyle.module.css'
import Accordion from './components/accordion' // Ensure the filename matches

export default function Section6() {
  const faqData = [
    {
      title: 'What is WordPress hosting?',
      content: `
            WordPress is software that powers websites. A hosting company provides the server space and infrastructure needed for your WordPress site to be accessible on the internet. WordPress hosting ensures that your WordPress site is always online, fast, and secure.
          `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'How do you move a WordPress site to a new host?',
      content: `
           Transferring a WordPress site to a new hosting provider can be tricky. There are some plugins that can help, but it still takes a bit of technical know-how. That’s why Liquid Web offers hassle-free migrations. Let our team of experts take care of it for you.
          `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'Is WordPress a hosting site?',
      content: `
           WordPress is a platform that helps you manage your website’s content but doesn’t house or store that content for you.

There is a slight caveat to this answer. If you look into WordPress, you’ll notice WordPress has two distinct websites: WordPress.org and WordPress.com. WordPress.org is the free, open-source CMS that’s usually discussed when talking about WordPress. WordPress.com offers hosting and limited use of the WordPress CMS. They aren’t the same thing.
          `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What is managed WordPress hosting?',
      content: `
           Managed WordPress hosting is a type of hosting service wherein the hosting company handles the setup, administration, management, and support of a server and application. Managed WordPress hosting lets you focus on design and content while our experts handle the technical work of hosting management.
          `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'How much is WordPress hosting?',
      content: `
          The cost of hosting specifically optimized for WordPress depends on the type of hosting you choose. The cheapest WordPress hosting can start at $3-$5 a month. For a more optimized experience, you’ll be paying in the range of $20-40 a month. More powerful forms of hosting, like WordPress dedicated servers, can cost hundreds of dollars per month, excluding expenses for additional nodes and server clusters.
          `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What are the different types of WordPress hosting?',
      content: `
          WordPress hosting types come at different price points and offer various levels of services and competencies. The most popular types include WordPress VPS hosting, dedicated servers, cloud hosting, and managed WordPress hosting.
          `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'Are there cons to using WordPress web hosting?',
      content: `
          There may be drawbacks depending on your site’s setup. Some WordPress hosts don’t allow full access to plugins, and migrations aren’t always free. WordPress hosting generally has a higher cost because the infrastructure is specifically built for WordPress.
          `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'What is WordPress?',
      content: `
          WordPress is a popular and versatile content management system (CMS) that is used to create, launch, and manage websites. It allows users to create without needing to know code. As an open source platform, it’s free to use and has a robust community of support.
          `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'Why is WordPress support important?',
      content: `
          While WordPress is considered an easy-to-use CMS, any website builder has its own set of common issues. A web host that knows WordPress can help with these issues and work with you to resolve them quickly.

Technical issues

This can include troubleshooting server errors, resolving compatibility issues, database connections, or the White Screen of Death.

Performance issues

WordPress hosting support can, for the most part, assist with anything impacting load time, caching, or optimization. This includes common issues such as caching configurations, unnecessary plugins, connecting performance enhancements like a CDN, and inadequate server resources.

Security

WordPress support proactively helps ensure that websites are secure and protected against potential threats. Support teams can help implement security best practices for their customers, like updating vulnerable plugins, login credentials, 2FA, file permissions, configuring SSLs, and enabling any platform security features available.

Backup and disaster recovery

WordPress hosting support teams can help troubleshoot the most common WordPress backup issues, which include incomplete backups, scheduling backups, manual backups, and any backup compatibility issues. If data is lost, a WordPress hosting support team can help you recover your data and restore your website to its previous state.

Plugin and theme compatibility

If your plugins or themes conflict with the backend of your website, support can help you resolve the issues quickly and cleanly. The most common conflicts in this area of WordPress support include PHP version compatibility, database query conflicts, functionality overlaps, and dependency issues.
          `,
      buttonText: 'Chat with an expert',
    },
    {
      title: 'Is WordPress hosting the same as WooCommerce hosting?',
      content: `
          It depends on the hosting provider. For most hosts, WordPress hosting is exactly the same as WooCommerce hosting. The only difference is that WooCommerce hosting has the WooCommerce plugin installed.

Liquid Web’s managed WooCommerce hosting is truly different from your average WordPress hosting. Learn more about how we optimize for WooCommerce.
          `,
      buttonText: 'Chat with an expert',
    },
  ]

  return (
    <div className={`${CommonStyle.ContainerWidth} my-5 py-lg-5`}>
      <p className="fs-2">WordPress hosting FAQs</p>
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
