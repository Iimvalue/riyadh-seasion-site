export default function BottomHero() {
  return (
    <>
      <div className="d-flex justify-content-between text-white">
        <h1 className="welcome-heading" style={{ width: "70%" }}>
          Welcome to Riyadh Season 2024
        </h1>
        <div className="ms-auto d-flex gap-3 align-items-center">
          <span className="text-white ms-2">Explore</span>
          <button className="btn btn-primary rounded">Book Tickets</button>
        </div>
      </div>
    </>
  );
}
