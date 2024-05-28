export const Header = (props) => {
    const {photo, name, adress, city, rating, roomName, roomType, roomPrice} = props
    return (
    <div className="summary__head">
        <img
          className="summary__photo"
          src={photo}
        />
        <div className="summary__head-property">
          <h3 className="summary__name">{name}</h3>
          <div className="summary__adress">{adress}</div>
          <div className="summary__city">{city}</div>
          <div className="summary__rating">{rating}</div>
        </div>
        <div className="summary__head-room">
          <h3 className="summary__name">{roomName}</h3>
          <div className="summary__room-type">{roomType}</div>
          <div className="summary__room-price">{roomPrice}</div>
        </div>
    </div>
    )
}