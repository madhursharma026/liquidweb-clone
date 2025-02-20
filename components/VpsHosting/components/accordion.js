import { useState } from 'react';
import styles from '../../../styles/VpsHosting/VpsHosting.module.css';

export default function Accordion({ title, content, buttonText }) {
    // Single item state (open or closed)
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        // Toggle open/close
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={`container ${styles.customAccordion}`}>
            <div className="border-bottom py-4">
                {/* Accordion Header */}
                <div
                    className={`${styles.accordionHeader} d-flex justify-content-between align-items-center`}
                    onClick={handleToggle}
                    style={{ cursor: 'pointer' }}
                >
                    <h3 className="m-0">{title}</h3>

                    {/* If item is open, show “X” - if closed, show “+” */}
                    {isOpen ? (
                        <button
                            type="button"
                            className={`btn ${styles.closeBtn}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleToggle();
                            }}
                        >
                            &times;
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={`btn ${styles.openBtn}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleToggle();
                            }}
                        >
                            +
                        </button>
                    )}
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
    );
}
