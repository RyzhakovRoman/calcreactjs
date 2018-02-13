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

        this.setFilterText = this.setFilterText.bind(this);
        this.setIsStocked =this.setIsStocked.bind(this);
    }

    setFilterText (e) {
        this.setState({
            filterText: e.target.value
        });
    }

    setIsStocked (e) {
        this.setState({
            isStocked: e.target.checked
        });
    }


    render () {
        return <div>Таблица продуктов, с фильтрацией
            <SearchBar
                filterText = { this.state.filterText }
                isStoked = { this.state.isStocked }
                funcHandlerInputFilterText = { this.setFilterText }
                funcHandlerInputIsStocked = { this.setIsStocked }
                />
            <ProductTable
                products = { products }
                filterText = { this.state.filterText }
                isStocked = { this.state.isStocked }
            />
        </div>
    }
}