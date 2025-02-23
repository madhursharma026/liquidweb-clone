import CommonStyle from '../../styles/commomStyle.module.css'
import Styles from '../../styles/VpsHosting/VpsHosting.module.css'

export default function Section4() {
  const pricingData = [
    {
      category: 'Compute',
      rows: [
        {
          vCPU: '1',
          memory: '2 GB',
          storage: '30 GB',
          bandwidth: '1 TB',
          monthly: '$5/mo',
          hourly: '$0.0027',
          discount: '',
        },
        {
          vCPU: '2',
          memory: '4 GB',
          storage: '120 GB',
          bandwidth: '2 TB',
          monthly: '$10/mo',
          hourly: '$0.0041',
          discount: '',
        },
        {
          vCPU: '4',
          memory: '8 GB',
          storage: '240 GB',
          bandwidth: '4 TB',
          monthly: '$20/mo',
          hourly: '$0.0082',
          discount: '',
        },
        {
          vCPU: '8',
          memory: '16 GB',
          storage: '240 GB',
          bandwidth: '4 TB',
          monthly: '$30/mo',
          hourly: '$0.019',
          discount: '',
        },
        {
          vCPU: '8',
          memory: '16 GB',
          storage: '480 GB',
          bandwidth: '8 TB',
          monthly: '$40/mo',
          hourly: '$0.019',
          discount: '',
        },
        {
          vCPU: '16',
          memory: '32 GB',
          storage: '960 GB',
          bandwidth: '8 TB',
          monthly: '$80/mo',
          hourly: '$0.0328',
          discount: '',
        },
      ],
    },
    {
      category: 'Memory',
      rows: [
        {
          vCPU: '1',
          memory: '4 GB',
          storage: '120 GB',
          bandwidth: '2 TB',
          monthly: '$5/mo',
          hourly: '$0.0027',
          discount: '',
        },
        {
          vCPU: '2',
          memory: '8 GB',
          storage: '240 GB',
          bandwidth: '4 TB',
          monthly: '$10/mo',
          hourly: '$0.0041',
          discount: '',
        },
        {
          vCPU: '4',
          memory: '16 GB',
          storage: '240 GB',
          bandwidth: '4 TB',
          monthly: '$20/mo',
          hourly: '$0.0082',
          discount: '',
        },
        {
          vCPU: '8',
          memory: '32 GB',
          storage: '480 GB',
          bandwidth: '8 TB',
          monthly: '$40/mo',
          hourly: '$0.0164',
          discount: '',
        },
        {
          vCPU: '12',
          memory: '48 GB',
          storage: '960 GB',
          bandwidth: '8 TB',
          monthly: '$50/mo',
          hourly: '$0.0171',
          discount: '',
        },
        {
          vCPU: '16',
          memory: '32 GB',
          storage: '400 GB',
          bandwidth: '8 TB',
          monthly: '$70/mo',
          hourly: '$0.0239',
          discount: '50% for 3 mos',
        },
      ],
    },
    {
      category: 'CPU',
      rows: [
        {
          vCPU: '1',
          memory: '2 GB',
          storage: '30 GB',
          bandwidth: '1 TB',
          monthly: '$5/mo',
          hourly: '$0.0027',
          discount: '',
        },
        {
          vCPU: '2',
          memory: '4 GB',
          storage: '120 GB',
          bandwidth: '2 TB',
          monthly: '$10/mo',
          hourly: '$0.0041',
          discount: '',
        },
        {
          vCPU: '4',
          memory: '8 GB',
          storage: '240 GB',
          bandwidth: '4 TB',
          monthly: '$20/mo',
          hourly: '$0.0082',
          discount: '',
        },
        {
          vCPU: '8',
          memory: '16 GB',
          storage: '240 GB',
          bandwidth: '4 TB',
          monthly: '$30/mo',
          hourly: '$0.019',
          discount: '',
        },
        {
          vCPU: '12',
          memory: '48 GB',
          storage: '960 GB',
          bandwidth: '8 TB',
          monthly: '$175/mo',
          hourly: '$0.0299',
          discount: '',
        },
        {
          vCPU: '16',
          memory: '32 GB',
          storage: '400 GB',
          bandwidth: '8 TB',
          monthly: '$100/mo',
          hourly: '$0.0197',
          discount: '50% for 3 mos',
        },
      ],
    },
  ]

  return (
    <div className={`${CommonStyle.ContainerWidth} py-5`}>
      <h2 className="mt-md-5 mt-3 fs-1">
        Get exactly what you need with cloud VPS
      </h2>

      {/* Promotion Banner */}
      <div
        className="p-md-4 p-3 rounded mt-3"
        style={{ background: '#F1F0FF' }}
      >
        <h5>
          Promotions are valid for new accounts only and do not apply to
          upgrades of existing servers.
        </h5>
      </div>

      {/* Pricing Table */}
      <div className={Styles.scrollableTable}>
        <table className="table mb-0 align-middle mt-5">
          <thead>
            <tr className="text-start">
              <th scope="col" className="text-nowrap">
                Optimization
              </th>
              <th scope="col" className="text-nowrap">
                vCPU
              </th>
              <th scope="col" className="text-nowrap">
                Memory
              </th>
              <th scope="col" className="text-nowrap">
                Storage
              </th>
              <th scope="col" className="text-nowrap">
                Bandwidth
              </th>
              <th scope="col" className="text-nowrap text-end">
                Starting at
              </th>
              <th scope="col" className="text-nowrap text-end">
                Hourly price
              </th>
              <th scope="col" className="text-nowrap">
                Discount
              </th>
              <th scope="col" className="text-nowrap"></th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((group, groupIndex) =>
              group.rows.map((row, rowIndex) => (
                <tr key={`${groupIndex}-${rowIndex}`}>
                  {/* Show category name only in the first row */}
                  {rowIndex === 0 && (
                    <td
                      rowSpan={group.rows.length}
                      className="fw-semibold text-nowrap align-middle"
                    >
                      {group.category}
                    </td>
                  )}
                  <td className="text-nowrap">{row.vCPU}</td>
                  <td className="text-nowrap">{row.memory}</td>
                  <td className="text-nowrap">{row.storage}</td>
                  <td className="text-nowrap">{row.bandwidth}</td>
                  <td className="text-nowrap text-end">
                    <span
                      className="px-2 rounded border"
                      style={{ background: '#F5F4FF' }}
                    >
                      {row.monthly}
                    </span>
                  </td>
                  <td className="text-nowrap text-end">
                    <span
                      className="px-2 rounded border"
                      style={{ background: '#F5F4FF' }}
                    >
                      {row.hourly}
                    </span>
                  </td>
                  <td className="text-nowrap">{row.discount}</td>
                  <td className="text-nowrap">
                    <button
                      className={`rounded-pill text-center ${Styles.customButton}`}
                    >
                      Build now
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
