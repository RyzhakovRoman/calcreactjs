export default class SimpleList extends React.Component {

    makeListOfItems () {
        return this.props.arrayItems.map((item) => {
            if (item.text.toLowerCase().indexOf(this.props.filterText) === -1) {
                return '';
            } else {
                return <li
                    value={ item.id }
                    key={ item.id }
                >
                    { item.text }
                </li>;
            }
        })
    }

    render () {
        return <ul
            className={ (this.props.filterText) ? 'show' : 'hide' }
            onClick={ this.props.funcHandlerClickToItem }
        >
            { this.makeListOfItems() }
        </ul>
    }
}