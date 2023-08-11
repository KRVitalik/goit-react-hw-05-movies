import { getActorsFilm } from "components/API/getFilm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageCast, ImageCastActors, ImageCastElement, ImageCastEmptyImg, LiCastContainer } from "./Cast.styled";

const imgLink = 'https://image.tmdb.org/t/p/w500';
    
function Cast() {
    const params = useParams()
    const [cast, setCast] = useState([])

    useEffect(() => {
        getActorsFilm(params.movieId).then((data) => {
    setCast(data.cast)
}).catch(err => console.error(err));
    }, [params.movieId])

    return (<LiCastContainer>
        {cast.map((actor) => {
            return <ImageCastElement key={actor.id}>
                {actor.profile_path
                    ? <ImageCast src={`${imgLink}${actor.profile_path}`} alt={actor.original_name} />
                    : <ImageCastEmptyImg>Sorry we don't have this picture</ImageCastEmptyImg>}
                <ImageCastActors>{actor.original_name}</ImageCastActors>
        </ImageCastElement>})}
    </LiCastContainer> );
}

export default Cast;