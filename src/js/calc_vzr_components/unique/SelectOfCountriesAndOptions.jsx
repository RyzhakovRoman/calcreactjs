import SearchBar from './../commons/SearchBar';
import RadioInputs from './../commons/RadioInputs';
import ListWithDeletingItems from './../commons/ListWithDeletingItems';

// Данные для рендеринга
import countries from './../data/countries';
import countries_option from './../data/countries_options';

// Принимает (props):
// array - массив объектов вида: { val: unique, text: '' }
// returnDeletedObjOfArray -

export default class SelectOfCountriesAndOptions extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            countries: [],
            countries_option: {}
        };

        this.addCountry = this.addCountry.bind(this);
    }

    addCountry(country) {
        this.setState((prevState) => {
            let matchFlag = prevState.countries.some((c) => {
                return c === country
            });

            if (!matchFlag) {
                return {
                    countries: prevState.countries.concat(country)
                }
            }
        })
    }


    render () {
        return <div>
            <SearchBar
                array={countries}
                returnSeletedObjOfArray={this.addCountry}
            />
            <RadioInputs
                array={countries_option}
            />
            {/*<ListWithDeletingItems*/}
                {/*array={}*/}
            {/*/>*/}
        </div>
    }
}