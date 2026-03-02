export default function Hero() {
  return (
    <div className="text-light text-center py-5"
      style={{
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
        minHeight: '60vh'
      }}
    >
      <div className="container">
        <h1 className="display-4 fw-bold">Build Modern Web Apps</h1>
        <p className="lead">
          React + Vite + Bootstrap + Material UI
        </p>
        <button className="btn btn-light btn-lg mt-3">
          Explore More
        </button>
      </div>
    </div>
  )
}
