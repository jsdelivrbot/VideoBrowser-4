import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBw37dPXpTpB5-DyCKuAw3PHohR7PNAP4s';

const App = () => {
    return <div>
                <SearchBar />
           </div>;
}

ReactDOM.render(<App />,
document.querySelector('.container'))