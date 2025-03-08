import { useCallback, useState } from 'react'
import styles from '../../../styles/VpsHosting/VpsHosting.module.css'

export default function Accordion({ title, content, buttonText }) {
  const [isOpen, setIsOpen] = useState(false)

  // Using useCallback ensures handleToggle remains stable between renders
  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <div className={`${styles.customAccordion}`}>
      <div className="border-bottom border-1 border-black py-4">
        {/* Accordion Header */}
        <div
          className={`${styles.accordionHeader} d-flex justify-content-between align-items-center`}
          onClick={handleToggle}
          style={{ cursor: 'pointer' }}
        >
          <p className="m-0 fs-4">{title}</p>

          {/* Toggle Button */}
          <button
            type="button"
            className={`btn ${isOpen ? styles.closeBtn : styles.openBtn} ps-3`}
            onClick={(e) => {
              e.stopPropagation()
              handleToggle()
            }}
          >
            {isOpen ? '\u00D7' : '+'}
          </button>
        </div>

        {/* Accordion Body */}
        {isOpen && (
          <div className={`mt-3 ${styles.accordionBody}`}>
            <p className="mb-4" style={{ whiteSpace: 'pre-line' }}>
              {content}
            </p>
            <button className="btn btn-dark">{buttonText}</button>
          </div>
        )}
      </div>
    </div>
  )
}
