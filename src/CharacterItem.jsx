const CharacterItem=({prop})=>{
  let result =''
  prop.status === "Alive" ?   
    result=
      <div className="character-card">
        <div className="image-container">
          <a className="character-is-alive">✓</a>
          <img className="character-img" src={prop.image} alt={prop.name}/>
        </div>      
          <h2>{prop.name}</h2>
          <p className="species-p">Especie: {prop.species}</p>
          <p className="type-p">Tipo: {prop.type}</p>
          <p className="gender-p">Genero: {prop.gender}</p>
      </div>
     : prop.status === "unknown" ? 
        result = 
          <div className="character-card">
            <div className="image-container">
          <a className="character-is-unknown">?</a>
          <img className="character-img" src={prop.image} alt={prop.name}/>
              </div>
            <h2>{prop.name}</h2>
            <p className="species-p">Especie: {prop.species}</p>
            <p className="type-p">Type: {prop.type}</p>
            <p className="gender-p">Gender: {prop.gender}</p>
          </div> :
    
    result = 
      <div className="character-card">
        <div className="image-container">
      <a className="character-is-dead">X</a>
      <img className="character-img" src={prop.image} alt={prop.name}/>
          </div>
        <h2>{prop.name}</h2>
        <p className="species-p">Especie: {prop.species}</p>
        <p className="type-p">Type: {prop.type}</p>
        <p className="gender-p">Gender: {prop.gender}</p>
      </div>

  return result
}


export {CharacterItem}