import '../styles/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useState } from 'react';

const Card = ({ flashcard }) => {
  const [showDefinition, setShowDefinition] = useState(false);
  return (
    <div className="card">
      <div className="term">{flashcard.term}</div>
      <div className="definition">
        {showDefinition ? flashcard.definition : ''}
      </div>
      <FontAwesomeIcon
        onClick={() => {
          setShowDefinition(!showDefinition);
        }}
        className="fa-icon"
        icon={icon({ name: 'eye-slash', family: 'classic', style: 'regular' })}
      />
    </div>
  );
};

export default Card;
