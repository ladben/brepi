const Beer = ({info, handleClick}) => {
  return (
    <div className="beer" onClick={handleClick} id={`beer${info.id}`}>
      <div className="scene">
        <div className="card">
          <div className="card-face card-face-front image" style={{backgroundImage: `url(${info.image_url})`}}/>
          <div className="card-face card-face-back description">
            <p>{info.description}</p>
          </div>
        </div>
      </div>
      <div className="name">
        <p>{info.name}</p>
      </div>
    </div>
  );
}
 
export default Beer;