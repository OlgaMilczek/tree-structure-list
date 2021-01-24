import MembersContainer from './MembersContainer';
import InputLabel from './InputLabel';

export default function NodeRender( {parentLabel, inputType, groupName, groupMembers, groupId, groupDescription } ) {
    let labelId = `${parentLabel}-${groupName}-${groupId}`;

    const labelText = <h4 className='heading__node'>{groupName}</h4>;

    return (
        <li className ='tree__node'>
            <input type={inputType} id={labelId} name = {parentLabel} className = 'input'/>
            <InputLabel inputType = {inputType} labelId = {labelId} labelText={labelText}/>
            <p className='description__node' >{groupDescription}</p>
            <MembersContainer members = { groupMembers } parentLabel = {labelId} />
            <div className = 'vertical-line'></div>
        </li>
    );
}