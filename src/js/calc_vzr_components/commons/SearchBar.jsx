import List from './List';

// Принимает (props):
// array - массив объектов вида: { id: unique, text: '' }
// handlerSelectedItem - функция обратного вызова в которую возвращается элемент из переданного массива,
//                       который хотел бы выбрать из списка пользователь

export default class SearchBar extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            filterText: ''
        };

        this.setFilterText = this.setFilterText.bind(this);
        this.handleClickOnItem = this.handleClickOnItem.bind(this);
    }

    setFilterText (e) {
        this.setState({
            filterText: e.target.value
        })
    }

    handleClickOnItem (item) {
        this.setState({
            filterText: ''
        });
        this.props.handlerSelectedItem(item);
    }


    render () {
        return <div>
            <input
                type="text"
                value={this.state.filterText}
                onChange={this.setFilterText}
            />

            <List
                filterText={this.state.filterText}
                array={this.props.array}
                returnSeletedObjOfArray={this.handleClickOnItem}
            />
        </div>
    }
}