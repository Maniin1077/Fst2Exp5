export default function FilterBar({ setFilter }) {
  return (
    <div className="my-3">
      <button className="btn btn-outline-primary me-2" onClick={() => setFilter("all")}>All</button>
      <button className="btn btn-outline-success me-2" onClick={() => setFilter("tech")}>Tech</button>
      <button className="btn btn-outline-warning" onClick={() => setFilter("design")}>Design</button>
    </div>
  );
}