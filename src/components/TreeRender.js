import MembersContainer from './MembersContainer';
import InputLabel from './InputLabel';

import findInputType from './findInputType';

export default function TreeRender({tree}) {
    let labelId = `tree-${tree['tree title']}`;
    const descriptionContainer = tree['multi-line description'].map((description, id) => {
        return <p className = 'description__title' key = {id}>{description}</p>;
    }); 
    let inputType = findInputType(tree.type); 

    let labelText = <h1 className='heading__primary'>{tree['tree title']}</h1>;

    return (
        <div className = 'tree'>
            <input type={inputType} id={labelId} name = {tree.name} className = 'input'/>
            <InputLabel parentLabel = {labelId} inputType = {inputType} labelId = {labelId} labelText = {labelText}/>
            {descriptionContainer}
            <MembersContainer  members={tree.members}  parentLabel={labelId}/>
            <div className = 'vertical-line'></div>
        </div>
    );
}