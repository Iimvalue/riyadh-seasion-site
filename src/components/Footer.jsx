export default function Footer() {
  
  return (<footer className="border-top border-white-50 pt-4">
    <div className="container px-3 pb-4">
      <div className="d-flex flex-column align-items-center gap-4 py-4 py-xl-0 flex-xl-row justify-content-between">
        <div className="d-flex align-items-center gap-4">
          <figure className="m-0">
            <img
              src="https://images.ctfassets.net/vy53kjqs34an/3b6vBa9H4jGNZQvpCDV9sm/ca9a29433c61e153eaa123f7fb59ec15/website_RiyadhSeason_w.png"
              width="85"
              height="110"
              alt="Riyadh Season"
              className="img-fluid"
            />
          </figure>
          <ul className="list-unstyled d-flex gap-3 mb-0">
            <li>
              <a
                href="https://www.facebook.com/webookfun/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="d-inline-flex align-items-center justify-content-center p-1 rounded"
              >
                <img
                  src="https://images.ctfassets.net/vy53kjqs34an/12dxmhGOwDp0O60rGkGaoU/2316038e3becb17702597cf2782052f1/Button-1.png?fit=pad&w=55&h=55"
                  width="55"
                  height="55"
                  alt="Facebook Icon"
                  className="img-fluid"
                  style={{ maxHeight: "55px" }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/RiyadhSeason"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="X"
                className="d-inline-flex align-items-center justify-content-center p-1 rounded"
              >
                <img
                  src="https://images.ctfassets.net/vy53kjqs34an/7FPODYVihpzuYzN2hoDlD2/1e889247bc73807bd4844d210f91e2db/Button.png?fit=pad&w=55&h=55"
                  width="55"
                  height="55"
                  alt="X Icon"
                  className="img-fluid"
                  style={{ maxHeight: "55px" }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/riyadhseason"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="d-inline-flex align-items-center justify-content-center p-1 rounded"
              >
                <img
                  src="https://images.ctfassets.net/vy53kjqs34an/6vlq9w8miTqnUyvaPVTGlt/c7098a6a02a829656ad0150412caa439/Button-2.png?fit=pad&w=55&h=55"
                  width="55"
                  height="55"
                  alt="Instagram Icon"
                  className="img-fluid"
                  style={{ maxHeight: "55px" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="d-flex align-items-center justify-content-between border-top px-3">
      <div className="d-flex gap-2">
        <button
          type="button"
          className="btn btn-link text-decoration-none text-white px-1"
        >
          العربية
        </button>
        <a className="btn btn-link text-decoration-none px-1 text-white">
          PRIVACY POLICY
        </a>
        <a
          className="btn btn-link text-decoration-none text-white px-1"
          aria-label="Terms & Conditions"
        >
          TERMS &amp; CONDITIONS
        </a>
      </div>

      <div className="text-center text-white">
        © 2024 RIYADH SEASON. All rights reserved.
      </div>
    </div>
  </footer>)
  
}
