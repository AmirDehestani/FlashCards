import React, { useState } from 'react';

const Form = ({ flashcards, setFlashcards }) => {
  // State to store form data
  const [newFlashcard, setNewFlashcard] = useState({
    term: '',
    definition: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFlashcard({
      ...newFlashcard,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the form data here
    setFlashcards(flashcards.concat(newFlashcard));
    console.log('Form Data:', newFlashcard);
    console.log('All cards:', flashcards);
    setNewFlashcard({ term: '', definition: '' });
  };

  return (
    <div>
      <h2>Flashcard</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Term :{' '}
          <input
            type="text"
            name="term"
            value={newFlashcard.term}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </label>
        <br />
        <label>
          Definition :{' '}
          <input
            type="text"
            name="definition"
            value={newFlashcard.definition}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
