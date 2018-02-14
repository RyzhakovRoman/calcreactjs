import DropInListInput from './DropInListInput';
import OutputOfSelectedCountries from './OutputOfSelectedCountries';
import SimpleRadioInputsBlock from './SimpleRadioInputsBlock';
import countries from './data/countries';
import countriesForRadioInputs from './data/countriesForRadioInputs';


export default class CountrySelectionBlock extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            countries: [],
            countryInputOptions: { id: 999, countryName: 'Выбранные страны' }
        };

        this.pushCountry = this.pushCountry.bind(this);
        this.handleOption = this.handleOption.bind(this);
    }

    pushCountry (e) {
        let c = {
            id: e.target.value,
            countryName: e.target.innerText
        };

        this.setState((prevState) => {
            let matchFlag = false;
            prevState.countries.forEach((country) => {
                if (country.id === c.id && country.countryName === c.countryName) {
                    matchFlag = true;
                }
            });
            if (!matchFlag) {
                return {
                    countries: prevState.countries.concat(c)
                }
            }
        });
    }

    handleOption (e) {
        this.setState({
            countryInputOptions: {
                id: +e.target.value,
                countryName: e.target.innerText
            }
        })
    }


    componentDidUpdate () {
        console.log('componentDidUpdate');
        this.props.funcHandlerOfCorrectlyEnteredData(this.state);
    }


    render () {
        return <div>
            <p>CountrySelectionBlock</p>
            <p>Куда едем</p>

            <DropInListInput
                arrayItems={ countries }
                funcHandlerClickToItem={ this.pushCountry }
            />

            <OutputOfSelectedCountries
                countries={ this.state.countries }
                countryInputOptions={ this.state.countryInputOptions }
            />

            <SimpleRadioInputsBlock
                array={ countriesForRadioInputs }
                name={ 'countryOption' }
                checkedId={ 0 }
                funcHandlerRadioInputChecked={ this.handleOption }
            />
        </div>
    }
}