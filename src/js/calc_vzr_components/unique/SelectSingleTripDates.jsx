// Принимает (props):
// handlerDate - функция обработчик уже валидной даты или количества дней, принимает дату, тип даты и тип поездки

export default class SelectSingleTripDates extends React.Component {

    render () {
        return <div>
            <p>Однократная</p>

            <label>С
                <input
                    type="text"
                    placeholder="дд-мм-гггг"
                    onChange={(e)=>{this.props.handlerDate(e.target.value, 'dateIn', 'singleTrip')}}
                />
            </label>

            <span>&nbsp;</span>
            
            <label>По
                <input
                    type="text"
                    placeholder="дд-мм-гггг"
                    onChange={(e)=>{this.props.handlerDate(e.target.value, 'dateOut', 'singleTrip')}}
                />
            </label>

            <span>&nbsp; На</span>
            <select
                name="sel"
                onChange={(e)=>{this.props.handlerDate(e.target.value, 'amount', 'singleTrip')}}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
    }
}