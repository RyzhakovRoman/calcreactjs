import PageOne from './PageOne';
import Check from './Check';

export default class Calc extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            dataForCalc: {
                countries: [],
                datesTravel: {
                    dateIn: '',
                    dateOut: '',
                    amountDays: null
                },
                birthdaysDates: [],
            }
        }
    }


    render () {
        return <div>
            <span>Calc</span>
            <PageOne/>
            <Check/>
            <button>Рассчитать</button>
        </div>
    }
}