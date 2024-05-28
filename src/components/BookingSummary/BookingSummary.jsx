import { texts } from "../texts/texts";
import { Header } from "../Header/Header";
import { Detail } from "../Detail/Detail";
import { Services } from "../Services/Services";
import { Cancal } from "../Cancal/Cancal";

const {header, detail, services, cancal} = texts
const {photo, name, adress, city, rating, roomName, roomType, roomPrice} = header
const {number, dates, guests, food, roomTotal, checkIn, checkOut} = detail
const {parking, breakfast, wellness, wifi} = services
const {storno, text1, text2} = cancal

export const BookingSummary = () => {
    return (
      <div className="summary">
        <h2>Booking Summary</h2>
        <Header
            photo={photo}
            name={name}
            adress={adress}
            city={city}
            rating={rating}
            roomName={roomName}
            roomType={roomType}
            roomPrice={roomPrice}
        />
        <Detail
            number={number} 
            dates={dates}
            guests={guests}
            food={food}
            roomTotal={roomTotal}
            checkIn={checkIn}
            checkOut={checkOut}
        />
        <Services 
            parking={parking} 
            breakfast={breakfast} 
            wellness={wellness} 
            wifi={wifi}
        />
        <Cancal 
            storno={storno} 
            text1={text1} 
            text2={text2}
        />
      </div>
    );
};