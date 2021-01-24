export default function Endpoint ({ memberName, memberDescription, id}) {
    let backgroundColorClass; 
    if (id%2 === 0) {
        //0dd element. Index start at 0 so the first element is 0 and so on. 
        backgroundColorClass = '--odd';
    }

    return (
        <li className ={`tree__endpoint ${backgroundColorClass}`}>
            <h4 className='heading__endpoint'>{memberName}</h4>
            <p className='description__endpoint'>{memberDescription}</p>
        </li>
    );
}