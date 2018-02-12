import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import products from './products';


export default class FilterableProductTable extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            filterText: '',
            isStocked: false
        }
    }


    render () {
        return <div>Таблица продуктов, с фильтрацией
            <SearchBar />
            <ProductTable products={products}/>
        </div>
    }
}