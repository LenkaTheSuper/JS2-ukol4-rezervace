export const Detail = (props) => {
    const {number, dates, guests, food, roomTotal, checkIn, checkOut} = props
    return (
        <div className="summary__detail">
            <h3>Detail rezervace</h3>
            <div className="summary__number">{number}</div>
            <div className="summary__dates">{dates}</div>
            <div className="summary__guests">{guests}</div>
            <div className="summary__services">{food}</div>
            <div className="summary__room-total">{roomTotal}</div>
            <div className="summary__check-in">{checkIn}</div>
            <div className="summary__check-out">{checkOut}</div>
        </div>
    )
}