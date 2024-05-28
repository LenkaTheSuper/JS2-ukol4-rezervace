export const Services = (props) =>{
    const {parking, breakfast, wellness, wifi} = props
    return (
        <div className="summary__services">
            <h3>Doplňkové služby</h3>
            <div className="summary__service">{parking}</div>
            <div className="summary__service">{breakfast}</div>
            <div className="summary__service">{wellness}</div>
            <div className="summary__service">{wifi}</div>
        </div>
    )
}