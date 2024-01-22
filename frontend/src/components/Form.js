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
    <div>
      <h2>Add a Flashcard</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Term :
          <input
            type="text"
            name="term"
            value={newFlashcard.term}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
        </label>
        <label>
          Definition :
          <input
            type="text"
            name="definition"
            value={newFlashcard.definition}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Form;
