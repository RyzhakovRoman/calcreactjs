export default class TravelDatesSelectionBlock extends React.Component {
    constructor (props) {
        super(props);

    }


    render () {
        return <div>
            <span>TravelDatesSelectionBlock</span>
            <br/>
            <span>Когда едем</span>
            <br/>
            <div>
                <label>
                    Однократно с
                    <br/>
                    <input type="datetime-local"/>
                </label>
                <br/>
                <label>
                    По
                    <br/>
                    <input type="datetime-local"/>
                </label>
                <br/>
                На
                <br/>
                <select name="">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div>
                <label>
                    Многократные с
                    <br/>
                    <input type="datetime-local"/>
                </label>
                <br/>
                <label>
                    <input
                        type = "radio"
                        name = "opions"
                        value = "opt1"
                    />
                    30 дн
                </label>
                <br/>
                <label>
                    <input
                        type = "radio"
                        name = "opions"
                        value = "opt2"
                    />
                    60 дн
                </label>
                <br/>
                <label>
                    <input
                        type = "radio"
                        name = "opions"
                        value = "opt3"
                    />
                    90 дн
                </label>
                <br/>
                <label>
                    <input
                        type = "radio"
                        name = "opions"
                        value = "opt4"
                    />
                    180 дн
                </label>
            </div>
        </div>
    }
}