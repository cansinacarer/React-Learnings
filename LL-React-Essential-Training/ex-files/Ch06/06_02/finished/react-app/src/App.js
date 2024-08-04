import { useState, useEffect } from "react";

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name} />
    </div>
  );
}

function App() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/users/cansinacarer`)
            .then((response) => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(error => setError(error));
    }, []); // we don't want any dependencies since we only want to fetch when our app first rendered
    
    if (loading) return <h1>Loading...</h1>;
    if (error) return <pre>{JSON.stringify(error)}</pre>;
    if (!data) return null;
    return (
        <GithubUser
        name={data.name}
        location={data.location}
        avatar={data.avatar_url}
        />
    );
}

export default App;
