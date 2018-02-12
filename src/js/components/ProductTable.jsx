import ProductTr from './ProductTr';
import ProductCategoryTr from './ProductCategoryTr';


export default class ProductTable extends React.Component {
    constructor (props) {
        super(props);

    }


    getFilteredProducts () {
        let lastCategory = '';

        return this.props.products.map((item) => {
            if (item.category !== lastCategory) {
                lastCategory = item.category;
                return <ProductCategoryTr category={item.category} key={item.category}/>
            } else {
                return <ProductTr product={item} key={item.name}/>
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