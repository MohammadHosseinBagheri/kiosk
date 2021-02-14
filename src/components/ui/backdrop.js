const backdrop = (props) => (
    props.show ? <div className="backdrop" onClick={props.hide}></div> : null
)

export default backdrop