import "./styles.css";
function AnimalCard({animalName,animalSpecies,animalImg,chidren}) {
  return (
    <div className="animal-card-wrapper">
      <h3>{animalName}</h3>
      <div>{animalSpecies}</div>
      <img src={animalImg} className="card-image" />
      {/* props children allows to add additional structure (JSX,components) */}
      {children}
    </div>
  );
}
export default AnimalCard;