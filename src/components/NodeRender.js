import MembersContainer from './MembersContainer';
import InputLabel from './InputLabel';

export default function NodeRender( { inputType, groupName, groupMembers, groupId, groupDescription } ) {
    let labelId = `${groupName}-${groupId}`;

    return (
        <li>
            <input type={inputType} id={labelId} name = {groupName} className = 'tree__input' />
            <InputLabel inputType = {inputType} labelId = {labelId} />
            <h4>{groupName}</h4>
            <p>{groupDescription}</p>
            <MembersContainer members = { groupMembers }/>
        </li>
    );
}