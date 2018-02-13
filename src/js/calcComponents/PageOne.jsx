import CountrySelectionBlock from './CountrySelectionBlock';
import TravelDatesSelectionBlock from './TravelDatesSelectionBlock';
import DatesOfBirthSelectionBlock from './DatesOfBirthSelectionBlock';


export default class PageOne extends React.Component {
    constructor (props) {
        super(props);
    }


    render () {
        return <div>
            <span>PageOne</span>
            <CountrySelectionBlock/>
            <TravelDatesSelectionBlock/>
            <DatesOfBirthSelectionBlock/>
        </div>
    }
}