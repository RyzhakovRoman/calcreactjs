export default class ProductCategoryTr extends React.Component {
    constructor (props) {
        super(props);

    }


    render() {
        return <tr>
            <td colSpan={2}>{this.props.category}</td>
        </tr>
    }
}