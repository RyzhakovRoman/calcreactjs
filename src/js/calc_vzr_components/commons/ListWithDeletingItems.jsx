// Принимает (props):
// array - массив объектов вида: { val: unique, text: '' }
// returnDeletedObjOfArray - функция обратного вызова в которую возвращается элемент из переданного массива,
//                           который хотел бы удалить из списка пользователь

export default class ListWithDeletingItems extends React.Component {

    makeListOfItems () {
        return this.props.array.map((item) => {
            return <li
                key={item.val}
            >
                {item.text}
                <span
                    style={{color: 'red', cursor: 'pointer'}}
                    onClick={()=>{this.props.returnDeletedObjOfArray(item)}}
                >
                    &nbsp;уд.
                </span>
            </li>;
        })
    }

    render () {
        return <ul>
            {this.makeListOfItems()}
        </ul>
    }
}