import ProductTr from './ProductTr';

export default class ProductTable extends React.Component {
    constructor (props) {
        super(props);
    }

    getFilteredProducts () {
        return this.props.products.map((item) => {
            return <ProductTr name={item.name} price={item.price} stocked={item.stocked} key={item.name}/>
        });
    }

    render () {
        return <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {this.getFilteredProducts()}
            </tbody>
        </table>
    }
}