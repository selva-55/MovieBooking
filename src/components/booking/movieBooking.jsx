import { useState } from 'react';
import './movieBooking.css'

const MovieBooking = () => {
    const seats = Array.from({ length: 40 }, (_, index) => index);
    const [selectSeat, setSelectSeat] = useState([])
    const [selectMovie, setSelectMovie] = useState("Avengers")
    const [movieDetails, setmovieDetails] = useState([])
    const handleBooking = (seatNo) => {
        if (selectSeat.includes(seatNo)) {
            const uncheckBooking = selectSeat.filter((data) => data !== seatNo)
            setSelectSeat(uncheckBooking)
        } else {
            setSelectSeat([...selectSeat, seatNo])
        }
    }
    const handleMovie = (e) => {
        setSelectMovie(e.target.value)
    }

    const handleBook = () => {
        const bookingSeat = {
            movieName: selectMovie,
            seatsBooked: selectSeat
        };

        const index = movieDetails.findIndex((entry) => entry.movieName === selectMovie);

        if (index !== -1) {
            const updatedMovieDetails = [...movieDetails];
            updatedMovieDetails[index].movieName = selectMovie;
            updatedMovieDetails[index].seatsBooked = [
                ...updatedMovieDetails[index].seatsBooked,
                ...selectSeat
            ];

            setmovieDetails(updatedMovieDetails);
        } else {
            setmovieDetails([...movieDetails, bookingSeat]);
        }

        setSelectSeat([]);
    };

    return (
        <div className="bookingContainer">
            <div className='totalDiv'>
                <div className='movieSelect'>
                    <p>SELECT A MOVIE :</p>
                    <select
                        onChange={(e) => handleMovie(e)}
                    >
                        <option>Avengers</option>
                        <option>Oppenheimer</option>
                        <option>Parking</option>
                        <option>Cast Away</option>
                        <option>The Terminal</option>
                    </select>
                </div>
                <div className='seatIndicationDiv'>
                    <div className='seatIndication'>
                        <div className='indicatorDiv'>
                            <div className='indicator'></div>
                            <p>N/A</p>
                        </div>
                        <div className='indicatorDiv'>
                            <div className='indicator' style={{ background: "green" }}></div>
                            <p>Selected</p>
                        </div>
                        <div className='indicatorDiv' >
                            <div className='indicator' style={{ background: "darkslategrey" }}></div>
                            <p>Occupied</p>
                        </div>
                    </div>
                </div>
                <div className='seatingDiv'>
                    <div className='seating'>
                        {
                            seats.map((seat, index) => {
                                const occupied = movieDetails.filter((data) => data.movieName === selectMovie)
                                return (
                                    <button className={selectSeat.includes(index) ?
                                        "selectedSeat" : occupied[0] && occupied[0].seatsBooked.includes(index) ?
                                            "occupied" :
                                            "seats"
                                    }
                                        disabled={occupied[0] && occupied[0].seatsBooked.includes(index)}
                                        onClick={() => handleBooking(index)}></button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='footerdiv'>
                    <p>You have selected {selectSeat.length} seats for a price of {selectSeat.length*100}</p>
                    <div className='bookButtonDiv'>
                        <button className='bookButton' onClick={() => handleBook()}>Book</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieBooking;