
import { useState } from "react";

const CreateNote = () => {

  const [noteContent, setNoteContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/notes", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"content": noteContent}),
        });
        const result = await response.json();
      console.log("Form submitted successfully:", result);
      window.location.href = "/notes";
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log("Note Submitted:", noteContent);
  };

  return (
    <div className="form-wrapper">
      <h2>Create your note here:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="note">Enter note content</label>
        <input
          type="text"
          id="note"
          name="note"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateNote;
