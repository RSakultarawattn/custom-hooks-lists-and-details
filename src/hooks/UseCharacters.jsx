import { useState, useEffect } from 'react';
import { findCharacters } from '../services/rickAndMorty';
//import { useCharacterById } from './UseCharacterById';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const handleClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  useEffect(() => {
    findCharacters(activePage).then((characters) => {
      setCharacters(characters);
      setLoading(false);
    });
  }, [activePage]);

  return { loading, characters, activePage, handleClick };
};

