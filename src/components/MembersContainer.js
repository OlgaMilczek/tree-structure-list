import Endpoint from './Endpoint'; 
import NodeRender from './NodeRender';

import findInputType from './findInputType ';

export default function MembersContainer({ members }) {
    const membersContainer = members.map((member, id) => {
        if (member.type === 'endpoint') {
            return < Endpoint 
                key={id} 
                memberName = {member.name} 
                memberDescription = {member.description}/>;
        } else {
            let inputTypeValue = findInputType(member.type);
            return <NodeRender 
                key={id}
                inputType = {inputTypeValue} 
                groupName = {member.name}
                groupDescription = {member.description}
                groupMembers = {member.members}
                groupId = {id} />;
        }
    });

    return (
        <ul>
            {membersContainer}
        </ul>
    );
}