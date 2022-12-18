import './button-one.component.scss';

const ButtonOne = () => {
    return(
        <button className="get-started">
            <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <span className="button-text">Get started</span>
        </button>
    )
}

export default ButtonOne;