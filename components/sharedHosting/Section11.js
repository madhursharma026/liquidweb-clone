import CommonStyle from '../../styles/commomStyle.module.css'
import Accordion from './components/accordion'

export default function Section11() {
  const faqData = [
    {
      title:
        'What is the difference between Web Hosting vs. Managed WordPress Hosting vs. Cloud Hosting?',
      content: `
        With web hosting, also known as shared hosting, your website shares the resources of a single server with other clients’ websites. This means that you use only a part of this server’s resources, e.g. RAM, CPU, and others.

        WordPress hosting is shared hosting that includes additional WordPress-specific features and services for an extra layer of convenience for WordPress website owners. With Managed WordPress hosting, the web hosting provider handles all the technical details of managing a website, such as software updates, security and speed optimizations, and others.

        Cloud hosting, on the other hand, is a group of servers which share their CPU, RAM, and space to make a bigger pool of resources. Then, these resources are virtually shared among multiple websites and clients. The main difference between cloud hosting and shared hosting is the number of servers and the way resources are allocated. With shared hosting, you get one server to share with all the rest of the sites hosted on it. With cloud hosting, you get hosted on a pool of servers, and your site receives a dedicated amount of the virtually partitioned shared resources.
      `,
    },
    {
      title:
        'Does your standard Web Hosting include security/support/speed optimization tools?',
      content: `
Our standard web hosting plans include numerous speed and security optimizations for optimal performance, while providing top-notch customer support.

Our hosting platform is built on top of Google Cloud infrastructure for best performance, with multiple speed optimizations. These include: a powerful out-of-the-box caching technology on three levels that speeds sites up to 5 times, an ultrafast PHP setup that makes resource usage more efficient, a custom MySQL setup that handles heavy queries so that websites load quickly even under high load, a free CDN option for all websites, and many more.

To protect websites, hosted with us, we provide a smart Web Application Firewall that secures our servers and your applications, an AI anti-bot system that blocks millions of brute force attacks every hour, geographically distributed backups that minimize the risk of data loss, free SSL certificates with every plan, and additional in-house built security tools.

For an extra peace of mind, SiteGround clients get 24/7 expert support for their websites. Our award-winning support team is always there to help and solve issues fast and efficiently.
      `,
    },
    {
      title: 'Can I register new domains with your Web Hosting plans?',
      content: `
We offer domain registration with all our hosting plans, including more than 50 extensions, such as .com, .net, .co.uk, .org, and more. You can also use our migration service to transfer your existing domain to SiteGround in order to manage both your domain and website from one place.

With our web hosting plans, you can also choose to have a temporary domain for your website only during the initial website setup process. Later on, you can change your site’s domain name, once you’ve decided on the new domain name.
      `,
    },
    {
      title: 'Do you offer email hosting in your Web Hosting plans?',
      content: `
All our web hosting plans come with a free professional email address with your website domain, including free spam protection as well. You can create as many accounts as you need and easily give access to individual accounts to your employees, team or else. What’s more, you can access your accounts from a user-friendly webmail interface from anywhere, create forwarders and autoresponders, and many more.

With our free Email Migrator tool, you can also migrate your emails to SiteGround. It allows you to quickly transfer your email accounts with no technical knowledge required, in a secure and efficient manner.
      `,
    },
    {
      title:
        'Can I transfer an existing website to SiteGround from another company?',
      content: `
Yes, there are two ways to transfer your website to SiteGround. You can request a manual web migration (done by our experts) from your Client Area. The manual web migration includes transferring your site's databases and files, and configuring the website to work with the transferred databases and files.

Alternatively, you can take advantage of our unique SiteGround Migrator plugin to transfer your WordPress site(s) from any host at no extra cost. With our free SiteGround Migrator plugin, you can easily transfer all your site(s) into one account, including site’s content, themes and plugins.
      `,
    },
    {
      title:
        'Can I host WordPress and other applications (PHP, HTML websites) on your Web Hosting plans?',
      content: `
Our web hosting platform is optimized to support numerous PHP and MySQL-based applications. You can run some of the most popular CMS applications, including WordPress, Drupal, Joomla, and more.
      `,
    },
  ]

  return (
    <div className={`${CommonStyle.ContainerWidth} my-5 py-lg-5`}>
      <p className="fs-1 text-center fw-semibold">Frequently Asked Questions</p>
      {faqData.map((faq, index) => (
        <Accordion key={index} title={faq.title} content={faq.content} />
      ))}
    </div>
  )
}
