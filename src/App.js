import { useState, useEffect } from 'react';

//React loader import 
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import fetchData from './components/fetchData';
import ErrorMessage from './components/ErrorMessage';
import TreeRender from './components/TreeRender';

import './scss/App.scss';

function App() {
    const [errorMessage, setError] = useState(null);
    const [listTree, setListTree] = useState(undefined);

    const handleError = (error) => {
        setError(error);
    };

    useEffect(() => {
        if (listTree === undefined) {
            fetchData().then(response => setListTree(response))
                .catch(error => handleError(error));
        }
    }, [listTree]);


    if ( errorMessage )  {
        return (
            <ErrorMessage error = {errorMessage} />
        );
    }

    else if (listTree === undefined) {
        return (
            <Loader 
                className = 'flex-center'
                type="Oval"
                color="#2998ff"
                height={50}
                width={50}
                timeout={3000} //3 secs
            />
        );
    }
    
    return (
        <div className="App">
            <TreeRender tree={listTree}/>
        </div>
    );
}

export default App;
