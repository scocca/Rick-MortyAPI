import React from 'react'
import { useState, useEffect } from 'react';
import './App.css'
import { CharacterItem } from './CharacterItem';
import { CharacterList } from './CharacterList';

export default function App() {
  const [completeList, setList] = useState([])
  const [originalList, setorList] = useState([])
  const [aliveList, setAliveList] = useState([])
  const [deadList, setDeadList] = useState([])
  const [unknownList, setUnknownList] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((data) => { setorList(data.results); setAliveList(data.results); setDeadList(data.results); setList(data.results); setUnknownList(data.results) })}, [])


  const originalListed = () => {
    setList(originalList)
  }

  const aliveListed = () => {
    const alive = aliveList.filter((x) => (x.status === "Alive"))
    setList(alive)
  }

  const deadListed = () => {
    const dead = deadList.filter((x) => (x.status === "Dead"))
    setList(dead)
  }

  const unknownListed = () => {
    const unknown = unknownList.filter((x) => (x.status === "unknown"))
    setList(unknown)
  }

  return (
    <>
    <main>
      <div className='btn-container'>
      <button onClick={aliveListed} className='custom-btn btns'>Alive Characters</button>
      <button onClick={deadListed} className='custom-btn btns'>Dead Characters</button>
      <button onClick={unknownListed} className='custom-btn btns'>Unknown Characters</button>
      <button onClick={originalListed} className='custom-btn btns'>All Characters</button>
      </div>
      <CharacterList>
        {completeList.map((character) => (
        <CharacterItem key={character.id} prop={character} />))}
      </CharacterList>
    </main>
  </>
  )
  
}

