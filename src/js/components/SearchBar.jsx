export default class SearchBar extends React.Component {
    constructor (props) {
        super(props);

    }


    render () {
        return <div>
            <label>Поиск продуктов<br/>
                <input
                    type = "text"
                    value = { this.props.filterText }
                    onChange = { this.props.funcHandlerInputFilterText }
                />
            </label>
            <br/>
            <label>
                <input
                    type = "checkbox"
                    value = { this.props.isStocked }
                    onChange = { this.props.funcHandlerInputIsStocked }
                />
                Показать только продукты в наличии
            </label>
        </div>
    }
}
