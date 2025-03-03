import CommonStyle from '../../styles/commomStyle.module.css'

export default function Section2() {
  return (
    <div className={`${CommonStyle.ContainerWidth}`}>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6 mt-lg-0 mt-3 px-2">
          <div
            class="card p-2 h-100"
            style={{
              border: '1px solid #eee',
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0) 60%, rgba(255,226,226,1) 100%)',
            }}
          >
            <div class="card-body">
              <p className="fs-2 lh-1">New to web hosting?</p>
              <p className="fs-2 lh-1">Start here</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-lg-0 mt-3 px-2">
          <div
            class="card p-2 h-100"
            style={{ background: '#FCFBFA', border: 0 }}
          >
            <div class="card-body">
              <h4 style={{ lineHeight: '35px', minHeight: '80px' }}>
                What is{' '}
                <span
                  className="px-2 rounded border"
                  style={{ background: '#F5F4FF', whiteSpace: 'nowrap' }}
                >
                  web hosting?
                </span>
              </h4>
              <p>
                Web hosting provides storage for and access to a website or
                digital project. Your web host gives your data a place to live
                and lets visitors (or authorized users) see it. Web hosts often
                do more, but as the term suggests, hosting is their main bread
                and butter.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-lg-0 mt-3 px-2">
          <div
            class="card p-2 h-100"
            style={{ background: '#FCFBFA', border: 0 }}
          >
            <div class="card-body">
              <h4 style={{ lineHeight: '35px', minHeight: '80px' }}>
                How does{' '}
                <span
                  className="px-2 rounded border"
                  style={{ background: '#F5F4FF', whiteSpace: 'nowrap' }}
                >
                  web hosting
                </span>{' '}
                work?
              </h4>
              <p>
                With web hosting, your site and all the files that make it up
                live on a server set up by a host. When people go to your site,
                they’re requesting to see files from that server. The server
                then sends that information over to the visitor, and what they
                see is your website.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-lg-0 mt-3 px-2">
          <div
            class="card p-2 h-100"
            style={{ background: '#FCFBFA', border: 0 }}
          >
            <div class="card-body">
              <h4 style={{ lineHeight: '35px', minHeight: '80px' }}>
                Why do I need a{' '}
                <span
                  className="px-2 rounded border"
                  style={{ background: '#F5F4FF', whiteSpace: 'nowrap' }}
                >
                  web host?
                </span>
              </h4>
              <p>
                You can technically host your website yourself, but it’s
                extremely technical. You’ll have to invest your own server
                technology to meet the needs of visitors as your traffic begins
                to grow. A web host will provide the servers and technology for
                you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
