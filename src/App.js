import { useState } from "react";
import "./styles.css";

export default function App() {
  const localJobs = JSON.parse(localStorage.getItem("jobs"));

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(localJobs ?? []);

  const handleAddList = () => {
    if (job !== "") {
      setJobs((prev) => {
        const newJobs = [...prev, job];
        // save to local storage
        const jsonJobs = JSON.stringify(newJobs);
        localStorage.setItem("jobs", jsonJobs);
        return newJobs;
      });
    }
    setJob("");
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleAddList} style={{ marginLeft: 20 }}>
        Add
      </button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}
