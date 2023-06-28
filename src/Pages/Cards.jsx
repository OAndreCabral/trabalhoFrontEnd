// @ts-nocheck
import React from "react";
import { useCallback, useEffect, useState } from "react";
import './Cards.css'
import axios from "axios";
import { Link } from "react-router-dom";

const Cards = () => {

    const [cardData, setCardData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [cardsPerPage] = useState(25);

    const fetchCardData = useCallback(async () => {
        try {
            setLoading(true)
            const { data } = await axios.get("https://digimon-api.vercel.app/api/digimon")
            setCardData(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchCardData()
    }, [])

    const renderCardData = () => {
        if (loading || !cardData?.length) {
            return (<h4>Carrengando Informações</h4>)
        }
        return (
            <div className="CardList">
                {currentCards.map(card => (
                    <div key={card.name} className="Card">
                        <Link to={`/Details/${card.name}`}>
                            <img src={card.img} alt={card.name} />
                        </Link>
                    </div>
                ))}
            </div>
        );
    }

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);
    const totalPages = Math.ceil(cardData.length / cardsPerPage);

    const handlePreviusPage = () => {
        setCurrentPage((prevPage) => prevPage - 1)
    }

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1)
    }

    return (
        <div>
            <div className="CardContainer">
                {renderCardData()}
            </div>

            <div className="pag">
                <button onClick={handlePreviusPage}
                    disable={currentPage === totalPages}
                    className="pag-button"
                >
                    Anterior
                </button>
                <button onClick={handleNextPage}
                    disable={currentPage === 100}
                    className="pag-button"
                >
                    Próxima
                </button>
            </div>
        </div>
    )

}

export default Cards;