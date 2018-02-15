import CountrySelectionBlock from './CountrySelectionBlock';
import TravelDatesSelectionBlock from './TravelDatesSelectionBlock';
import DatesOfBirthSelectionBlock from './DatesOfBirthSelectionBlock';


export default class PageOne extends React.Component {
    constructor (props) {
        super(props);

        // this.state = {
        //     countries: [],
        //     countryInputOptions: {},
        //     datesTravel: {
        //         dateIn: '',
        //         dateOut: '',
        //         amountDays: null
        //     },
        //     birthdaysDates: []
        // };

        this.setCountries = this.setCountries.bind(this);
    }

    setCountries (data) {
        console.log('setCountries');
        console.log(data);

        this.props.funcHandlerOfCorrectlyEnteredData(data);
    }


    render () {
        return <div>
            <span>PageOne</span>
            <CountrySelectionBlock funcHandlerOfCorrectlyEnteredData={ this.setCountries }/>
            <TravelDatesSelectionBlock/>
            <DatesOfBirthSelectionBlock/>
        </div>
    }
}