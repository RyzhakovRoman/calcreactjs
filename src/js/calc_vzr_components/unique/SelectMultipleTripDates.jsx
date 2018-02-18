// Принимает (props):
// handlerDate - функция обработчик уже валидной даты или количества дней, принимает дату, тип даты и тип поездки

export default class SelectMultipleTripDates extends React.Component {
    constructor (props) {
        super(props);
        this.nameRadio = 'amount';

        this.handleAmountDays = this.handleAmountDays.bind(this);
    }

    handleAmountDays (e) {
        this.props.handlerDate(e.target.value, this.nameRadio, 'multipleTrip');
    }


    render () {
        return <div>
            <p>Многократная</p>

            <label>С
                <input
                    type="text"
                    placeholder="дд.мм.гггг"
                    onChange={(e)=>{this.props.handlerDate(e.target.value, 'dateIn', 'multipleTrip')}}
                />
            </label>

            <label>
                <input
                    type="radio"
                    name={this.nameRadio}
                    value={30}
                    onChange={this.handleAmountDays}
                />
                30 дн
            </label>
            <label>
                <input
                    type="radio"
                    name={this.nameRadio}
                    value={60}
                    onChange={this.handleAmountDays}
                />
                60 дн
            </label>
            <label>
                <input
                    type="radio"
                    name={this.nameRadio}
                    value={90}
                    onChange={this.handleAmountDays}
                />
                90 дн
            </label>
            <label>
                <input
                    type="radio"
                    name={this.nameRadio}
                    value={180}
                    onChange={this.handleAmountDays}
                />
                180 дн
            </label>
            <label>
                <input
                    type="radio"
                    name={this.nameRadio}
                    value={365}
                    onChange={this.handleAmountDays}
                />
                365 дн
            </label>
        </div>
    }
}