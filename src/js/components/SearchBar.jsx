export default class SearchBar extends React.Component {
    constructor (props) {
        super(props);
    }


    render () {
        return <div>
            <label>Поиск продуктов<br/>
                <input type="text"/>
            </label>
            <br/>
            <label>
                <input type="checkbox"/>
                Показать только продукты в наличии
            </label>
        </div>
    }
}