import ProductTr from './ProductTr';
import ProductCategoryTr from './ProductCategoryTr';


export default class ProductTable extends React.Component {
    constructor (props) {
        super(props);

    }


    getFilteredProducts () {
        let lastCategory = '';

        return this.props.products.map((prod) => {
            if (prod.name.toLowerCase().indexOf(this.props.filterText) === -1 || (!prod.stocked && this.props.isStocked)) {
                return;
            }
            if (prod.category !== lastCategory) {
                lastCategory = prod.category;
                return <ProductCategoryTr category={prod.category} key={prod.category}/>
            } else {
                return <ProductTr product={prod} key={prod.name}/>;
            }
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