export default function Endpoint ({ memberName, memberDescription }) {
    return (
        <li>
            <h4>{memberName}</h4>
            <p>{memberDescription}</p>
        </li>
    );
}