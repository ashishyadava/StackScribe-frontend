import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
  

export default function Notes() {
   
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function handleDelete(e) {
      const id = e.target.id;
      try {
          await fetch(`http://localhost:3001/notes/${id}`, {
          method: "DELETE", // or PUT
          });
          window.location.href = "/notes";
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  
    useEffect(() => {
      fetch("http://localhost:3001/notes")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          setNotes(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <h1>Loading...</h1>;
    }
  
    if (error) {
      return <h1>Error: {error}</h1>;
    }
  
    return (
      <div className="App">
        {notes.length === 0 ? (
          <h1>No Notes Found</h1>
        ) : (
          <ul>
            {notes.map((note, index) => (
              <div key={index}>
                <li>{note.content}</li>
                <button onClick={ handleDelete } id={note._id}>Delete Note</button>
              </div>
            ))}
          </ul>
        )}
        <nav>
        <Link to="notes/create">Create a Note</Link>
        <Link to="/">Home</Link>
      </nav>
      </div>
    );
}