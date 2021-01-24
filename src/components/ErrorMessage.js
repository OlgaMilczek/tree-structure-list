export default function ErrorMessage( { error }) {
    return <div className='error'>
        <h1 className='error__heading'>Sorry, an error occurred...</h1>
        <p className='error__text'>{error.message}</p>
    </div>;
}