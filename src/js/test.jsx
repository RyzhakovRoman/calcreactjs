import ReactDOM from 'react-dom';

// Компоненты
import SearchBar from './calc_vzr_components/commons/SearchBar';
import RadioInputs from './calc_vzr_components/commons/RadioInputs';

// Дополнительно
import countries from './calc_vzr_components/data/countries';


ReactDOM.render(
    <RadioInputs
        array={countries}
        handlerClickToList={()=>{console.log('click')}}
    />,
    document.getElementById('radio_inputs')
);


// ReactDOM.render(
//     <SearchBar
//         array={countries}
//         handlerClickToList={()=>{console.log('click')}}
//     />,
//     document.getElementById('search_bar')
// );


