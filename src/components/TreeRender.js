import MembersContainer from './MembersContainer';
import InputLabel from './InputLabel';

import findInputType from './findInputType ';

export default function TreeRender({tree}) {
    let labelId = `tree-${tree['tree title']}-`;
    const descriptionContainer = tree['multi-line description'].map((description, id) => {
        return <p key = {id}>{description}</p>;
    }); 
    let inputType = findInputType(tree.type); 


    return (
        <div>
            <input type={inputType} id={labelId} name = {tree.name} className = 'tree__input' />
            <InputLabel inputType = {inputType} labelId = {labelId} />
            <h1>{tree['tree title']}</h1>
            {descriptionContainer}
            <MembersContainer  members={tree.members}/>
        </div>
    );
}