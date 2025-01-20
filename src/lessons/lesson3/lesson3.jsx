import Button from "../../components/Button/Button";
import "./styles.css";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import {lionData,zebraData,hippoData} from "./data"

function Lesson3() {
  return (
    <div className="lesson3-wrapper">
        <AnimalCard 
        animalName={lionData.name}
        animalSpecies={lionData.species}
        animalImg={lionData.image}
        />
        {/* when use props children when creating component,
         possibility appears to add additional structure 
         between open and closin tag brackets */}
        <AnimalCard
        animalName={zebraData.name}
        animalSpecies={zebraData.species}
        animalImg={zebraData.image}
        >
        {/* props children */}
          <div>Один из главных персонажей</div>
          <Button name="Get more info" />
          </AnimalCard>
        <AnimalCard
        animalName={hippoData.name}
        animalSpecies={hippoData.species}
        animalImg={hippoData.image}
        />
      {/* при вызове компонента Button передаётся значение для свойства name объекта props */}
      <Button name="Send data"/>
      <Button name="GET"/>
      <Button/>
    </div>
  );
}
export default Lesson3;