import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState<any>({});

  const fetchData = async () => {
    const apiUrl = import.meta.env.VITE_API_HOST;
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setApiData(data);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>{apiData?.message}</div>
    </div>
  );
}

export default App;
