import { useSelector } from 'react-redux';
import Card from '../card/Card';
import "./Cards.css"
import Paginate from './Paginate';


export default function Cards({ onClose, characters, userId}) {

   const { numPage } = useSelector((state) => state)

   let desde = (numPage-1) * 12
   let hasta = numPage * 12

   let cantPages = Math.round(characters.length / 12)

   let viewCharacters = characters.slice(desde, hasta)

   return <div className="cards_container">
         {viewCharacters.map((ch) => {
         const { id, name, status, species, gender, origin, image } = ch
         return (<Card key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
            userId={userId}
         >
         </Card>);
      })}
      <Paginate cantPages={cantPages}></Paginate>
   </div>;
}
