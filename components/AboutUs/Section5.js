import CommonStyle from '../../styles/commomStyle.module.css'

const Section5 = () => {
  const sectionData = [
    {
      title: 'Founded',
      description1:
        'Knowing the risk of failure in business is high and going all in anyway takes enthusiasm and tenacity. We know from experience—our customers’ and our own.',
      description2:
        'Liquid Web was founded in 1997 in Matthew Hill’s basement. From those modest beginnings, we’ve grown into a multi-million-dollar global enterprise.',
    },
    {
      title: 'Fortified',
      description1:
        'In the digital realm, security is paramount. Within our proprietary data centers, we implement robust security measures tailored to our infrastructure.',
      description2:
        'From biometric access controls to advanced intrusion detection systems, every layer of defense is reinforced to safeguard your data against cyber threats.',
    },
    {
      title: 'Enduring',
      description1:
        'We’ve been a dependable cornerstone for businesses and individuals alike since the late 90s. Our decades of experience translate to in-depth expertise and stability, ensuring your online presence is in trusted hands.',
      description2:
        'We continuously innovate and adapt to the ever-evolving digital landscape, offering future-proof solutions.',
    },
  ]

  return (
    <div className={`py-5 ${CommonStyle.ContainerWidth}`}>
      <div className="mt-5 row">
        {sectionData.map((item, index) => (
          <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
            <span
              className="fs-4 mb-3 p-1 rounded"
              style={{ background: '#E0DFDE' }}
            >
              {item.title}
            </span>
            <div className="mt-5">
              <p className="fs-5 text-muted">{item.description1}</p>
              <p className="fs-5 text-muted">{item.description2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section5
