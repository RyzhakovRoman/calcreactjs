export default class ProductTr extends React.Component {
    constructor (props) {
        super(props);
    }



    render () {
        return <tr>
            <td className={(!this.props.stocked) ? 'red' : ''}>{this.props.name}</td>
            <td>{this.props.price}</td>
        </tr>
    }
}