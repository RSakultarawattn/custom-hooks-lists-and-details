import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';
import Loading from '../components/loading/Loading';
import { useCharacters } from '../hooks/UseCharacters';
//import { findCharacters } from '../services/rickAndMorty';

const CharactersPage = () => {
  const { loading, characters } = useCharacters();

  if(loading) return <Loading />;
  return <CharacterList characters={characters} />;
};

export default CharactersPage;
