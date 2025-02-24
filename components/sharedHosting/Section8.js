import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import CommonStyle from '../../styles/commomStyle.module.css'

const cards = [
  {
    id: 1,
    svg: (
      <svg
        id="a"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 96 96"
        width="96px"
      >
        <path
          d="M85.243,1.74H25.703c-5.06,0-9.15,4.1-9.15,9.15v14.67h50.29v8.33h9.43v10.349l-53.739.093.009,36.468v10.47h64.86v-11.95c4.01-.97,6.99-4.58,6.99-8.88V10.89c0-5.05-4.09-9.15-9.15-9.15Z"
          fill="#e4effb"
        ></path>
        <rect id="b" x="-.217" width="96" height="96" fill="none"></rect>
        <path
          d="M91.227,27.167c0,.552-.447,1-1,1h-4.608v4.463c0,.552-.447,1-1,1s-1-.448-1-1v-4.463h-4.463c-.553,0-1-.448-1-1s.447-1,1-1h4.463v-4.608c0-.552.447-1,1-1s1,.448,1,1v4.608h4.608c.553,0,1,.448,1,1ZM30.238,48.663c-.943,0-1.707.764-1.707,1.707s.764,1.707,1.707,1.707,1.707-.764,1.707-1.707-.764-1.707-1.707-1.707ZM35.358,48.663c-.943,0-1.707.764-1.707,1.707s.764,1.707,1.707,1.707,1.707-.764,1.707-1.707-.764-1.707-1.707-1.707ZM40.478,48.663c-.943,0-1.707.764-1.707,1.707s.764,1.707,1.707,1.707,1.707-.764,1.707-1.707-.764-1.707-1.707-1.707ZM88.408,44.094v47.178c0,.553-.447,1-1,1H22.539c-.552,0-1-.447-1-1v-9.474h-9.679c-.552,0-1-.447-1-1v-7.324H2.673c-.552,0-1-.447-1-1V25.564c0-.552.448-1,1-1h64.172c.553,0,1,.448,1,1v7.324h8.187c.553,0,1,.448,1,1v9.206h10.376c.553,0,1,.448,1,1ZM86.408,45.094H23.539v10.249h62.869v-10.249ZM10.86,71.474v-37.585c0-.552.448-1,1-1h53.986v-6.324H3.673v44.909h7.186ZM21.539,79.798v-35.487c0-.671.546-1.217,1.217-1.217h52.277v-8.206H12.86v44.91h8.679ZM86.408,90.271v-32.929H23.539v32.929h62.869Z"
          fill="#807e7e"
        ></path>
      </svg>
    ),
    title: 'Host multiple sites',
    subtitle: 'on GrowBig & GoGeek plans',
    modalDescription:
      'On our GrowBig and GoGeek accounts, you can add as many additional sites as you need. Optimize your hosting fees and resource consumption by grouping less resource-intensive sites under one account.',
    description:
      'Create your perfect website effortlessly with SiteGround Site Builder or install WordPress for advanced functionality.',
  },
  {
    id: 2,
    svg: (
      <svg
        id="a"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 96 96"
        width="96px"
      >
        <path
          d="M86.454,42.921l-3.787-2.187v-12.667L48,9l-10.395,5.718L15.411,1.904C11.501-.353,6.614,2.469,6.614,6.984v82.033c0,4.515,4.887,7.337,8.797,5.079l22.193-12.813,10.396,5.718,34.667-19.067v-12.668l3.787-2.187c3.91-2.257,3.91-7.901,0-10.158Z"
          fill="#f4eaf4"
        ></path>
        <path
          d="M48,88c-.166,0-.332-.041-.482-.124l-34.667-19.066c-.319-.176-.518-.512-.518-.876V28.067c0-.365.199-.701.518-.876L47.518,8.124c.3-.165.664-.165.964,0l34.666,19.067c.32.175.519.511.519.876v39.867c0,.364-.198.7-.519.876l-34.666,19.066c-.15.083-.316.124-.482.124ZM14.334,67.343l33.667,18.516,33.666-18.516V28.658L48,10.141,14.334,28.658v38.685ZM44.532,41.2c-.144,0-.29-.031-.427-.096-.435-.206-.661-.691-.54-1.156l2.273-8.714h-4.772c-.376,0-.72-.211-.891-.546-.171-.335-.139-.738.083-1.042l10.399-14.3c.283-.389.803-.519,1.236-.315.435.206.661.691.54,1.156l-2.273,8.714h4.772c.376,0,.721.211.892.546.17.335.139.738-.083,1.042l-10.4,14.3c-.193.266-.497.412-.809.412ZM43.03,29.234h4.103c.31,0,.602.144.792.389.189.245.254.564.176.864l-1.265,4.847,6.133-8.433h-4.103c-.31,0-.602-.144-.792-.389-.189-.245-.254-.564-.176-.864l1.265-4.847-6.133,8.433ZM28.119,49.291h6.656c2.097.017,4.342.763,5.278,1.95.945,1.187,1.248,2.799.927,4.845-.13.953-.407,1.889-.823,2.756-.416.91-.988,1.742-1.707,2.444-.763.841-1.751,1.447-2.851,1.751-1.031.251-2.288.52-3.345.52h-3.198l-.953,4.758h-3.805l3.805-19.015.017-.009ZM29.879,60.402c.104.017.693.026.693.026,1.439.052,2.877-.121,4.264-.503,1.135-.373,1.898-1.664,2.288-3.865.321-1.855,0-2.921-.962-3.207-1.153-.303-2.349-.442-3.536-.399-.217.017-1.153,0-1.153,0l-1.595,7.947ZM45.226,44.542l-3.805,19.015h3.805l2.167-11.102,2.782.061c.702,0,1.447.069,1.846.581.399.511.364,1.257.156,1.881l-2.193,8.58h3.805l2.201-8.979c.373-1.985.104-3.319-.797-4.03-1.196-.797-2.617-1.188-4.047-1.11l-3.042-.147.936-4.758h-3.805l-.009.009ZM60.448,49.291l6.63.147c2.097.017,3.614.615,4.55,1.803.936,1.187,1.248,2.799.927,4.845-.13.953-.407,1.889-.823,2.756-.416.91-.988,1.742-1.707,2.444-.763.841-1.751,1.447-2.851,1.751-1.031.251-2.479.52-3.536.52h-3.189l-.953,4.758h-3.805l4.758-19.015v-.009ZM61.453,60.402c.104.017.693.026.693.026,1.439.052,2.877-.121,4.264-.503,1.135-.373,1.898-1.664,2.288-3.865.321-1.855,0-2.921-.962-3.207-1.153-.303-2.349-.442-3.536-.399-.217.017-1.17.026-1.17.026l-1.577,7.921Z"
          fill="#807e7e"
        ></path>
      </svg>
    ),
    title: 'Ultrafast PHP',
    subtitle: 'оn GrowBig & GoGeek plans',
    modalDescription:
      'We have developed a custom PHP implementation that significantly cuts the TTFB (time to first byte) and makes your pages load 30% faster on average. This special PHP setup has lower memory usage and allows the server to process a bigger number of queries faster. People on GrowBig and higher plans can take advantage of the benefits of our unique and faster PHP implementation.',
    description:
      'Custom PHP setup for great TTFB (time to first byte) and overall site speed.',
  },
  {
    id: 3,
    svg: (
      <svg
        id="a"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 96 96"
        width="96px"
      >
        <rect id="b" x="0" width="96" height="96" fill="none"></rect>
        <path
          d="M49.287,1h0c-12.375,0-23.584,4.976-31.749,13.031h51.405v32.348l-42.083-.913.02,15.417H6.52c3.587,10.45,10.891,19.172,20.34,24.582v8.178h64.869v-31.814c1.791-4.867,2.771-10.127,2.771-15.616h0C94.5,21.242,74.257,1,49.287,1Z"
          fill="#faf9d5"
        ></path>
        <path
          d="M91.729,45.466H26.86c-.552,0-1,.448-1,1v47.177c0,.553.448,1,1,1h64.869c.553,0,1-.447,1-1v-47.177c0-.552-.447-1-1-1ZM90.729,47.466v10.249H27.86v-10.249h62.869ZM27.86,92.643v-32.928h62.869v32.928H27.86ZM32.853,52.742c0-.943.764-1.707,1.707-1.707s1.707.764,1.707,1.707-.764,1.707-1.707,1.707-1.707-.764-1.707-1.707ZM37.972,52.742c0-.943.764-1.707,1.707-1.707s1.707.764,1.707,1.707-.764,1.707-1.707,1.707-1.707-.764-1.707-1.707ZM43.092,52.742c0-.943.764-1.707,1.707-1.707s1.707.764,1.707,1.707-.764,1.707-1.707,1.707-1.707-.764-1.707-1.707ZM22.013,60.209H5.074V27.28h62.869v14.07c0,.552.447,1,1,1s1-.448,1-1V14.031c0-.552-.447-1-1-1H4.074c-.552,0-1,.448-1,1v47.178c0,.553.448,1,1,1h17.938c.552,0,1-.447,1-1s-.448-1-1-1ZM67.943,15.031v10.249H5.074v-10.249h62.869ZM10.067,20.307c0-.943.764-1.707,1.707-1.707s1.707.764,1.707,1.707-.764,1.707-1.707,1.707-1.707-.764-1.707-1.707ZM15.187,20.307c0-.943.764-1.707,1.707-1.707s1.707.764,1.707,1.707-.764,1.707-1.707,1.707-1.707-.764-1.707-1.707ZM20.306,20.307c0-.943.764-1.707,1.707-1.707s1.707.764,1.707,1.707-.764,1.707-1.707,1.707-1.707-.764-1.707-1.707Z"
          fill="#807e7e"
        ></path>
      </svg>
    ),
    title: 'Easy staging tool',
    subtitle: 'оn GrowBig & GoGeek plans',
    modalDescription:
      'Many of our customers maintain WordPress sites that require updates and changes as their businesses grow. However, big changes can be risky and it’s a good practice to test any major change in a safe environment that won’t affect your live site. We’ve developed a tool that creates a copy of your site, allows you to work on the testing site, and then push the changes to your live site with confidence - in one click! Just to be on the safe side, we also perform automatic backups each time you upload a staging version to production. The tool is available on the GrowBig and GoGeek plans.',
    description:
      'Create a copy of your site and test changes before pushing them live.',
  },
  {
    id: 4,
    svg: (
      <svg
        id="a"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 96 96"
        width="96px"
      >
        <rect y=".001" width="96" height="96" fill="none"></rect>
        <path
          d="M84.44,22.481L46.68.471c-1.08-.63-2.41-.63-3.48,0L5.43,22.481c-1.08.63-1.74,1.79-1.74,3.04v44.02c0,1.25.66,2.41,1.74,3.04l37.77,22.01c1.07.63,2.4.63,3.48,0l37.76-22.01c1.08-.63,1.75-1.79,1.74-3.04V25.521c.01-1.25-.66-2.41-1.74-3.04ZM55.8,61.561l-11.07-5.81-11.06,5.81,2.12-12.32-8.96-8.71,12.37-1.81,5.53-11.21,5.54,11.21,12.37,1.81-8.95,8.71,2.11,12.32Z"
          fill="#fbf8d5"
        ></path>
        <path
          d="M80.009,21.219H10.082c-.552,0-1,.448-1,1v69H2.269c-.552,0-1,.447-1,1s.448,1,1,1h15.868c.552,0,1-.447,1-1s-.448-1-1-1h-7.055v-20.468h68.927c.553,0,1-.447,1-1V22.219c0-.552-.447-1-1-1ZM79.009,68.751H11.082V23.219h67.927v45.532ZM34.714,49.594l-2.028,11.8c-.064.375.089.754.397.978.308.225.716.253,1.053.077l10.598-5.567,10.598,5.567c.146.076.306.114.465.114.207,0,.413-.064.588-.191.308-.223.462-.603.397-.978l-2.018-11.8,8.569-8.351c.272-.266.37-.663.253-1.025s-.43-.626-.807-.681l-11.851-1.73-5.299-10.737c-.338-.683-1.457-.683-1.794,0l-5.298,10.737-11.851,1.73c-.376.055-.689.319-.807.681-.118.362-.019.76.253,1.025l8.579,8.351ZM39.348,39.71c.325-.048.606-.252.752-.547l4.634-9.391,4.635,9.391c.146.295.427.5.752.547l10.366,1.513-7.495,7.305c-.235.23-.343.561-.287.885l1.765,10.323-9.271-4.871c-.146-.076-.305-.114-.465-.114s-.319.038-.465.114l-9.27,4.87,1.774-10.322c.056-.324-.052-.656-.288-.886l-7.504-7.304,10.366-1.513Z"
          fill="#807e7e"
        ></path>
      </svg>
    ),
    title: 'Advanced priority support',
    subtitle: 'оn GoGeek plan',
    modalDescription:
      'Issues initiated on chat or ticket by our GoGeek users are assigned with priority to our most experienced support agents available. This ensures an exceptional quality and speed of the technical support provided.',
    description: 'Issues handled with priority by our top technicians.',
  },
  {
    id: 5,
    svg: (
      <svg
        id="a"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 96 96"
        width="96px"
      >
        <path
          d="M51.499,0h0C28.029,0,9.003,19.026,9.003,42.496h0c0,1.148.059,2.282.148,3.408L1.144,53.91l38.962,38.962,8.025-8.025c1.112.087,2.233.145,3.367.145h0c23.47,0,42.496-19.026,42.496-42.496h0C93.994,19.026,74.968,0,51.499,0ZM41.407,77.263c-2.851,0-5.163-2.311-5.163-5.163s2.311-5.163,5.163-5.163,5.163,2.311,5.163,5.163-2.311,5.163-5.163,5.163ZM41.653,45.116c-2.851,0-5.163-2.311-5.163-5.163s2.311-5.163,5.163-5.163,5.163,2.311,5.163,5.163-2.311,5.163-5.163,5.163ZM59.002,62.839c-2.851,0-5.163-2.311-5.163-5.163s2.311-5.163,5.163-5.163,5.163,2.311,5.163,5.163-2.311,5.163-5.163,5.163Z"
          fill="#def7ea"
        ></path>
        <rect id="b" width="96" height="96" fill="none"></rect>
        <path
          d="M80.206,53.203L41.244,14.241c-.375-.375-1.039-.375-1.414,0L.868,53.203c-.391.391-.391,1.023,0,1.414l38.961,38.962c.188.188.442.293.707.293s.52-.105.707-.293l38.962-38.962c.188-.188.293-.441.293-.707s-.105-.52-.293-.707ZM40.537,91.458L2.989,53.91l26.175-26.176,7.602,8.479c-.797,1.039-1.276,2.333-1.276,3.74,0,2.972,2.114,5.458,4.917,6.036v20.036c-2.923.48-5.163,3.017-5.163,6.074,0,3.398,2.765,6.163,6.163,6.163s6.163-2.765,6.163-6.163c0-3.057-2.24-5.594-5.163-6.074v-19.96c.986-.121,1.903-.471,2.689-1.003l8.467,9.444c-.765,1.027-1.223,2.294-1.223,3.67,0,3.398,2.765,6.163,6.162,6.163s6.163-2.765,6.163-6.163-2.765-6.163-6.163-6.163c-1.301,0-2.507.408-3.503,1.099l-8.438-9.412c-.005-.005-.012-.007-.017-.012.794-1.038,1.272-2.33,1.272-3.735,0-3.398-2.765-6.163-6.163-6.163-1.27,0-2.451.387-3.433,1.048l-7.639-8.52,9.956-9.956,37.548,37.548-37.548,37.548ZM37.49,39.953c0-1.147.466-2.187,1.22-2.941.024-.018.052-.025.075-.045.014-.013.019-.03.032-.044.745-.697,1.738-1.133,2.836-1.133,2.295,0,4.163,1.867,4.163,4.163s-1.868,4.163-4.163,4.163-4.163-1.868-4.163-4.163ZM45.569,72.1c0,2.296-1.867,4.163-4.163,4.163s-4.163-1.867-4.163-4.163,1.868-4.163,4.163-4.163,4.163,1.867,4.163,4.163ZM54.34,58.177c0-2.296,1.867-4.163,4.162-4.163s4.163,1.867,4.163,4.163-1.867,4.163-4.163,4.163-4.162-1.867-4.162-4.163Z"
          fill="#807e7e"
        ></path>
      </svg>
    ),
    title: 'Easy Git integration',
    subtitle: 'оn GoGeek plan',
    modalDescription:
      'Git is preinstalled on our GoGeek servers. Use it to create repositories of your website, which you can later access, download and edit on multiple local branches using Git. We have also developed a unique SG and Git interface that allows you to create repos of the most popular applications (WordPress, Joomla, Drupal, and PrestaShop) through a visual interface.',
    description:
      'We help your development flow by pre-installing Git on our servers.',
  },
  {
    id: 6,
    svg: (
      <svg
        id="a"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 96 96"
        width="96px"
      >
        <path
          d="M91.011,53.752l-12.337-9.721-4.231,4.169h-10.534l-7.448-7.34v-10.38l2.228-2.196-.959-.756L24.449,1.306c-3.663-2.886-9.078-.725-9.746,3.891l-6.069,41.934-6.069,41.934c-.668,4.616,3.911,8.224,8.243,6.495l39.35-15.711,5.504-2.198,6.455-23.025h-6.863v-6.426h27.845v6.426h-6.863l3.734,13.32,9.538-3.808c4.331-1.729,5.166-7.499,1.503-10.386Z"
          fill="#e1eef9"
        ></path>
        <rect id="b" y="0" width="96" height="96" fill="none"></rect>
        <path
          d="M41.862,41.733c0,.552-.448,1-1,1h-10.087v10.004c0,.553-.448,1-1,1s-1-.447-1-1v-10.004h-10.086c-.552,0-1-.448-1-1s.448-1,1-1h10.086v-9.992c0-.552.448-1,1-1s1,.448,1,1v9.992h10.087c.552,0,1,.448,1,1ZM91.257,95.045c-.188.264-.491.42-.814.42h-42.532c-.323,0-.627-.156-.814-.42s-.236-.602-.131-.907l2.667-7.711c.004-.011.012-.017.016-.028.039-.103.091-.202.164-.289l.019-.022s.003-.003.004-.005l3.631-4.305,7.331-26.152h-5.544c-.553,0-1-.447-1-1v-6.425c0-.552.447-1,1-1h6.216l-5.711-5.627c-.19-.188-.298-.445-.298-.712v-10.38c0-.268.107-.524.298-.712l7.449-7.34c.188-.184.439-.288.702-.288h10.533c.263,0,.515.104.702.288l7.448,7.34c.19.188.298.445.298.712v10.38c0,.268-.107.524-.298.712l-5.711,5.627h6.215c.553,0,1,.448,1,1v6.425c0,.553-.447,1-1,1h-5.544l7.332,26.152,3.632,4.307s0,0,0,0l.021.025c.074.087.125.186.164.289.004.01.013.017.016.028l2.667,7.711c.105.306.057.644-.131.907ZM64.32,47.201h9.713l6.859-6.758v-9.543l-6.858-6.758h-9.713l-6.859,6.758v9.543l6.859,6.758ZM56.254,53.626h25.845v-4.425h-25.845v4.425ZM55.69,81.257h26.973l-7.186-25.631h-12.603l-7.185,25.631ZM52.729,85.755h32.896l-2.107-2.498h-28.682l-2.107,2.498ZM89.038,93.465l-1.975-5.71h-35.774l-1.975,5.71h39.724Z"
          fill="#807e7e"
        ></path>
      </svg>
    ),
    title: 'Add white-label clients',
    subtitle: 'оn GoGeek plan',
    modalDescription:
      'On GoGeek plan you can register your clients as users in your Account and give them white-label access to the Site Tools of the sites you build for them. When your client logs in the Site Tools of their website, they won’t see SiteGround logo or name anywhere.',
    description:
      'Give your clients white-label access to the Site Tools of their sites.',
  },
]

