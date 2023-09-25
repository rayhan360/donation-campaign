import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetails from "./CardDetails";


const Card = () => {
    const [detailCard, setDetailCard] = useState({})
    const detailsCard = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)

    useEffect(()=> {
        const findCard = detailsCard.find((card) => card.id === idInt);

        setDetailCard(findCard)
    }, [idInt, detailsCard])
    return (
        <div>
            <CardDetails detailCard={detailCard}></CardDetails>
        </div>
    );
};

export default Card;