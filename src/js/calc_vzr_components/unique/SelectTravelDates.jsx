import SelectSingleTripDates from './SelectSingleTripDates';
import SelectMultipleTripDates from './SelectMultipleTripDates';

// Принимает (props):
//

export default class SelectTravelDates extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            singleTrip: {
                dateIn: '',
                dateOut: '',
                amount: ''
            },
            multipleTrip: {
                dateIn: '',
                amount: ''
            }
        };

        this.setTripDate = this.setTripDate.bind(this);
        this.validateDate = this.validateDate.bind(this);
    }

    setTripDate (date, typeDate, typeTrip) {
        this.setState((prevState) => {
            let nS = {};
            Object.assign(nS, prevState);
            nS[typeTrip][typeDate] = date;
            return nS;
        });
    }

    validateDate (date, typeDate, typeTrip) {
        if (date.search(/(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}/) !== -1 || typeDate === 'amount') {
            this.setTripDate(date, typeDate, typeTrip);
        } else {
            this.setTripDate('', typeDate, typeTrip);
        }
    }


    render () {
        return <div>
            <SelectSingleTripDates
                handlerDate={this.validateDate}
            />
            <SelectMultipleTripDates
                handlerDate={this.validateDate}
            />
        </div>
    }
}