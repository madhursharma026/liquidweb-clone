import styles from '../../styles/PrivacyPolicy/PrivacyPolicy.module.css'
import CommonStyle from '../../styles/commomStyle.module.css'

export default function Section2() {
  return (
    <div className={styles.contentContainer}>
      <div className={CommonStyle.ContainerWidth}>
        <p className="mt-5 fs-1">
          Liquid Web takes security and compliance seriously. Our commitment to
          these efforts ensures that anyone choosing Liquid Web can do so with
          complete confidence.
        </p>
        <p>
          Below is a list of the certifications that we’ve earned regarding data
          and data center security.
        </p>

        <h1 className={`${styles.mainHeading} mt-5 fw-bold`}>SOC 3 report</h1>
        <p>
          In addition to issuing a SOC 2 SSAE-22 report for our clients who may
          be concerned about our controls regarding their financial statement
          reporting, Liquid Web also engaged our independent CPA firm to perform
          a review in order to produce a SOC 3 report. The SOC 3 report offers a
          slightly more streamlined level of reporting. Our SOC 3 report was
          produced to address risks related to IT in critical areas, including:
        </p>
        <ul>
          <li>
            <b>Security:</b> The system is protected, both logically and
            physically, against unauthorized access
          </li>
          <li>
            <b>Availability:</b> The system is available for operation and use
            as committed or agreed to
          </li>
        </ul>

        <h1 className={`${styles.mainHeading} mt-5 fw-bold`}>
          Privacy Shield Framework
        </h1>
        <p>
          Liquid Web complies with both the EU-US Privacy Shield Framework and
          the Swiss-US Privacy Shield Framework as set forth by the US
          Department of Commerce. The collection, use, and retention of personal
          information transferred from the European Union and Switzerland to the
          United States follows those regulations. Liquid Web has certified to
          the Department of Commerce that it adheres to the Privacy Shield
          principles. To learn more about the Privacy Shield program, please
          visit our certification page.
        </p>

        <h1 className={`${styles.mainHeading} mt-5 fw-bold`}>
          HIPAA audited data centers
        </h1>
        <p>
          Liquid Web has been validated by an independent auditing firm and
          confirmed that our managed dedicated, and cloud dedicated solutions
          are compliant with HIPAA security and privacy guidelines, including
          administrative, physical, and technical safeguard measures.
        </p>
        <p>
          <u>Read the HIPAA report</u>
        </p>

        <h1 className={`${styles.mainHeading} mt-5 fw-bold`}>
          PCI Attestation of Compliance
        </h1>
        <p>
          The Attestation of Compliance Report (AOC) is a summary of the Report
          on Compliance (ROC) that is produced during onsite PCI DSS
          assessments. The AOC is effectively a summary of ROC indicating
          controls have been met to meet the requirements of PCI DSS.
        </p>
        <p>
          <u>Read the AOC report</u>
        </p>

        <h1 className={`${styles.mainHeading} mt-5 fw-bold`}>
          General Data Protection Regulation (GDPR)
        </h1>
        <p>
          The General Data Protection Regulation (GDPR EU 2016/679), which
          replaces the EU Data Protection Directive (known as Directive
          95/46/EC), is a European privacy law. The aim of GDPR is to strengthen
          data privacy and protection for individuals within the European Union
          (EU) as well as the transfer of EU personal data outside of the EU. It
          became enforceable on May 25, 2018.
        </p>
        <p>
          <b>
            Liquid Web complies with EU data protection laws regarding the
            international transfer of data.
          </b>{' '}
          Specifically, Liquid Web self-certifies under the EU-US Privacy Shield
          and the Swiss-US Privacy Shield, which address the transfer of data
          from the EU and Switzerland to the US. Liquid Web also offers the EU
          Standard Contractual Clauses to meet the data security requirements
          for its EU customers.
        </p>
        <p>
          <u>Read the GDPR report</u>
        </p>
        <p>
          Learn more by reviewing our privacy policy. Liquid Web customers can
          download a signed DPA.
        </p>
        <p>
          <u>View a list of Liquid Web sub-processors</u>
        </p>
      </div>
    </div>
  )
}
