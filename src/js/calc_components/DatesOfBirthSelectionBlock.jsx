export default class datesOfBirthSelectionBlock extends React.Component {
    constructor (props) {
        super(props);

    }


    render () {
        return <div>
            <span>DatesOfBirthSelectionBlock</span>
            <br/>
            <span>Дата рождения</span>
            <br/>
            <select name="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <select name="">
                <option value="Март">Март</option>
                <option value="Апрель">Апрель</option>
                <option value="Май">Май</option>
            </select>
            <select name="">
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
            </select>
        </div>
    }
}