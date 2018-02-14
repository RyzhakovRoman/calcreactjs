export default class OutputOfSelectedCountries extends React.Component {

    makeListOfItems () {
        let arrCountries = [].concat(this.props.countries);

        switch (this.props.countryInputOptions.id) {

            case 999:
                return arrCountries.map((item) => {
                    return <li key={item.id}>{item.countryName}</li>;
                });

            case 253:
                arrCountries.push({ id: 253, countryName: 'Страны шенгенского союза' });
                return arrCountries.map((item) => {
                    return <li key={item.id}>{item.countryName}</li>;
                });

            case 254:
                return <li key={ 254 }>{ 'Весь мир, исключая США и Канаду' }</li>;

            case 252:
                return <li key={ 252 }>{ 'Только РФ' }</li>;

        }
    }

    render () {
        return <ul>
            { this.makeListOfItems() }
        </ul>
    }
}