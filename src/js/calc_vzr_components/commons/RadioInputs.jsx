// Принимает (props):
// array - массив объектов вида: { val: unique, label: '' }
// name - имя для блока переключателей
// handlerSelectedOption - функция принимающая выбранную опцию

export default class RadioInputs extends React.Component {

    getRadioInputsOfArray () {
        return this.props.array.map((item) => {
            return <label key={item.val}>
                <input
                    type='radio'
                    name={this.props.name}
                    onChange={()=>{this.props.handlerSelectedOption(item)}}
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