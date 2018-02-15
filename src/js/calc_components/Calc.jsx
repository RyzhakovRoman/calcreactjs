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
            },
            localState: {
                step: 1
            }
        };

        this.calculate = this.calculate.bind(this);
        this.setDataForFirstCalculation = this.setDataForFirstCalculation.bind(this);
    }

    setDataForFirstCalculation (data) {
        console.log('setDataForFirstCalculation');
        console.dir(data);
    }

    calculate () {
        console.log('calculation');
    }


    render () {
        return <div>
            <span>Calc</span>
            <PageOne funcHandlerOfCorrectlyEnteredData={ this.setDataForFirstCalculation }/>
            <Check/>
            <button onClick={ this.calculate }>Рассчитать</button>
        </div>
    }
}