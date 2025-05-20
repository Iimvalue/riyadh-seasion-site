export default function Recap() {
  return (
    <>
      <section
        id="rsRecap2023"
        className="container py-5 position-relative z-2"
      >
        <svg
          width="812"
          height="705"
          viewBox="0 0 812 705"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="position-absolute top-0 start-0"
          style={{
            left: "-3rem",
            zIndex: -1,
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M811.5 705H596.5H401.5L309.092 648.995L-36 449.991C81.9193 271.136 235.461 117.778 414.53 0L811.5 705Z"
            fill="#987BFF"
          />
        </svg>

        <div className="row align-items-center g-4">
          <div className="col-12 col-md-6">
            <div className="mb-4">
              <img
                src="https://images.ctfassets.net/vy53kjqs34an/1gbFl4Q7C1bI7YyssruI2V/637b666df8a9d2330d6e6ea81b7fe307/Button-3.png?fm=webp&w=70&h=70"
                alt="Watch Riyadh Season 2023 Recap"
                width="70"
                height="70"
                className="img-fluid"
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 className="text-white mb-4">Watch Riyadh Season 2023 Recap</h3>
            <a
              href="https://www.youtube.com/c/riyadhseason"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
              aria-label="Watch more moments"
            >
              Watch more moments
            </a>
          </div>

          <div className="col-12 col-md-6">
            <video
              poster="https://images.ctfassets.net/vy53kjqs34an/5PcL5NRQvrljV31YLYi2UE/738df0fc1368a14eaec969afc8eb555a/Screenshot_2024-09-02_192441.png"
              playsInline
              disablePictureInPicture
              controls
              className="w-100"
              style={{ aspectRatio: "16 / 9", cursor: "pointer" }}
            >
              <source
                src="https://videos.ctfassets.net/vy53kjqs34an/6Bq1C6PdoQXs4MSQWZS2tp/9eab192d3c853c6d0a156255a57143e6/Revision_3.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="text-center mt-5">
          <a
            href="https://www.youtube.com/c/riyadhseason"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
            aria-label="Watch more moments"
          >
            Watch more moments
          </a>
        </div>
      </section>
    </>
  );
}
