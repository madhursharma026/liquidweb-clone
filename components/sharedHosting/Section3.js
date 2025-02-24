import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import CommonStyle from '../../styles/commomStyle.module.css'

export default function Section3() {
  const [show1, setShow1] = useState(false)
  const handleClose1 = () => setShow1(false)
  const handleShow1 = () => setShow1(true)

  const [show2, setShow2] = useState(false)
  const handleClose2 = () => setShow2(false)
  const handleShow2 = () => setShow2(true)

  const [show3, setShow3] = useState(false)
  const handleClose3 = () => setShow3(false)
  const handleShow3 = () => setShow3(true)

  const [show4, setShow4] = useState(false)
  const handleClose4 = () => setShow4(false)
  const handleShow4 = () => setShow4(true)

  return (
    <div className={CommonStyle.ContainerWidth}>
      <div className="my-5 py-4">
        <div className="text-center">
          <h1>Host Here, Succeed Everywhere</h1>
          <p className="fs-5">
            Boost your online presence for better business results all around
          </p>
          <img
            src="/websiteLookImage.png"
            alt="#ImgNotFound"
            className="w-100 img-fluid"
          />
        </div>

        <div className="row mt-5 d-flex align-items-stretch">
          <div className="col-lg-3 col-sm-6 mt-3 d-flex flex-column">
            <h5>Launch Your Site with a Click</h5>
            <p>
              Create your perfect website effortlessly with sleeknode Site
              Builder or install WordPress for advanced functionality.
            </p>
            <h6
              className="text-primary"
              style={{ marginTop: 'auto', cursor: 'pointer' }}
              onClick={handleShow1}
            >
              LEARN MORE →
            </h6>
          </div>
          <div className="col-lg-3 col-sm-6 mt-3 d-flex flex-column">
            <h5>Get a Reliable Email Service</h5>
            <p>
              Build credibility with unlimited email accounts at your own
              domain, including free spam protection and webmail.
            </p>
            <h6
              className="text-primary"
              style={{ marginTop: 'auto', cursor: 'pointer' }}
              onClick={handleShow2}
            >
              LEARN MORE →
            </h6>
          </div>
          <div className="col-lg-3 col-sm-6 mt-3 d-flex flex-column">
            <h5>Transfer Sites & Emails Automatically</h5>
            <p>
              Use our free automatic WordPress and email migration tools or get
              a professional website transfer by our experts.
            </p>
            <h6
              className="text-primary"
              style={{ marginTop: 'auto', cursor: 'pointer' }}
              onClick={handleShow3}
            >
              LEARN MORE →
            </h6>
          </div>
          <div className="col-lg-3 col-sm-6 mt-3 d-flex flex-column">
            <h5>Start Selling Online Easily</h5>
            <p>
              Start your online shop with a free installation of the shopping
              cart of your choice and enjoy free features such as SSL, daily
              backups and more.
            </p>
            <h6
              className="text-primary"
              style={{ marginTop: 'auto', cursor: 'pointer' }}
              onClick={handleShow4}
            >
              LEARN MORE →
            </h6>
          </div>
        </div>
      </div>

      <Modal show={show1} onHide={handleClose1} centered size="lg">
        <Modal.Body className="p-4">
          <div className="text-end">
            <i
              className="fa fa-times fs-5"
              onClick={handleClose1}
              style={{ cursor: 'pointer' }}
            ></i>
          </div>
          <svg
            width={'96px'}
            id="uuid-91d3a946-09ba-4fcf-9bfe-88035e9ca34a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96 96"
          >
            <rect
              id="uuid-334b0f21-0ebe-49d0-93fb-1e5d2c8d031f"
              x="0"
              width="96"
              height="96"
              fill="none"
              stroke-width="0"
            ></rect>
            <path
              d="M11.251,72.935c.149.255-.034.576-.33.576l-4.431.006-4.442.006c-.293,0-.478-.316-.334-.571l2.178-3.872h0l2.173-3.861c.145-.258.515-.261.664-.006l2.261,3.861s2.261,3.861,2.261,3.861ZM94.983,37.604v52.858c0,1.082-.877,1.959-1.959,1.959H19.034c-1.082,0-1.959-.877-1.959-1.959v-10.568c.611.419,1.348.667,2.145.667,2.096,0,3.796-1.699,3.796-3.796s-1.699-3.796-3.796-3.796c-.797,0-1.534.248-2.145.667v-4.049h-3.058v-9.468h3.058v-1.911l-14.198-5.927c-3.324-1.388-3.899-5.853-1.036-8.038l26.017-19.85L53.875,4.544c2.864-2.185,7.019-.451,7.479,3.122l3.605,27.979h28.065c1.082,0,1.959.877,1.959,1.959ZM29.495,69.046h10.244v-13.831h-10.244s0,13.831,0,13.831ZM43.697,72.969h-15.602v10.928h15.602v-10.928ZM63.75,73.645h-13.831v13.831h13.831v-13.831ZM65.744,56.467h-21.506v12.579h21.506s0-12.579,0-12.579Z"
              fill="#e4effb"
              stroke-width="0"
            ></path>
            <path
              d="M24.43,43c0-1.16.95-2.1,2.11-2.1s2.1.94,2.1,2.1c0,1.17-.94,2.11-2.1,2.11s-2.11-.94-2.11-2.11ZM12.11,72.43c.25.42.26.96.01,1.38-.25.43-.7.7-1.2.7l-8.87.01h-.01c-.48,0-.94-.26-1.19-.68-.24-.42-.25-.95-.01-1.38l4.35-7.73c.25-.43.7-.7,1.2-.71.52.03.95.26,1.2.69l4.52,7.72ZM9.84,72.51l-3.43-5.87-3.31,5.88,6.74-.01ZM39.15,45.11c1.17,0,2.11-.94,2.11-2.11,0-1.16-.94-2.1-2.11-2.1-1.16,0-2.1.94-2.1,2.1,0,1.17.94,2.11,2.1,2.11ZM22.22,65.85c.56,0,1-.44,1-1,0-.55-.44-1-1-1h-4.66c-.55,0-1,.45-1,1,0,.56.45,1,1,1h4.66ZM32.85,45.11c1.16,0,2.1-.94,2.1-2.11,0-1.16-.94-2.1-2.1-2.1s-2.11.94-2.11,2.1c0,1.17.94,2.11,2.11,2.11ZM48.64,65.99c.25,0,.5-.09.69-.28l3.16-3.05,2.79,2.83c.38.39,1,.4,1.39.04l2.01-1.87,1.98,1.86c.4.38,1.04.36,1.41-.04.38-.41.36-1.04-.04-1.42l-2.66-2.5c-.38-.36-.98-.36-1.36,0l-1.98,1.84-2.81-2.85c-.39-.4-1.02-.4-1.41-.02l-3.87,3.74c-.4.38-.41,1.02-.02,1.41.19.21.46.31.72.31ZM66.74,56.47v12.58c0,.55-.44,1-1,1h-21.5c-.55,0-1-.45-1-1v-12.58c0-.55.45-1,1-1h21.5c.56,0,1,.45,1,1ZM64.74,57.47h-19.5v10.58h19.5v-10.58ZM28.5,69.05v-13.84c0-.55.44-1,1-1h10.24c.55,0,1,.45,1,1v13.84c0,.55-.45,1-1,1h-10.24c-.56,0-1-.45-1-1ZM30.5,68.05h8.24v-11.84h-8.24v11.84ZM64.75,73.64v13.84c0,.55-.45,1-1,1h-13.83c-.55,0-1-.45-1-1v-13.84c0-.55.45-1,1-1h13.83c.55,0,1,.45,1,1ZM62.75,74.64h-11.83v11.84h11.83v-11.84ZM34.53,81.07c.15.08.32.12.48.12.19,0,.38-.06.55-.16l2.69-1.76c.28-.18.45-.5.45-.84s-.17-.65-.45-.84l-2.7-1.75c-.3-.2-.7-.22-1.02-.04-.32.17-.52.51-.52.88v3.51c0,.36.2.7.52.88ZM44.7,72.97v10.93c0,.55-.45,1-1,1h-15.6c-.56,0-1-.45-1-1v-10.93c0-.55.44-1,1-1h15.6c.55,0,1,.45,1,1ZM42.7,73.97h-13.6v8.93h13.6v-8.93ZM95.98,35.64v56.78c0,.55-.44,1-1,1H17.08c-.56,0-1-.45-1-1v-12.04c-1.02-.88-1.66-2.17-1.66-3.62,0-1.44.64-2.74,1.66-3.61v-2.56h-2.06c-.56,0-1-.45-1-1v-9.47c0-.55.44-1,1-1h2.06v-23.48c0-.55.44-1,1-1h77.9c.56,0,1,.45,1,1ZM18.08,36.64v12.72h75.9v-12.72H18.08ZM16.08,68.59h8.7v-7.47h-9.76v7.47h1.06ZM16.42,76.76c0,1.14.68,2.12,1.66,2.56.35.15.73.24,1.14.24,1.54,0,2.8-1.25,2.8-2.8,0-1.54-1.26-2.79-2.8-2.79-.41,0-.79.09-1.14.25-.98.43-1.66,1.41-1.66,2.54ZM93.98,91.42v-40.06H18.08v7.76h7.7c.56,0,1,.45,1,1v9.47c0,.55-.45,1-1,1h-7.7v1.53c.36-.1.73-.15,1.11-.15,2.34-.02,4.43,1.74,4.77,4.06.45,2.96-1.86,5.53-4.74,5.53-.39,0-.77-.05-1.14-.15v10.01h75.9Z"
              fill="#807e7e"
              stroke-width="0"
            ></path>
          </svg>
          <h5 className="mt-3 fw-semibold">Launch Your Site with a Click</h5>
          <p style={{ fontSize: '14px' }}>
            Not sure how to start building your site? We have made it simple for
            you - you can build a site effortlessly with the sleeknode Site
            Builder or install WordPress for more advanced functionality.
          </p>
          <p className="fw-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width={'14px'}
              className="me-2"
            >
              <path d="M15.249,1.438a2,2,0,0,0-2.811.312l-6.6,8.256-2.42-2.42A2,2,0,0,0,.586,10.414l4,4c.026.026.057.045.084.069s.051.055.08.079.034.015.049.026a1.945,1.945,0,0,0,.519.286c.03.011.06.018.091.028A2.04,2.04,0,0,0,6,15H6a2.037,2.037,0,0,0,.411-.045c.042-.009.081-.025.123-.037a1.88,1.88,0,0,0,.271-.092c.049-.022.1-.05.143-.075a1.883,1.883,0,0,0,.221-.137,1.622,1.622,0,0,0,.138-.113c.035-.03.074-.054.107-.087s.052-.067.081-.1.046-.041.066-.066l8-10A2,2,0,0,0,15.249,1.438Z"></path>
            </svg>
            sleeknode Site Builder
          </p>
          <p style={{ fontSize: '14px', marginTop: '-10px' }}>
            sleeknode Site Builder is designed to make website creation simple
            and stress-free, perfect for beginners and first-time users. With
            its easy page editor, a wide variety of professional templates,
            built-in SEO tools, and an AI-powered content writer, it has
            everything you need to build a stunning, fully functional site!
          </p>
          <p className="fw-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width={'14px'}
              className="me-2"
            >
              <path d="M15.249,1.438a2,2,0,0,0-2.811.312l-6.6,8.256-2.42-2.42A2,2,0,0,0,.586,10.414l4,4c.026.026.057.045.084.069s.051.055.08.079.034.015.049.026a1.945,1.945,0,0,0,.519.286c.03.011.06.018.091.028A2.04,2.04,0,0,0,6,15H6a2.037,2.037,0,0,0,.411-.045c.042-.009.081-.025.123-.037a1.88,1.88,0,0,0,.271-.092c.049-.022.1-.05.143-.075a1.883,1.883,0,0,0,.221-.137,1.622,1.622,0,0,0,.138-.113c.035-.03.074-.054.107-.087s.052-.067.081-.1.046-.041.066-.066l8-10A2,2,0,0,0,15.249,1.438Z"></path>
            </svg>
            WordPress
          </p>
          <p style={{ fontSize: '14px', marginTop: '-10px' }}>
            WordPress is one of the most popular Content Management Systems
            (CMS). It’s recommended for sites that aim to grow in functionality
            over time as it has thousands of free and premium themes and plugins
            available.
          </p>
        </Modal.Body>
      </Modal>

      <Modal show={show2} onHide={handleClose2} centered size="lg">
        <Modal.Body className="p-4">
          <div className="text-end">
            <i
              className="fa fa-times fs-5"
              onClick={handleClose2}
              style={{ cursor: 'pointer' }}
            ></i>
          </div>
          <svg
            width={'96px'}
            id="uuid-f5d59cc6-477b-4367-932f-ecafb9cc0a5e"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96 96"
          >
            <rect
              id="uuid-18ea60b7-8a8d-4fc5-be9f-e07537bf8ad1"
              width="96"
              height="96"
              fill="none"
              stroke-width="0"
            ></rect>
            <path
              d="M84.531,1.273H24.987c-5.053,0-9.15,4.097-9.15,9.15v21.168h48.034v2.197l-.125,17.908-12.442,10.181,1.43-12.347-16.549-5.157-17.325,5.205,1.817,11.992-12.18-10.088v-10.046l-6.273,5.098v47.791h67.92v-15.208h14.387c5.053,0,9.15-4.097,9.15-9.15V10.423c0-5.053-4.097-9.15-9.15-9.15Z"
              fill="#def7ea"
              stroke-width="0"
            ></path>
            <path
              d="M71.13,46.37c-.01-.04-.02-.08-.03-.12-.01-.04-.03-.08-.05-.13-.01-.02-.02-.05-.04-.08-.06-.1-.14-.2-.23-.28l-5.91-4.8v-9.37c0-.55-.45-1-1-1h-11.76l-13.67-11.11c-1.31-1.06-3.2-1.06-4.51,0l-13.67,11.11h-11.76c-.56,0-1,.45-1,1v9.37l-5.83,4.74c-.16.11-.28.25-.36.42-.03.06-.05.13-.06.19-.02.07-.03.15-.03.22v47.8c0,.05,0,.11.02.17,0,.04.02.09.04.14v.02c.02.05.04.11.07.15.02.05.05.09.08.12.03.04.06.08.1.12.14.13.31.22.5.26.06.01.12.02.19.02h67.92c.07,0,.14-.01.2-.02.26-.05.49-.21.64-.43.03-.05.06-.11.08-.16.01-.02.02-.04.03-.06.02-.04.03-.09.03-.13.01-.06.02-.13.02-.2v-47.8c0-.05,0-.11-.01-.16h0ZM68.56,46.53l-3.69,3v-5.99s3.69,2.99,3.69,2.99ZM35.19,21.03c.58-.47,1.41-.47,1.99,0l11.76,9.56h-25.51s11.76-9.56,11.76-9.56ZM9.5,32.59h53.37v18.56l-10.28,8.35,1.25-10c.01-.04,0-.08,0-.12.002-.047-.012-.094-.018-.141-.005-.036-.005-.071-.013-.106-.027-.109-.071-.216-.14-.316-.004-.007-.005-.014-.009-.021-.007-.009-.017-.014-.024-.023-.065-.083-.14-.15-.222-.208-.026-.019-.051-.038-.078-.054-.015-.009-.029-.022-.045-.031-.05-.02-.1-.04-.15-.06l-16.66-5.13c-.06-.02-.11-.04-.17-.05-.02,0-.05,0-.07-.01-.023-.005-.051.003-.076,0-.026-.002-.048-.015-.075-.015s-.049.013-.075.015c-.025.003-.049-.005-.074,0-.02.01-.04.01-.07.01-.06.01-.11.03-.17.05l-17.114,5.103c-.017.003-.033.011-.05.015l-.006.002-.05.01c-.05.02-.11.03-.15.06-.01,0-.02.01-.03.02-.006.003-.012.009-.018.012-.038.021-.074.044-.109.071-.014.01-.03.015-.042.027-.02.01-.04.03-.06.05-.031.031-.067.078-.101.124-.01.013-.025.02-.034.034-.021.032-.025.069-.042.102-.036.07-.07.141-.088.214-.013.051-.016.101-.021.153-.003.035-.014.068-.014.103,0,.04,0,.1.01.14l.005.03s0,.008.002.013l1.453,9.487-9.74-7.9v-18.57h-.002ZM37.09,82.31v-10.85c.32-.03.64-.09.95-.16.55-.11,1.08-.28,1.59-.48.68-.27,1.33-.61,1.92-1.02,1.27-.84,2.34-1.97,3.12-3.28l4.18,2.67s-11.76,13.12-11.76,13.12ZM23.32,69.2l3.86-2.46c.85,1.34,2,2.47,3.35,3.29.63.39,1.3.71,2.01.96.63.21,1.28.37,1.96.46.19.03.39.05.59.06v10.8l-11.77-13.11ZM3.22,92.23v-43.6l16.47,13.37,1.1,7.13c.02.13.07.27.15.39.05.08.11.15.18.22l4.12,4.59L3.22,92.23ZM37.09,45.57l13.52,4.16h.004l-6.955,4.939c-1.61-1.919-3.939-3.239-6.569-3.549h0v-5.55s0,0,0,0ZM36.48,69.52h-.01c-.286,0-.544.02-.81.02-.41-.01-.81-.05-1.2-.12-.8-.13-1.56-.39-2.27-.74-1.48-.74-2.71-1.91-3.51-3.35-.18-.3-.33-.62-.47-.95-.39-.96-.6-2-.6-3.09,0-1.83.61-3.53,1.61-4.9,1.51-2.03,3.93-3.35,6.64-3.35,4.55,0,8.25,3.7,8.25,8.25,0,3.08-1.69,5.76-4.19,7.18-.66.38-1.38.66-2.14.84-.42.11-.85.17-1.3.21ZM35.089,51.07c-2.74.2-5.179,1.49-6.889,3.43,0,0,0,.002-.002.002l-7.122-4.781h.014s13.999-4.171,13.999-4.171c0,0,0,5.52,0,5.52ZM27.02,56.12c-.9,1.51-1.41,3.28-1.41,5.17,0,1.2.21,2.35.58,3.41.03.08.06.16.09.23l-3.74,2.39-2.43-15.838s6.91,4.638,6.91,4.638ZM49.59,67.29l-4.06-2.59c.37-1.06.58-2.21.58-3.41,0-1.809-.469-3.517-1.298-4.987l6.758-4.797-1.979,15.784h0ZM7.5,43.53v6l-3.7-3,3.7-3ZM5.04,93.33l21.54-17.51,8.76,9.76c.05.05.1.1.16.14.03.02.06.04.09.06.04.03.07.04.11.06.06.03.12.05.19.06.06.01.13.02.2.02.14,0,.28-.03.4-.09.07-.03.13-.07.19-.11.05-.04.1-.09.15-.14l.09-.1,8.75-9.75,21.66,17.6s-62.29,0-62.29,0ZM47.01,74.24l4.05-4.52c.06-.05.11-.11.15-.17.01-.01.01-.02.02-.03.11-.16.16-.35.16-.53l.84-6.63,10.64-8.64,2-1.62,4.27-3.47v43.59s-22.13-17.98-22.13-17.98ZM40.366,59.395l-4.914,5.461c-.188.209-.456.329-.737.331h-.006c-.279,0-.546-.117-.735-.322l-2.67-2.897c-.374-.406-.349-1.039.058-1.413.407-.373,1.039-.348,1.413.058l1.926,2.09,4.18-4.645c.37-.411,1.001-.443,1.412-.074.41.369.443,1.002.074,1.412h0Z"
              fill="#807e7e"
              stroke-width="0"
            ></path>
          </svg>
          <h5 className="mt-3 fw-semibold">Get a Reliable Email Service</h5>
          <p className="fw-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width={'14px'}
              className="me-2"
            >
              <path d="M15.249,1.438a2,2,0,0,0-2.811.312l-6.6,8.256-2.42-2.42A2,2,0,0,0,.586,10.414l4,4c.026.026.057.045.084.069s.051.055.08.079.034.015.049.026a1.945,1.945,0,0,0,.519.286c.03.011.06.018.091.028A2.04,2.04,0,0,0,6,15H6a2.037,2.037,0,0,0,.411-.045c.042-.009.081-.025.123-.037a1.88,1.88,0,0,0,.271-.092c.049-.022.1-.05.143-.075a1.883,1.883,0,0,0,.221-.137,1.622,1.622,0,0,0,.138-.113c.035-.03.074-.054.107-.087s.052-.067.081-.1.046-.041.066-.066l8-10A2,2,0,0,0,15.249,1.438Z"></path>
            </svg>
            Create unlimited email accounts
          </p>
          <p style={{ fontSize: '14px', marginTop: '-10px' }}>
            Create professional email addresses with your website domain at no
            extra cost. You can create as many accounts as you need and easily
            give access to individual accounts to your employees, team or else.
          </p>
          <p className="fw-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width={'14px'}
              className="me-2"
            >
              <path d="M15.249,1.438a2,2,0,0,0-2.811.312l-6.6,8.256-2.42-2.42A2,2,0,0,0,.586,10.414l4,4c.026.026.057.045.084.069s.051.055.08.079.034.015.049.026a1.945,1.945,0,0,0,.519.286c.03.011.06.018.091.028A2.04,2.04,0,0,0,6,15H6a2.037,2.037,0,0,0,.411-.045c.042-.009.081-.025.123-.037a1.88,1.88,0,0,0,.271-.092c.049-.022.1-.05.143-.075a1.883,1.883,0,0,0,.221-.137,1.622,1.622,0,0,0,.138-.113c.035-.03.074-.054.107-.087s.052-.067.081-.1.046-.041.066-.066l8-10A2,2,0,0,0,15.249,1.438Z"></path>
            </svg>
            Create forwarders and autoresponders
          </p>
          <p style={{ fontSize: '14px', marginTop: '-10px' }}>
            When using your email for business, it’s essential to have the
            options to set autoresponders and forwarders. You can do that from
            Site Tools Email section and from the webmail app.
          </p>
          <p className="fw-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width={'14px'}
              className="me-2"
            >
              <path d="M15.249,1.438a2,2,0,0,0-2.811.312l-6.6,8.256-2.42-2.42A2,2,0,0,0,.586,10.414l4,4c.026.026.057.045.084.069s.051.055.08.079.034.015.049.026a1.945,1.945,0,0,0,.519.286c.03.011.06.018.091.028A2.04,2.04,0,0,0,6,15H6a2.037,2.037,0,0,0,.411-.045c.042-.009.081-.025.123-.037a1.88,1.88,0,0,0,.271-.092c.049-.022.1-.05.143-.075a1.883,1.883,0,0,0,.221-.137,1.622,1.622,0,0,0,.138-.113c.035-.03.074-.054.107-.087s.052-.067.081-.1.046-.041.066-.066l8-10A2,2,0,0,0,15.249,1.438Z"></path>
            </svg>
            SMTP, POP3 and IMAP protocols supported
          </p>
          <p style={{ fontSize: '14px', marginTop: '-10px' }}>
            Our email service allows you to send and receive messages in email
            accounts created at your own domain thanks to the SMTP, POP3 and
            IMAP protocols which we support on our platform.
          </p>
          <p className="fw-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width={'14px'}
              className="me-2"
            >
              <path d="M15.249,1.438a2,2,0,0,0-2.811.312l-6.6,8.256-2.42-2.42A2,2,0,0,0,.586,10.414l4,4c.026.026.057.045.084.069s.051.055.08.079.034.015.049.026a1.945,1.945,0,0,0,.519.286c.03.011.06.018.091.028A2.04,2.04,0,0,0,6,15H6a2.037,2.037,0,0,0,.411-.045c.042-.009.081-.025.123-.037a1.88,1.88,0,0,0,.271-.092c.049-.022.1-.05.143-.075a1.883,1.883,0,0,0,.221-.137,1.622,1.622,0,0,0,.138-.113c.035-.03.074-.054.107-.087s.052-.067.081-.1.046-.041.066-.066l8-10A2,2,0,0,0,15.249,1.438Z"></path>
            </svg>
            Built-in Spam Protection
          </p>
          <p style={{ fontSize: '14px', marginTop: '-10px' }}>
            Our in-house Spam Protect system intelligently recognizes and
            filters unsolicited emails. It delivers legitimate messages straight
            to your inbox, identifies suspicious ones as spam and delivers them
            to your Spam folder, while stopping outright dangerous emails from
            even reaching your mailbox, keeping it safer and tidier. On average,
            it blocks 12,000,000 malicious emails per day, and marks another
            600,000 as spam daily.
          </p>
        </Modal.Body>
      </Modal>

      <Modal show={show3} onHide={handleClose3} centered size="lg">
        <Modal.Body className="p-4">
          <div className="text-end">
            <i
              className="fa fa-times fs-5"
              onClick={handleClose3}
              style={{ cursor: 'pointer' }}
            ></i>
          </div>
          <svg
            id="uuid-4a3d0f5d-5396-429d-b32d-b7fdebefa76c"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96 96"
            width={'96px'}
          >
            <rect
              id="uuid-35be2e77-6508-4b97-a827-986bea9df646"
              width="96"
              height="96"
              fill="none"
              stroke-width="0"
            ></rect>
            <path
              d="M15.512,47.006h.177l-.079.118c-.031-.041-.063-.081-.098-.118ZM93.595,63.515v10.112h-5.945c0-.008,0-.016,0-.024-.014-3.829-3.129-6.922-6.958-6.909-3.829.014-6.922,3.129-6.909,6.958.005,1.335.393,2.576,1.051,3.631l-29.227,17.033c-1.06.619-2.371.619-3.43,0L5.013,72.657c-1.064-.624-1.717-1.766-1.714-2.998v-27.22c.514,1.53,1.739,4.573,3.351,4.567l.84.117s.665,2.161,1.003,2.476c.714,1.307,1.835,2.68,3.453,2.872h.148c.21.446,2.573,5.341,5.403,5.38h16.271c.415,0,2.814-.053,2.729-2.235-.042-1.084-.542-1.878-1.584-2.04-1.814-.283-3.328-1.831-3.334-3.667l-.006-1.787c-.012-3.31-3.534-6.552-6.844-6.54H3.299v-15.241c-.003-1.232.65-2.374,1.714-2.998L42.178,1.684c1.06-.619,2.371-.619,3.43,0l37.165,21.659c1.065.624,1.718,1.766,1.715,2.998v23.722l2.173,6.519,6.933,6.933h.001ZM41.073,73.603c-.013-3.829-3.128-6.923-6.958-6.909-3.829.013-6.923,3.128-6.909,6.958.013,3.829,3.128,6.923,6.958,6.909,3.829-.013,6.923-3.128,6.909-6.958Z"
              fill="#f4ebfc"
              stroke-width="0"
            ></path>
            <path
              d="M24.841,36.142c0-.881.714-1.595,1.595-1.595s1.595.714,1.595,1.595-.714,1.595-1.595,1.595-1.595-.714-1.595-1.595ZM31.222,37.737c.881,0,1.595-.714,1.595-1.595s-.714-1.595-1.595-1.595-1.595.714-1.595,1.595.714,1.595,1.595,1.595ZM36.007,37.737c.881,0,1.595-.714,1.595-1.595s-.714-1.595-1.595-1.595-1.595.714-1.595,1.595.714,1.595,1.595,1.595ZM94.44,62.951l-6.9-6.911-4.88-14.63c-.14-.41-.52-.69-.95-.69h-13.26v-9.16c0-1.105-.895-2-2-2H20.26c-1.105,0-2,.895-2,2v9.02H3.03c-.31,0-.6.15-.79.39-.19.25-.25.57-.17.87.39,1.45,1.87,6.16,4.57,6.16h.07c.48,1.43,1.9,4.79,4.72,5.4.79,1.53,3.08,5.41,6.07,5.45h.76v13.77c0,1.105.904,2.01,2.01,2.01h6.01c.21,1.75,1,3.36,2.27,4.63,1.5,1.48,3.48,2.3,5.59,2.3h.03c4.02-.02,7.35-3.04,7.84-6.93h30.85c.21,1.75,1,3.36,2.27,4.63,1.49,1.48,3.48,2.3,5.59,2.3h.03c4.02-.02,7.35-3.04,7.84-6.93h5.48c.287,0,.52-.233.52-.52v-10.798c0-.136-.054-.266-.15-.362ZM17.51,56.85c-1.37-.02-2.82-1.88-3.74-3.38h6.2c.1,0,.2-.02.29-.05.41-.12.71-.5.71-.95s-.3-.83-.71-.95c-.09-.03-.19-.05-.29-.05,0,0-7.918.016-8.09-.02-1.46-.31-2.49-2.09-3.04-3.45h6.85c.55,0,1-.44,1-1,0-.55-.45-1-1-1H6.64c-.64,0-1.58-1.62-2.24-3.42h14.34c6.101,0,5.83-.053,7.12.15,1.006.158,2,.8,2.84,1.6,1.18,1.12,1.87,2.5,1.87,3.79l.01,1.79c0,2.28,1.8,4.28,4.18,4.65.21.04.7.11.74,1.09.01.44-.12.64-.22.75-.32.33-.99.45-1.51.45h-16.26ZM39.98,74.63c-.47,2.79-2.9,4.92-5.82,4.93h-.105c-.673,0-1.351-.097-1.976-.346-2.09-.831-3.458-2.585-3.789-4.584-.05-.32-.08-.65-.08-.98,0-.35.02-.69.09-1.02.306-1.933,1.572-3.606,3.589-4.519.666-.301,1.401-.421,2.132-.421h.119c1.63,0,3.11.66,4.18,1.73.86.86,1.45,1.97,1.66,3.21.06.32.09.65.09.98,0,.35-.03.69-.09,1.02ZM66.45,72.62c0,.005-.004.01-.01.01h-24.43c-.49-3.91-3.84-6.94-7.87-6.94h-.03c-4.03.02-7.36,3.05-7.84,6.94h-6.01v-13.78h13.51c.72,0,2.06-.14,2.95-1.07.54-.57.81-1.33.78-2.2-.07-1.65-.98-2.77-2.43-2.99-1.4-.22-2.49-1.4-2.49-2.69l-.01-1.78c0-1.84-.91-3.75-2.5-5.24-.05-.05-.11-.1-.17-.15h36.55v29.89ZM66.45,40.72l-40.31.01c-.47-.1-.93-.15-1.39-.15h-4.49v-9.02h46.19v9.16ZM86.56,74.63c-.47,2.79-2.9,4.92-5.82,4.93h-.105c-.673,0-1.351-.097-1.976-.346-2.09-.831-3.458-2.585-3.789-4.584-.05-.32-.08-.65-.08-.98,0-.35.02-.69.09-1.02.19-1.2.75-2.3,1.63-3.18,1.11-1.13,2.6-1.75,4.19-1.76h.02c2.93,0,5.37,2.13,5.84,4.94.06.32.09.65.09.98,0,.35-.03.69-.09,1.02ZM92.59,72.63h-4c-.49-3.91-3.84-6.94-7.87-6.94h-.03c-4.029.02-7.358,3.048-7.839,6.937h-4.45c.03-.159.05-.318.05-.487v-29.42h12.54l4.281,12.862h-12.477c-.553,0-1,.447-1,1s.447,1,1,1h13.448l6.348,6.348v8.7s0,0-.001,0ZM14.236,69.848H1.66c-.553,0-1,.447-1,1s.447,1,1,1h12.576c.553,0,1-.447,1-1s-.447-1-1-1ZM14.236,62.598h-7.694c-.553,0-1,.447-1,1s.447,1,1,1h7.694c.553,0,1-.447,1-1s-.447-1-1-1Z"
              fill="#807e7e"
              stroke-width="0"
            ></path>
          </svg>
          <h5 className="mt-3 fw-semibold">Auto-Transfer Sites and Emails</h5>
          <p className="fw-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width={'14px'}
              className="me-2"
            >
              <path d="M15.249,1.438a2,2,0,0,0-2.811.312l-6.6,8.256-2.42-2.42A2,2,0,0,0,.586,10.414l4,4c.026.026.057.045.084.069s.051.055.08.079.034.015.049.026a1.945,1.945,0,0,0,.519.286c.03.011.06.018.091.028A2.04,2.04,0,0,0,6,15H6a2.037,2.037,0,0,0,.411-.045c.042-.009.081-.025.123-.037a1.88,1.88,0,0,0,.271-.092c.049-.022.1-.05.143-.075a1.883,1.883,0,0,0,.221-.137,1.622,1.622,0,0,0,.138-.113c.035-.03.074-.054.107-.087s.052-.067.081-.1.046-.041.066-.066l8-10A2,2,0,0,0,15.249,1.438Z"></path>
            </svg>
            Free Website Migrator
          </p>
          <p style={{ fontSize: '14px', marginTop: '-10px' }}>
            For clients migrating WordPress sites, we have made it easy to do it
            yourself. You just need to install our Migrator plugin on the site
            you want to migrate, get a token from your sleeknode Site Tools and
            put it in the plugin. The Migrator will securely move all of your
            content while keeping your configuration intact. The best thing is
            that it’s completely free and you can use it for as many migrations
            as you wish.
          </p>
          <p className="fw-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width={'14px'}
              className="me-2"
            >
              <path d="M15.249,1.438a2,2,0,0,0-2.811.312l-6.6,8.256-2.42-2.42A2,2,0,0,0,.586,10.414l4,4c.026.026.057.045.084.069s.051.055.08.079.034.015.049.026a1.945,1.945,0,0,0,.519.286c.03.011.06.018.091.028A2.04,2.04,0,0,0,6,15H6a2.037,2.037,0,0,0,.411-.045c.042-.009.081-.025.123-.037a1.88,1.88,0,0,0,.271-.092c.049-.022.1-.05.143-.075a1.883,1.883,0,0,0,.221-.137,1.622,1.622,0,0,0,.138-.113c.035-.03.074-.054.107-.087s.052-.067.081-.1.046-.041.066-.066l8-10A2,2,0,0,0,15.249,1.438Z"></path>
            </svg>
            Free Email Migrator
          </p>
          <p style={{ fontSize: '14px', marginTop: '-10px' }}>
            You may easily migrate your mailboxes through Site Tools using our
            completely free Email Migrator. You just need to provide your
            current mailbox details and the transfer will be initiated. The
            Email Migrator will promptly and securely copy all of your email
            messages while keeping your mailbox structure intact.
          </p>
          <p className="fw-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width={'14px'}
              className="me-2"
            >
              <path d="M15.249,1.438a2,2,0,0,0-2.811.312l-6.6,8.256-2.42-2.42A2,2,0,0,0,.586,10.414l4,4c.026.026.057.045.084.069s.051.055.08.079.034.015.049.026a1.945,1.945,0,0,0,.519.286c.03.011.06.018.091.028A2.04,2.04,0,0,0,6,15H6a2.037,2.037,0,0,0,.411-.045c.042-.009.081-.025.123-.037a1.88,1.88,0,0,0,.271-.092c.049-.022.1-.05.143-.075a1.883,1.883,0,0,0,.221-.137,1.622,1.622,0,0,0,.138-.113c.035-.03.074-.054.107-.087s.052-.067.081-.1.046-.041.066-.066l8-10A2,2,0,0,0,15.249,1.438Z"></path>
            </svg>
            Professional Website Migration
          </p>
          <p style={{ fontSize: '14px', marginTop: '-10px' }}>
            We offer professional website migration service for as low as $30.00
            excl. VAT per site. Our experts will do all the work for you,
            transferring your files and databases. We migrate more than 50,000
            sites per year and know the ins and outs of how to make the process
            smooth and risk-free for you!
          </p>
        </Modal.Body>
      </Modal>

      <Modal show={show4} onHide={handleClose4} centered size="lg">
        <Modal.Body className="p-4">
          <div className="text-end">
            <i
              className="fa fa-times fs-5"
              onClick={handleClose4}
              style={{ cursor: 'pointer' }}
            ></i>
          </div>
          <svg
            width={'96px'}
            id="a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 93.38 90.72"
          >
            <path
              d="M37.58,0c20.76,0,37.58,17.55,37.58,39.19s-16.83,39.19-37.58,39.19S0,60.83,0,39.19,16.83,0,37.58,0Z"
              fill="#fbf8d5"
            ></path>
            <path
              d="M78.26,18.05H23.05l-14.13,25.38v4.32l6.12,6.12h4.32v35.85h22.24v.63h18.11v-.62h22.24l-.01-35.86h4.34l6.11-6.11v-4.32l-14.13-25.38v-.01Z"
              fill="#fbf8d5"
            ></path>
            <path
              d="M81.95,54.23v35.49H19.36v-35.49"
              fill="none"
              stroke="#807e7e"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <path
              d="M29.479,89.72v-30.29h42.36v30.29"
              fill="none"
              stroke="#807e7e"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <path
              d="M71.52,47.75l6.11,6.11h8.64l6.11-6.11v-4.32l-14.13-25.38H23.05l-14.13,25.38v4.32l6.12,6.11h8.64l6.11-6.11,6.11,6.11h8.65l6.11-6.11"
              fill="none"
              stroke="#807e7e"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <path
              d="M29.79,47.75v-4.3l5.92-25.4"
              fill="none"
              stroke="#807e7e"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <path
              d="M50.66,18.05v29.7l6.11,6.11h8.64l6.12-6.11v-4.3l-5.93-25.4"
              fill="none"
              stroke="#807e7e"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <path
              d="M8.92,43.43h83.46"
              fill="none"
              stroke="#807e7e"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <path
              d="M35.1,79.34l-2.35-7.71h1.24l1.67,5.9h.08l1.65-5.9h1.26l1.63,5.88h.08l1.67-5.88h1.24l-2.35,7.71h-1.16l-1.69-5.92h-.12l-1.69,5.92h-1.16ZM46.58,79.34l-2.35-7.71h1.24l1.67,5.9h.08l1.65-5.9h1.26l1.63,5.88h.08l1.67-5.88h1.24l-2.35,7.71h-1.16l-1.69-5.92h-.12l-1.69,5.92h-1.16ZM58.06,79.34l-2.35-7.71h1.24l1.67,5.9h.08l1.65-5.9h1.26l1.63,5.88h.08l1.67-5.88h1.24l-2.35,7.71h-1.16l-1.69-5.92h-.12l-1.69,5.92h-1.16ZM67.61,79.42c-.25,0-.46-.09-.64-.27s-.27-.39-.27-.64.09-.46.27-.64.39-.27.64-.27.46.09.64.27.27.39.27.64c0,.16-.04.31-.13.45-.08.14-.19.25-.33.33-.13.08-.28.12-.45.12v.01Z"
              fill="#807e7e"
            ></path>
          </svg>
          <h5 className="mt-3 fw-semibold">Start Selling Online Easily</h5>
          <p className="fw-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width={'14px'}
              className="me-2"
            >
              <path d="M15.249,1.438a2,2,0,0,0-2.811.312l-6.6,8.256-2.42-2.42A2,2,0,0,0,.586,10.414l4,4c.026.026.057.045.084.069s.051.055.08.079.034.015.049.026a1.945,1.945,0,0,0,.519.286c.03.011.06.018.091.028A2.04,2.04,0,0,0,6,15H6a2.037,2.037,0,0,0,.411-.045c.042-.009.081-.025.123-.037a1.88,1.88,0,0,0,.271-.092c.049-.022.1-.05.143-.075a1.883,1.883,0,0,0,.221-.137,1.622,1.622,0,0,0,.138-.113c.035-.03.074-.054.107-.087s.052-.067.081-.1.046-.041.066-.066l8-10A2,2,0,0,0,15.249,1.438Z"></path>
            </svg>
            Free Shopping Cart Installation
          </p>
          <p style={{ fontSize: '14px', marginTop: '-10px' }}>
            With our click-and-install wizard, you can choose your preferred
            shopping cart software and have it automatically installed on your
            account. Your fully-functional online store will be ready in
            minutes!
          </p>
          <p className="fw-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width={'14px'}
              className="me-2"
            >
              <path d="M15.249,1.438a2,2,0,0,0-2.811.312l-6.6,8.256-2.42-2.42A2,2,0,0,0,.586,10.414l4,4c.026.026.057.045.084.069s.051.055.08.079.034.015.049.026a1.945,1.945,0,0,0,.519.286c.03.011.06.018.091.028A2.04,2.04,0,0,0,6,15H6a2.037,2.037,0,0,0,.411-.045c.042-.009.081-.025.123-.037a1.88,1.88,0,0,0,.271-.092c.049-.022.1-.05.143-.075a1.883,1.883,0,0,0,.221-.137,1.622,1.622,0,0,0,.138-.113c.035-.03.074-.054.107-.087s.052-.067.081-.1.046-.041.066-.066l8-10A2,2,0,0,0,15.249,1.438Z"></path>
            </svg>
            SSL Included
          </p>
          <p style={{ fontSize: '14px', marginTop: '-10px' }}>
            We issue and install a free Let’s Encrypt SSL for your online shop
            to make your clients’ transactions secure and your site trustworthy.
            SSL certificates protect the data transmitted through your site and
            make sure you meet the requirements of search engines that flag
            insecure sites.
          </p>
          <p className="fw-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width={'14px'}
              className="me-2"
            >
              <path d="M15.249,1.438a2,2,0,0,0-2.811.312l-6.6,8.256-2.42-2.42A2,2,0,0,0,.586,10.414l4,4c.026.026.057.045.084.069s.051.055.08.079.034.015.049.026a1.945,1.945,0,0,0,.519.286c.03.011.06.018.091.028A2.04,2.04,0,0,0,6,15H6a2.037,2.037,0,0,0,.411-.045c.042-.009.081-.025.123-.037a1.88,1.88,0,0,0,.271-.092c.049-.022.1-.05.143-.075a1.883,1.883,0,0,0,.221-.137,1.622,1.622,0,0,0,.138-.113c.035-.03.074-.054.107-.087s.052-.067.081-.1.046-.041.066-.066l8-10A2,2,0,0,0,15.249,1.438Z"></path>
            </svg>
            Daily Backups
          </p>
          <p style={{ fontSize: '14px', marginTop: '-10px' }}>
            Online stores get new content more frequently than other types of
            websites due to the regular influx of orders, products and clients.
            That is why having a reliable backup to restore data from is of
            utmost importance and we offer a daily backup service for free.
          </p>
        </Modal.Body>
      </Modal>
    </div>
  )
}
