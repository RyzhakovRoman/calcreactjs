import SimpleList from './SimpleList';

export default class DropInListInput extends React.Component {
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
            <p>DropInListInput</p>
            <input
                type = "text"
                value = { this.state.filterText }
                onChange = { this.setFilterText }
            />
            <SimpleList
                filterText = { this.state.filterText }
                arrayItems = { this.props.arrayItems }
                funcHandlerClickToItem = { this.props.funcHandlerClickToItem }
            />
        </div>
    }
}