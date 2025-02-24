import { useCallback, useState } from 'react'
import styles from '../../../styles/VpsHosting/VpsHosting.module.css'

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <div className={`container ${styles.customAccordion}`}>
      <div className="border-bottom py-4">
        <div
          className={`${styles.accordionHeader} d-flex justify-content-between align-items-center`}
          onClick={handleToggle}
          style={{ cursor: 'pointer' }}
        >
          <h4 className="m-0">{title}</h4>
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
        {isOpen && (
          <div className={`mt-3 ${styles.accordionBody}`}>
            <p className="mb-4" style={{ whiteSpace: 'pre-line' }}>
              {content}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
