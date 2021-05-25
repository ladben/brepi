const Paginator = ({handlePageClicked, handlePageTurned, pagePerTen, firstPage, lastPage, beers}) => {
  const idArr = [];
  const canShow = [];
  const firstId = pagePerTen * 10 - 9;
  for (let i = 0; i < 10; i++) {
    idArr.push(firstId+i);
    if(beers[i*6]){
      canShow.push(true);
    }else{
      canShow.push(false);
    }
  }


  return (
    <div className="paginator">
      <div className="pages">
      { !firstPage && <button onClick={handlePageTurned} id="backward">&lt;&lt;</button> }
      { canShow[0] && <button onClick={handlePageClicked} id={idArr[0]} className="page">{idArr[0]}</button> }
      { canShow[1] && <button onClick={handlePageClicked} id={idArr[1]} className="page">{idArr[1]}</button> }
      { canShow[2] && <button onClick={handlePageClicked} id={idArr[2]} className="page">{idArr[2]}</button> }
      { canShow[3] && <button onClick={handlePageClicked} id={idArr[3]} className="page">{idArr[3]}</button> }
      { canShow[4] && <button onClick={handlePageClicked} id={idArr[4]} className="page">{idArr[4]}</button> }
      { canShow[5] && <button onClick={handlePageClicked} id={idArr[5]} className="page">{idArr[5]}</button> }
      { canShow[6] && <button onClick={handlePageClicked} id={idArr[6]} className="page">{idArr[6]}</button> }
      { canShow[7] && <button onClick={handlePageClicked} id={idArr[7]} className="page">{idArr[7]}</button> }
      { canShow[8] && <button onClick={handlePageClicked} id={idArr[8]} className="page">{idArr[8]}</button> }
      { canShow[9] && <button onClick={handlePageClicked} id={idArr[9]} className="page">{idArr[9]}</button> }
      { !lastPage && canShow[9] && <button onClick={handlePageTurned} id="forward">&gt;&gt;</button> }
      </div>
    </div>
  );
}
 
export default Paginator;