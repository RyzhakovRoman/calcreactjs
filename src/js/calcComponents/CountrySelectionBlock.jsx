import DropInListInput from './DropInListInput';
import OutputArrayOfValues from './OutputArrayOfValues';
import countries from './data/countries';


export default class CountrySelectionBlock extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            countries: [],
        };

        this.pushCountry = this.pushCountry.bind(this);
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


    render () {
        return <div>
            <span>CountrySelectionBlock</span>
            <br/>
            <span>Куда едем</span>
            <br/>
            <DropInListInput
                arrayItems = { countries }
                funcHandlerClickToItem = { this.pushCountry }
            />
            <OutputArrayOfValues
                array = { this.state.countries }
            />
            <div>
                <label>
                    <input
                        type = "radio"
                        name = "opions"
                        value = "opt1"
                        // checked = { true }
                    />
                    Выбранные страны
                </label>
                <br/>
                <label>
                    <input
                        type = "radio"
                        name = "opions"
                        value = "opt2"
                    />
                    Страны шенгенского союза + выбранные
                </label>
                <br/>
                <label>
                    <input
                        type = "radio"
                        name = "opions"
                        value = "opt3"
                    />
                    Весь мир, исключая США и Канаду
                </label>
                <br/>
                <label>
                    <input
                        type = "radio"
                        name = "opions"
                        value = "opt4"
                    />
                    Только РФ
                </label>
            </div>
        </div>
    }
}