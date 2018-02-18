// Принимает (props):
// array - массив объектов вида: { id: unique, text: '' }
// filterText - текст для фильтрации массива перед выводом
// handlerSelectedItem - функция обратного вызова в которую возвращается элемент из переданного массива,
//                       который хотел бы выбрать из списка пользователь

export default class List extends React.Component {

    makeListOfItems () {
        return this.props.array.map((item) => {
            if (item.text.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) {
                return '';
            } else {
                return <li
                    key={item.id}
                    onClick={()=>{this.props.handlerSelectedItem(item)}}
                >
                    {item.text}
                </li>;
            }
        })
    }


    render () {
        return <ul className={(this.props.filterText) ? 'show' : 'hide'}>
            {this.makeListOfItems()}
        </ul>
    }
}