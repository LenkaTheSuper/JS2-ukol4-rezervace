export const Cancal = (props) => {
    const {storno, text1, text2} = props
    return (
        <div className="summary__cancal">
          <h3>{storno}</h3>
          <div className="summary__cancel-text">
            <p>{text1}</p>
            <p>{text2}</p>
          </div>
        </div>
    )
}