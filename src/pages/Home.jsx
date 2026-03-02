import { useState, useMemo } from "react";
import CardComponent from "../components/CardComponent";
import FilterBar from "../components/FilterBar";

const data = [
  { name: "React Project", category: "tech" },
  { name: "UI Design", category: "design" },
  { name: "Node API", category: "tech" },
];

export default function Home() {
  const [filter, setFilter] = useState("all");

  const filteredData = useMemo(() => {
    return filter === "all"
      ? data
      : data.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <div className="container-fluid px-5 mt-4">
      <h2>Projects</h2>
      <FilterBar setFilter={setFilter} />

      <div className="d-flex flex-wrap">
        {filteredData.map((item, index) => (
          <CardComponent key={index} item={item} />
        ))}
      </div>
    </div>
  );
}