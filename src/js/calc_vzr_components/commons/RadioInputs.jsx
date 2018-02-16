// Принимает (props):
// array - массив объектов вида: { val: unique, label: '' }
// name - имя для блока переключателей
// handlerChange - функция обработки выбора

export default class RadioInputs extends React.Component {

    getRadioInputsOfArray () {
        return this.props.array.map((item) => {
            return <label key={item.val}>
                <input
                    type='radio'
                    name={this.props.name}
                    value={item.val}
                />
                <span>{item.label}</span>
                <br/>
            </label>
        })
    }

    render () {
        return <div>
            {this.getRadioInputsOfArray()}
        </div>
    }
}