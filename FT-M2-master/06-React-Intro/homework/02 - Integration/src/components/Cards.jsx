import Card from './Card';
import style from "./cards.module.css";
import {useNavigate} from "react-router-dom"

export default function Cards(props) {
   const navigate= useNavigate()
   const {characters, onClose }= props;
   const {image, name, species, gender, id} = character;
   
   
   function navigateHandler(){
      navigate(`/detail/${character.id}`)
   }
   
   
   return (
   <div
   className={style.cardContainer}>
      <div classname={style.imageContainer}>
         <img classname={style.characterImage} src={image} alt={name} onclick={navigateHandler()} />
      {characters.map((character => (
      <Card key={character.id} character= {character} onClose={onClose}/>
      )))}

   </div>);
}
