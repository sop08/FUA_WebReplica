function MReco1(props) {
  return (
    <div id="reco">
      <div className="reco-item">
        <img src={props.mangaReco.image} alt={props.mangaReco.image}></img>
        <span>{props.mangaReco.name}</span>
      </div>
    </div>
  );
}

export default MReco1;
