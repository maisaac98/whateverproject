import { useDispatch } from 'react-redux';
import { createAction } from '../../utils/reducer/reducers.utils';
import { LOGINPOPUP_ACTION_TYPES } from '../../store/loginpopup/loginpopup.types';

const ButtonClose = () => {
    const dispatch = useDispatch();
    const closePopup = () => dispatch(createAction(LOGINPOPUP_ACTION_TYPES.CLOSE_POPUP));
    
    return(
        <button className='popup-close' onClick={closePopup}>&#10005;</button>
    )
}

export default ButtonClose;