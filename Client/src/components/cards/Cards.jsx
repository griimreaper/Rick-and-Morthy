import Card from '../card/Card';
import "./Cards.css"

export default function Cards({ characters, onClose }) {
   return <div className="cards_container">{characters.map((ch) => {
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
      >
      </Card>);
   })}</div>;
}
