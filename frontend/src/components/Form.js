import '../styles/Form.css';

const Form = ({ newFlashcard, setNewFlashcard, handleSubmit }) => {
  // Form input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFlashcard({
      ...newFlashcard,
      [name]: value,
    });
  };

  return (
    <div className="submission-form">
      <h2>Add a Flashcard</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label for="term">Term :</label>
          <input
            type="text"
            name="term"
            value={newFlashcard.term}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
        </div>

        <div className="input-field">
          <label for="definition">Definition :</label>
          <input
            type="text"
            name="definition"
            value={newFlashcard.definition}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
        </div>

        <button className="save-button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
