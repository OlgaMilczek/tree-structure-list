export default function ErrorMessage( { error }) {
    return <div className='error'>
        <h1>Sorry, an error occurred...</h1>
        <p className='text-danger'>{error.message}</p>
    </div>;
}