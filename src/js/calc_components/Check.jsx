export default class Check extends React.Component {
    constructor (props) {
        super(props);

    }


    render () {
        return <div>
            <span>Check</span>
            <br/>
            <span>Чек</span>

            <h3>Данные для расчета</h3>
            <p>Куда едем: Египет</p>
            <p>Когда едем: 16.02.2018 - 26.02.2018</p>
            <p>Даты рождения выезжающих: (1 чел.)</p>

            <h3>Цена программы страхования (итоговая)</h3>
            <p>Валюта срахования - USD</p>
            <p>Основная программа - 11.18</p>

            <h3>Дополнительные программы</h3>
            <p>Гражданская ответственность: нет</p>
            <p>Несчастный случай: нет</p>
            <p>Утрата багажа: нет</p>
            <p>Активный отдых: нет</p>

            <h2>ИТОГО: 11.18</h2>
            <h2>ИТОГО (в рублях): 648.63</h2>
        </div>
    }
}