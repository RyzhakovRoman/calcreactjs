// Принимает (props):
// array - массив объектов вида: { val: unique, label: '' }
// spanLabelIsAfter - для понимания куда ставить метку
// name - имя для блока переключателей
// handlerChange - функция обработки выбора
export default class RadioInputs extends React.Component {

    getRadioInputsOfArray () {
        return this.props.array.map((item) => {
            if (item.text.toLowerCase().indexOf(this.props.filterText) === -1) {
                return '';
            } else {
                return <label>
                    {(this.props.spanLabelIsAfter) ? '' : <span>{item.text}</span>}
                    <input
                        value={item.val}
                        key={item.val + item.label}
                    />;
                </label>
                   // {item.text}
            }
        })
    }

    render () {
        return <div>
            {this.getRadioInputsOfArray()}
        </div>
    }
}