export default function Section8() {
  const [show, setShow] = useState(false)
  const [modalContent, setModalContent] = useState({
    svg: null,
    title: '',
    description: '',
    modalDescription: '',
  })

  const handleClose = () => setShow(false)
  const handleShow = (card) => {
    setModalContent({
      svg: card.svg,
      title: card.title,
      description: card.description,
      modalDescription: card.modalDescription,
    })
    setShow(true)
  }

  return (
    <div className={CommonStyle.ContainerWidth}>
      <div className="row my-5 pb-md-5 d-flex align-items-stretch">
        {cards.map((card) => (
          <div
            key={card.id}
            className="col-lg-4 col-sm-6 mt-3 d-flex flex-column mt-5"
          >
            {card.svg}
            <h5 className="mt-3 fw-bold">{card.title}</h5>
            <h5>{card.subtitle}</h5>
            <p>{card.description}</p>
            <h6
              className="text-primary"
              style={{ marginTop: 'auto', cursor: 'pointer' }}
              onClick={() => handleShow(card)}
            >
              LEARN MORE →
            </h6>
          </div>
        ))}
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body className="p-4">
          <div className="text-end">
            <i
              className="fa fa-times fs-5"
              onClick={handleClose}
              style={{ cursor: 'pointer' }}
            ></i>
          </div>
          {modalContent.svg}
          <h5 className="mt-3 fw-semibold">{modalContent.title}</h5>
          <p style={{ fontSize: '14px' }}>{modalContent.modalDescription}</p>
        </Modal.Body>
      </Modal>
    </div>
  )
}
