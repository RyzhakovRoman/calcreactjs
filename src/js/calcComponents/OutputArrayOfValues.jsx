export default class OutputArrayOfValues extends React.Component {

    makeListOfItems () {
        return this.props.array.map((item) => {
            return <li key = { item.id }>{ item.countryName }</li>;
        })
    }

    render () {
        return <ul>
            { this.makeListOfItems() }
        </ul>
    }
}