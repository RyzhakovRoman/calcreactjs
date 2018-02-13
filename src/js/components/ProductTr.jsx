export default class ProductTr extends React.Component {
    constructor (props) {
        super(props);

    }


    render () {
        return <tr>
            <td className={(!this.props.product.stocked) ? 'red' : ''}>{this.props.product.name}</td>
            <td>{this.props.product.price}</td>
        </tr>
    }
}