import './button-two-component.scss';

const ButtonTwo = (props) => {
    return(
        <button className="button-two" onClick={props.func}>
            {props.svg? <props.svg className='button-logo'/> : null}
            Sign {props.signup} with {props.name}
        </button>
    )
}

export default ButtonTwo;