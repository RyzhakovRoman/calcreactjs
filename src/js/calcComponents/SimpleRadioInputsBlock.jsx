// ожидает
// массив из объектов { id: '', text: '' }

export default class SimpleRadioInputsBlock extends React.Component {

    makeListOfRadioInputs () {
        return this.props.array.map((item, i) => {
                return <label
                    key={ item.id }
                >
                    <input
                        type='radio'
                        name={ this.props.name }
                        value={ item.id }
                        onChange={ this.props.funcHandlerRadioInputChecked } // определить выбранный по умолчанию
                    />
                    { item.text }
                </label>
        })
    }

    render () {
        return <div>
            { this.makeListOfRadioInputs() }
        </div>
    }

}