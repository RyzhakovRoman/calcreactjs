// Принимает (props):
// array - массив объектов вида: { id: unique, text: '' }
// handlerClick - функция клика по всему списку
export default class List extends React.Component {

    makeListOfItems () {
        return this.props.array.map((item) => {
            if (item.text.toLowerCase().indexOf(this.props.filterText) === -1) {
                return '';
            } else {
                return <li
                    value={item.id}
                    key={item.id}
                >
                    {item.text}
                </li>;
            }
        })
    }

    render () {
        return <ul
            className={(this.props.filterText) ? 'show' : 'hide'}
            onClick={this.props.handlerClick}
        >
            {this.makeListOfItems()}
        </ul>
    }
}