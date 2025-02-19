import React from 'react';
import Link from 'next/link';

const Business = ({ title, imgURL, videoURL, discription, btnText }) => {
    return (
        <div className="border-0 p-3">
            <hr />
            <h4 className="fw-normal">{title}</h4>
            <div className="rounded overflow-hidden">
                {videoURL != "" ?

                    <video
                        width="100%"
                        height={250}
                        className="img-fluid rounded" autoPlay loop muted playsInline>
                        <source src={videoURL} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    :
                    <img
                        src={imgURL}
                        alt="Reseller Hosting"
                        width={"100%"}
                        height={250}
                        className="img-fluid rounded"
                    />
                }
            </div>
            <p className="mt-3 text-muted">
                {discription}
            </p>
            <Link href="#" className="btn btn-outline-dark rounded-pill">
                {btnText} →
            </Link>
        </div>
    );
};

export default Business;