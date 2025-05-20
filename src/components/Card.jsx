export default function Card(props) {
  return (
    <>
      {props.list.isNew ? (
        <a
          href={props.list.href}
          className="d-block border border-success position-relative overflow-hidden rounded border border-2 border-transparent text-decoration-none card"
          style={{ aspectRatio: "3 / 2.2" }}
        >
          <span
            className="badge bg-success text-white position-absolute top-0 start-50 translate-middle"
            style={{ zIndex: 1000 }}
          >
            New!
          </span>

          <img
            src={props.list.bgImage}
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            style={{ zIndex: 0 }}
          />

          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "rgba(33,37,41,0.7)",
              transition: "background-color .3s",
              zIndex: 1,
            }}
          >
            <div className="text-center">
              <img
                src={props.list.logo1}
                className="d-block mx-auto mb-2"
                style={{ maxWidth: "45%" }}
              />
              {props.list.logo2 && (
                <img
                  src={props.list.logo2}
                  className="d-block mx-auto"
                  style={{ maxWidth: "25%" }}
                />
              )}
            </div>
          </div>
        </a>
      ) : (
        <a
          href={"#"}
          className="d-block  position-relative overflow-hidden rounded border border-2 border-transparent text-decoration-none"
          style={{ aspectRatio: "3 / 2.2" }}
        >
          <img
            src={props.list.bgImage}
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            style={{ zIndex: 0 }}
          />

          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center card"
            style={{
              backgroundColor: "rgba(33,37,41,0.7)",
              transition: "background-color .3s",
              zIndex: 1,
            }}
          >
            <div className="text-center">
              <img
                src={props.list.logo1}
                className="d-block mx-auto mb-2"
                style={{ maxWidth: "45%" }}
              />
              {props.list.logo2 && (
                <img
                  src={props.list.logo2}
                  className="d-block mx-auto"
                  style={{ maxWidth: "25%" }}
                />
              )}
            </div>
          </div>
        </a>
      )}
    </>
  );
}
