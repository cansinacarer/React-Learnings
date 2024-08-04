import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [parsedData, setParsedData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/cansinacarer`
    )
      .then((response) => response.json())
      .then(setData) // short for .then(data => setData(data))
  }, []);

return (
        <div>
                <h1>Data</h1>
                {data && (
                    <>
                        <div style={{ textAlign: "center" }}>
                            <img src={data.avatar_url} alt="" height="160" width="160" />
                            <p><a href={data.html_url} target="_blank">{data.login}</a></p>
                        </div>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </>
                )}
                {!data && (
                    <p>No data available</p>
                )}
        </div>
)
}

export default App;
