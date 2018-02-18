import ReactDOM from 'react-dom';


// Компоненты общие
// import SearchBar from './calc_vzr_components/commons/SearchBar';
// import RadioInputs from './calc_vzr_components/commons/RadioInputs';
// import ListWithDeletingItems from './calc_vzr_components/commons/ListWithDeletingItems';


// Компоненты уникальные
// import SelectOfCountriesAndOptions from './calc_vzr_components/unique/SelectOfCountriesAndOptions';
// import SelectTravelDates from './calc_vzr_components/unique/SelectTravelDates';
import SelectDatesOfBirth from './calc_vzr_components/unique/SelectDatesOfBirth';


// Дополнительно
// import countries from './calc_vzr_components/data/countries';
// import countries_option from './calc_vzr_components/data/countries_options';
// import test_array_for_lwdi from './calc_vzr_components/data/test_array_for_lwdi';


ReactDOM.render(
    <SelectDatesOfBirth/>,
    document.getElementById('select_travel_dates')
);


// ReactDOM.render(
//     <SelectTravelDates/>,
//     document.getElementById('select_travel_dates')
// );


// ReactDOM.render(
//     <SelectOfCountriesAndOptions
//         // returnDeletedItemOfArray={}
//     />,
//     document.getElementById('select_of_countries_and_options')
// );


// ReactDOM.render(
//     <ListWithDeletingItems
//         array={test_array_for_lwdi}
//         returnDeletedObjOfArray={
//             (obj) => {
//                 console.log('handlerRemoveFromList');
//                 console.log(obj);
//                 console.log(test_array_for_lwdi[0]);
//                 console.log(obj === test_array_for_lwdi[0])
//             }
//         }
//     />,
//     document.getElementById('list_with_deleting_items')
// );


// ReactDOM.render(
//     <RadioInputs
//         array={countries_option}
//         name='countriesOption'
//         handlerClickToList={()=>{console.log('click')}}
//     />,
//     document.getElementById('radio_inputs')
// );


// ReactDOM.render(
//     <SearchBar
//         array={countries}
//         handlerClickToList={()=>{console.log('click')}}
//     />,
//     document.getElementById('search_bar')
// );


