import List from './List';

// Принимает (props):
// array - массив объектов вида: { id: unique, text: '' }
// handlerClickToList - функция клика по всему списку
export default class SearchBar extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            filterText: ''
        };

        this.setFilterText = this.setFilterText.bind(this);
    }

    setFilterText (e) {
        this.setState({
            filterText: e.target.value
        })
    }


    render () {
        return <div>
            <p>Поисковой бар</p>

            <input
                type="text"
                value={this.state.filterText}
                onChange={this.setFilterText}
            />

            <List
                filterText={this.state.filterText}
                array={this.props.array}
                handlerClick={this.props.handlerClickToList}
            />
        </div>
    }
}