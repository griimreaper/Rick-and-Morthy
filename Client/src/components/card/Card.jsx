import { Link } from "react-router-dom"
import "./Card.css"
import { addFav, removeFav } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"

export default function Card(props) {
   const [isFav, setIsFav] = useState(false)

   const myFavorites = useSelector(state => state.myFavorites)
   const dispatch = useDispatch()

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   const { name, status, species, id, gender, origin, image, onClose } = props

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         dispatch(
            addFav({
               name,
               status,
               species,
               gender,
               origin,
               id,
               image,
            })
         );
         setIsFav(true);
      }
   };
   return (
      <div className="card">
         {
            isFav === true ? (
               <button className="favbutton" onClick={handleFavorite}>❤️</button>
            ) : (
               <button className="favbutton" onClick={handleFavorite}>🤍</button>
            )
         }
         <button className="x" onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h2 id={id}>{name}</h2>
            <img src={image} alt={name} />
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h3>{origin}</h3>
         </Link>
      </div>
   );
}

