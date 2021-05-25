import { useState } from "react";
import Beer from "./Beer";

const BeerGrid = ({beers}) => {

  const [flipped, setFlipped] = useState([]);

  const handleClick = (event) => {
    const id = event.currentTarget.id;
    const flippedElement = document.getElementById(flipped[0]);
    const elementToFlip = document.getElementById(id);
    if(flippedElement) {
      flippedElement.querySelector('.card').classList.toggle('flipped');
    }
    if(id === flipped[0]){
      setFlipped([]);
    } else {
      elementToFlip.querySelector('.card').classList.toggle('flipped');
      setFlipped([id]);
    }

  }
  return (
    <div className="beer-grid">
      {beers.map(beer => (<Beer info={beer} key={beer.id} handleClick={handleClick}/>))}
    </div>
  );
}
 
export default BeerGrid;