export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg mx-2">
        <div className="container-fluid d-flex justify-content-between w-100">
          <div className="w-100">
            <button
              className="navbar-toggler d-block"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span
                className="navbar-toggler-icon d-block"
                style={{ color: "white" }}
              />
            </button>
          </div>

          <div className="w-100">
            <a className="navbar-brand" href="#">
              <img
                src="https://images.ctfassets.net/vy53kjqs34an/3b6vBa9H4jGNZQvpCDV9sm/ca9a29433c61e153eaa123f7fb59ec15/website_RiyadhSeason_w.png?fm=webp&w=85&h=110"
                alt="Logo"
                width={70}
              />
            </a>
          </div>

          <div className="ms-auto d-flex gap-4 justify-content-end align-items-center w-50">
            <span className="text-white ms-2">العربية</span>
            <button className="btn btn-primary rounded">View Booklet</button>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-start px-3" id="offcanvasNavbar">
        <div
          className="d-flex flex-column justify-content-end px-3 w-100"
          style={{ height: "20vh" }}
        >
          <button className="btn btn-primary w-100 rounded">
            View Booklet
          </button>
          <hr className="my-3 border-top border-secondary px-3" />
        </div>

        <div className="d-flex flex-wrap gap-3 img-offcanvas">
          <img
            src="https://images.ctfassets.net/vy53kjqs34an/4UwVIgWmMI4JAQXP3yXPWR/3cd131fc453a2fc2f31ae8fa6c5578af/blvd_world_colors.png?fm=webp&fit=pad&w=100&h=100"
            alt=""
          />

          <img
            src="https://images.ctfassets.net/vy53kjqs34an/2MByp5Kz7m5sGymIOf4z5Q/121bde386be36e313ef30423f2a057d6/BlvdCity_VerticalLogo_OnDark_RGB.png?fm=webp&fit=pad&w=100&h=100"
            alt=""
          />

          <img
            src="https://images.ctfassets.net/vy53kjqs34an/6eDxJWXdHS88l75iyavOxy/44228eeeda81be38cad907de431d2730/Group_17.png?fm=webp&fit=pad&w=100&h=100"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/vy53kjqs34an/2cwkQqOfarbvwKrRArrm0q/95b7ce8c48bca3c6e62fab086a2c8431/image__6_.png?fm=webp&fit=pad&w=100&h=100"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/vy53kjqs34an/5lYdlk9aE4Gm5BXPrBUS9u/985f3ecfb29612e70dd4b51261907e69/woncer_garden.png?fm=webp&fit=pad&w=100&h=100"
            alt=""
          />

          <img
            src="https://images.ctfassets.net/vy53kjqs34an/3ip6OxVwP8YhIKmTo2HF5B/1bcd099801ab242f6bd24b962f95e114/BLVD_Runway_logo__2.16.10_PM.png?fm=webp&fit=pad&w=100&h=100"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/vy53kjqs34an/5OziW71cfEHu2ZHlpZE9r4/3cc7ce289cb04c9593c7fecfa29c026f/dior.png?fm=webp&fit=pad&w=100&h=100"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/vy53kjqs34an/2x3IWScrpgS5qmSHdHO1ZZ/157d3b0ac07f573cb54838320cd3900a/logo_-_souq_alawaleen.png?fm=webp&fit=pad&w=100&h=100"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/vy53kjqs34an/5qWHe4Mz7dV7UMIm7FYBqO/542524ea5d3657532cc09ca05837a974/ZOO_LOGO_COLOR_1.png?fm=webp&fit=pad&w=100&h=100"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/vy53kjqs34an/6z0n8tKquAhrZ1x7fGIjch/09670cb1d007288951b014e9c60b390d/via_ryiadh_logo.png?fm=webp&fit=pad&w=100&h=100"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/vy53kjqs34an/CFFciZlqL3ZsM5ARaumIe/7460d0838b8db6972d35cd160c99cb9a/Logo-01.png?fm=webp&fit=pad&w=100&h=100"
            alt=""
          />

          <img
            src="https://images.ctfassets.net/vy53kjqs34an/1rWTEO7FjOBMPvGdMdcHIv/6a131f379557983b8194e089286b534f/the_groves_3d_Gold.png?fm=webp&fit=pad&w=100&h=100"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/vy53kjqs34an/5r8tSDwbIB3S1ahKWFvFib/761ec6260acec1e690a0e2da7e7b05dc/logo.png?fm=webp&fit=pad&w=100&h=100"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/vy53kjqs34an/29JmIZyaUXDTJZBNyRql1I/866b0fd369cfc49dfdf12e7dc01c78b5/Al_Hesn_Studios_Logo_new.png?fm=webp&fit=pad&w=100&h=100"
            alt=""
          />
        </div>
        <hr className="my-3 border-top border-secondary px-3" />

        <div className="d-flex justify-content-center">
          <ul className="d-flex align-items-center gap-4 list-unstyled mb-0">
            <li className="rounded">
              <a
                href="https://www.facebook.com/webookfun/"
                target="_blank"
                rel="noreferrer noopener"
                className="d-inline-flex align-items-center justify-content-center p-1 rounded overflow-hidden text-decoration-none"
                aria-label="Facebook"
              >
                <img
                  src="https://images.ctfassets.net/vy53kjqs34an/12dxmhGOwDp0O60rGkGaoU/2316038e3becb17702597cf2782052f1/Button-1.png?fit=pad&w=55&h=55"
                  width={55}
                  height={55}
                  alt="Facebook Icon Social Media"
                />
              </a>
            </li>
            <li className="rounded">
              <a
                href="https://x.com/RiyadhSeason"
                target="_blank"
                rel="noreferrer noopener"
                className="d-inline-flex align-items-center justify-content-center p-1 rounded overflow-hidden text-decoration-none"
                aria-label="X (Twitter)"
              >
                <img
                  src="https://images.ctfassets.net/vy53kjqs34an/7FPODYVihpzuYzN2hoDlD2/1e889247bc73807bd4844d210f91e2db/Button.png?fit=pad&w=55&h=55"
                  width={55}
                  height={55}
                  alt="X Icon"
                />
              </a>
            </li>
            <li className="rounded">
              <a
                href="https://www.instagram.com/riyadhseason"
                target="_blank"
                rel="noreferrer noopener"
                className="d-inline-flex align-items-center justify-content-center p-1 rounded overflow-hidden text-decoration-none"
                aria-label="Instagram"
              >
                <img
                  src="https://images.ctfassets.net/vy53kjqs34an/6vlq9w8miTqnUyvaPVTGlt/c7098a6a02a829656ad0150412caa439/Button-2.png?fit=pad&w=55&h=55"
                  width={55}
                  height={55}
                  alt="Instagram Icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
