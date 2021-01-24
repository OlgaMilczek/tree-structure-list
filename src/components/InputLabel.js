import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function InputLabel({inputType, labelId, labelText }) {
    return (   
        <label className = 'input__label' htmlFor = {labelId} >
            <span className = {`input__button --${inputType}`}>
                <FontAwesomeIcon icon ={faPlus} className = 'input__icon-plus'/>
                <FontAwesomeIcon icon = {faMinus} className = 'input__icon-minus'/>
            </span>
            {labelText}
        </label> 
    );
}
