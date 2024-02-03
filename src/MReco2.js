function MReco2(props) {
  return (
    <div id="reco2">
      <div className="reco-item2">
        <img src={props.mangaReco2.image} alt={props.mangaReco2.image}></img>
        <span className="span2">{props.mangaReco2.name}</span>
      </div>
    </div>
  );
}

export default MReco2;
