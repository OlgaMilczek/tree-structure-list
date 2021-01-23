import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function InputLabel({inputType, labelId }) {
    return (   
        <label className = 'tree__label' for = {labelId} >
            <span className = {`tree__input-button-${inputType}`}>
                <FontAwesomeIcon icon ={faPlus} className = 'tree__input__icon-plus'/>
                <FontAwesomeIcon icon = {faMinus} className = 'tree__input__icon-minus'/>
            </span>
        </label> 
    );
}
