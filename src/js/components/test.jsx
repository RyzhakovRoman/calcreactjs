import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import products from './products';


export default class FilterableProductTable extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            filterText: '',
            isStocked: false
        };

        this.handleInputFilterText = this.handleInputFilterText.bind(this);
    }

    handleInputFilterText (e) {
        console.dir(e.target.value);
    }


    render () {
        return <div>Таблица продуктов, с фильтрацией
            <SearchBar
                // filterText = { this.state.filterText }
                // funcHandlerInputFilterText = { this.handleInputFilterText }
            />
            {/*<ProductTable*/}
            {/*products = { products }*/}
            {/*/>*/}
        </div>
    }
}