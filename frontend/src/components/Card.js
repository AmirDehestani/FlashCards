import '../styles/Card.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useState } from 'react';

const Card = ({ flashcard }) => {
  const [showDefinition, setShowDefinition] = useState(false);
  return (
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
      {/* <FontAwesomeIcon
        onClick={() => {
          setShowDefinition(!showDefinition);
        }}
        className="fa-icon"
        icon={icon({ name: 'eye-slash', family: 'classic', style: 'regular' })}
      /> */}
    </div>
  );
};

export default Card;
