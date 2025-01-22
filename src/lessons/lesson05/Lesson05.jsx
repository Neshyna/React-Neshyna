import { v4 } from "uuid";
import "./styles.css";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { animalData } from "./data";

function Lesson05() {
  // create array based on animalData using map

  const animalCards = animalData.map((animalData) => {
    return (
      <div key={v4()}>
        <h1>Madagaskar</h1>
        <AnimalCard
          //   key={animalData.id}
          //   additional attribute to work with array while working with map
          //   needed for react optimization and must be unique
          
          animalName={animalData.name}
          animalSpecies={animalData.species}
          animalImg={animalData.image}
        />
      </div>
    );
  });

  return <div className="lesson05-wrapper">{animalCards}</div>;
}
export default Lesson05;
