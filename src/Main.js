import { useState, useEffect } from "react";
import BeerGrid from "./BeerGrid";
import Paginator from "./Paginator";

const Main = () => {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [pagePerTen, setPagePerTen] = useState(1);
  const [firstPage, setFirstPage] = useState(true);
  const [lastPage, setLastPage] = useState(false);

  useEffect(() => {
    let url = `https://api.punkapi.com/v2/beers?page=${pagePerTen}&per_page=60`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setBeers(data);
      setPage(pagePerTen*10-9);
      const pageButtons = document.querySelectorAll('button.page');
      let first = true;
      pageButtons.forEach(button => {
        if(first){
          button.classList.add('selected');
          first = false;
        } else {
          button.classList.remove('selected');
        }
      });
    })
  }, [pagePerTen]);

  const handlePageClicked = (event) => {
    const directionOne = parseInt(event.target.id) > page ? 'slide-to-left' : 'slide-to-right';
    const directionTwo = directionOne === 'slide-to-left' ? 'slide-to-right' : 'slide-to-left';

    const beerGrid = document.querySelector('.beer-grid');

    document.getElementById(page).classList.toggle('selected');

    beerGrid.classList.add(directionOne);
    beerGrid.classList.add('hidden');

    event.target.classList.toggle('selected');

    setTimeout(() => {
      setPage(event.target.id);
      beerGrid.classList.remove(directionOne);
      beerGrid.classList.add(directionTwo)
    }, 150);
    setTimeout(() => {
      beerGrid.classList.remove('hidden'); 
      beerGrid.classList.remove(directionTwo);
    }, 300);
  };

  const handlePageTurned = (event) => {
    const beerGrid = document.querySelector('.beer-grid');
    const directionOne = event.target.id === 'forward' ? 'slide-to-left' : 'slide-to-right';
    const directionTwo = directionOne === 'slide-to-left' ? 'slide-to-right' : 'slide-to-left';

    beerGrid.classList.add(directionOne);
    beerGrid.classList.add('hidden');

    if(event.target.id === 'forward') {
      if(pagePerTen === 6) {
        setLastPage(true);
      }
      setPagePerTen(pagePerTen + 1);
      setFirstPage(false);
    }else{
      if(pagePerTen === 2){
        setFirstPage(true);
      }
      setPagePerTen(pagePerTen - 1)
    }

    setTimeout(() => {
      beerGrid.classList.remove(directionOne);
      beerGrid.classList.add(directionTwo)
    }, 150);
    setTimeout(() => {
      beerGrid.classList.remove('hidden'); 
      beerGrid.classList.remove(directionTwo);
    }, 300);
  }

  return (
    <div className="main">
      { beers.length !== 0 && <BeerGrid beers={beers.filter(beer => {
      const endIndex = (page * 6);
      const startIndex = endIndex - 5;
      return (beer.id >= startIndex) && (beer.id <= endIndex);
    })}/>}
      <Paginator handlePageClicked={handlePageClicked} handlePageTurned={handlePageTurned} pagePerTen={pagePerTen} firstPage={firstPage} lastPage={lastPage} beers={beers}/>
    <div>helo</div>
    </div>

  );
}
 
export default Main;