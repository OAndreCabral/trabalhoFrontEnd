// @ts-nocheck
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './Details.css'

const Details = () => {

    const { name } = useParams();
    const [card, setCard] = useState(null);

    useEffect(() => {
        const fetchCard = async () => {
            try {
                const response = await axios.get(`https://digimon-api.vercel.app/api/digimon/name/${name}`);
                setCard(response.data[0]);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCard();
    }, [name]);

    console.log(card);

    if (!card) {
        return <h1>Carregando</h1>
    }

    return (
        <div className="container">
            <div className="info">
                <h1 className="card-name">{card.name}</h1>
                <img className="card-image" src={card.img} />
                <h3 className="card-name">Level: {card.level}</h3>
            </div>
        </div>

    );
}

export default Details;