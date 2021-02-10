import { useState, useEffect } from 'react';
import { findCharacterById } from '../services/rickAndMorty';

export const useCharacterById = id => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    findCharacterById(id)
      .then(character => {
        setCharacter(character);
        setLoading(false);
      });
  }, [id]);

  return {
    loading, 
    character
  };
};
