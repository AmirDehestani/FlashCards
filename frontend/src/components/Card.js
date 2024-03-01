import '../styles/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useState } from 'react';

const Card = ({ flashcard, deleteHandler, updateHandler }) => {
  const [showDefinition, setShowDefinition] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [updatedFlashcard, setUpdatedFlashcard] = useState({
    term: '',
    definition: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFlashcard({
      ...updatedFlashcard,
      [name]: value,
    });
  };

  return (
    <>
      {!editMode ? (
        <div className="card">
          <div className="term">{flashcard.term}</div>
          {showDefinition ? (
            <div
              className="definition"
              onClick={() => {
                setShowDefinition(!showDefinition);
              }}
            >
              {flashcard.definition}
            </div>
          ) : (
            <div
              className="hidden-definition"
              onClick={() => {
                setShowDefinition(!showDefinition);
              }}
            >
              click to reveal
            </div>
          )}
          <FontAwesomeIcon
            onClick={() => {
              deleteHandler(flashcard._id);
            }}
            className="fa-icon"
            icon={icon({
              name: 'trash-can',
              family: 'classic',
              style: 'regular',
            })}
          />
          <FontAwesomeIcon
            className="fa-icon"
            icon={icon({
              name: 'pen-to-square',
              family: 'classic',
              style: 'regular',
            })}
            onClick={() => {
              setEditMode(!editMode);
              setUpdatedFlashcard({
                term: flashcard.term,
                definition: flashcard.definition,
              });
            }}
          />
        </div>
      ) : (
        <div className="card">
          <input
            type="text"
            className="term-edit-mode"
            name="term"
            value={updatedFlashcard.term}
            onChange={handleInputChange}
          />
          <input
            className="definition-edit-mode"
            name="definition"
            value={updatedFlashcard.definition}
            onChange={handleInputChange}
          />

          <FontAwesomeIcon
            className="fa-icon"
            icon={icon({
              name: 'circle-xmark',
              family: 'classic',
              style: 'regular',
            })}
            onClick={() => {
              setEditMode(!editMode);
            }}
          />
          <FontAwesomeIcon
            className="fa-icon"
            icon={icon({
              name: 'circle-check',
              family: 'classic',
              style: 'regular',
            })}
            onClick={() => {
              updateHandler(flashcard._id, updatedFlashcard);
              setEditMode(!editMode);
            }}
          />
        </div>
      )}
    </>
  );
};

export default Card;
