import { Accordion } from 'react-bootstrap'
import CommonStyle from '../../styles/commomStyle.module.css'

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="15px"
    className="me-3"
  >
    <path d="M15.249,1.438a2,2,0,0,0-2.811.312l-6.6,8.256-2.42-2.42A2,2,0,0,0,.586,10.414l4,4c.026.026.057.045.084.069s.051.055.08.079.034.015.049.026a1.945,1.945,0,0,0,.519.286c.03.011.06.018.091.028A2.04,2.04,0,0,0,6,15H6a2.037,2.037,0,0,0,.411-.045c.042-.009.081-.025.123-.037a1.88,1.88,0,0,0,.271-.092c.049-.022.1-.05.143-.075a1.883,1.883,0,0,0,.221-.137,1.622,1.622,0,0,0,.138-.113c.035-.03.074-.054.107-.087s.052-.067.081-.1.046-.041.066-.066l8-10A2,2,0,0,0,15.249,1.438Z"></path>
  </svg>
)

const accordionData = [
  {
    title: 'Faster Website Performance',
    subtitle: 'See 85% speed improvement on average after moving to SiteGround',
    items: [
      {
        label: 'High-speed Google Cloud infrastructure',
        description:
          'Host on a high-performing server infrastructure, powered by Google Cloud Platform with one of the fastest networks out there.',
      },
      {
        label: 'Free 1-click CDN',
        description:
          'Speed up your website loading time for visitors anywhere in the world with our free 1-click CDN – no configuration needed.',
      },
      {
        label: 'Website Caching',
        description:
          'See up to 5 times website speed improvement with multi-level website caching enabled by default.',
      },
      {
        label: 'High-performing MySQL & Ultrafast PHP',
        description:
          'Speed up your database processes with custom, out-of-the-box MySQL and Ultrafast PHP technology.',
      },
    ],
  },
  {
    title: 'Unmatched Security and Availability',
    subtitle:
      'Enjoy multi-level security and 99.9% uptime for more peace of mind',
    items: [
      {
        label: 'Free SSL Pre-installed',
        description:
          'Build trust in your brand, process client information securely, protect sensitive data and your business reputation.',
      },
      {
        label: 'Automatic geo-distributed daily backups',
        description:
          'Maintain peace of mind with 30 automatic daily backup copies stored in a separate geo-location for optimal redundancy.',
      },
      {
        label: 'Smart AI protection system',
        description:
          'Our smart AI-powered anti-bot system effectively blocks 99% of malicious traffic before it even reaches your site.',
      },
      {
        label: 'Proactive security on all levels',
        description:
          'Keep safe from large-scale attacks with our custom WAF on server level; avoid application exploits and vulnerabilities on application level.',
      },
    ],
  },
  {
    title: 'Easy Website Management',
    subtitle:
      'Build, manage and grow your website more easily, with less hassle',
    items: [
      {
        label: '1-click Software Installation',
        description:
          'Save time and install applications like WordPress, Joomla, Prestashop & more in a click!',
      },
      {
        label: 'Easy Site Builder',
        description:
          'Create and manage a stunning website with ease, using professional templates, built-in SEO features, and an AI writer with the SiteGround Site Builder – included with your plan.',
      },
      {
        label: 'Intuitive Website Management Interfaces',
        description:
          'Save time with user-friendly Client Area and Site Tools, packed with tons of features that help you manage your sites.',
      },
      {
        label: 'Free Collaborator Access',
        description:
          'Add team members, web developers or designers to work on your website without sharing sensitive login information.',
      },
    ],
  },
  {
    title: 'Managed WordPress Hosting',
    subtitle:
      'Simplify your WordPress experience with managed services included in all our plans',
    items: [
      {
        label: 'Easy Start And Automated Updates',
        description:
          'Set up or transfer WordPress automatically in one click, enable WordPress auto-updates to always run the latest version - set and forget.',
      },
      {
        label: 'WordPress Performance Optimization',
        description:
          'Make powerful optimizations in a click - image optimization, code minification & more - with our built-in Speed Optimizer Plugin.',
      },
      {
        label: 'WordPress Security Solutions',
        description:
          'Protect your WordPress from various exploits and activate built-in measures against common vulnerabilities with our all-inclusive Security Optimizer plugin.',
      },
    ],
  },
]

export default function Section5() {
  return (
    <div className={CommonStyle.ContainerWidth}>
      <div className="py-5 my-5">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center order-lg-2">
            <img
              src="/Accordion.png"
              alt="Accordion"
              className="img-fluid"
              style={{ maxWidth: '450px', margin: 'auto' }}
            />
          </div>
          <div className="col-lg-6">
            <Accordion defaultActiveKey="0">
              {accordionData.map((section, idx) => (
                <Accordion.Item eventKey={idx.toString()} key={idx}>
                  <Accordion.Header>
                    <h4>{section.title}</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p style={{ fontSize: '18px' }}>{section.subtitle}</p>
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="mb-3">
                        <h6 className="d-flex align-items-center">
                          {icon}
                          {item.label}
                        </h6>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
