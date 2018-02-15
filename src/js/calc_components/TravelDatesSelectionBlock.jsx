import SimpleRadioInputsBlock from './SimpleRadioInputsBlock';

export default class TravelDatesSelectionBlock extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            tripOnce: {
                dateIn: '',
                dateOut: '',
                amountDays: '',
            },
            tripMultiple: {
                dateIn: '',
                amountDays: '',
            }
        };

        this.dataToRender = {
            forAmountDays: [
                {id: 30, text: '30 дн'},
                {id: 60, text: '60 дн'},
                {id: 90, text: '90 дн'},
                {id: 180, text: '180 дн'},
                {id: 365, text: '365 дн'},
            ]
        };

        this.setDate = this.setDate.bind(this);
        this.setAmountDays = this.setAmountDays.bind(this);
    }

    // setDate(e) {
    //     let newSt = {};
    //     newSt.isMultiple = (e.target.name === 'dateInMultiply') ? true : false;
    //
    //     if (e.target.value.search(/[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/) === -1) {
    //         newSt[e.target.name] = '';
    //         this.setState(newSt);
    //         return;
    //     }
    //     newSt[e.target.name] = e.target.value;
    //     this.setState(newSt)
    // }

    setDate (val, typeTrip, type) {
        this.setState((prevState) => {
            let newState = Object.assign({}, prevState);
            newState[typeTrip][type] = val;
            return newState;
        });
    }


    setAmountDays (val, typeTrip) {
        this.setState((prevState) => {
            let newState = Object.assign({}, prevState);
            newState[typeTrip]['amountDays'] = val;
            return newState;
        });
    }

    makeOptions () {
        let options = [],
            i = 0;
        while (i !== 366) {
            options.push(
                <option value={ i } key={ i }>{ i }</option>
            );
            ++i;
        }
        return options;
    }


    render () {
        return <div>
            <p>TravelDatesSelectionBlock</p>
            <p>Когда едем</p>

            <div>
                <label>
                    Однократно с
                    <br/>
                    <input
                        type="text"
                        value={ this.state.tripOnce.dateIn }
                        onChange={ (e) => { this.setDate(e.target.value, 'tripOnce', 'dateIn') } }
                        placeholder="yyyy-mm-dd"
                    />
                </label>
                <br/>
                <label>
                    По
                    <br/>
                    <input
                        type="text"
                        value={ this.state.tripOnce.dateOut }
                        onChange={ (e) => { this.setDate(e.target.value, 'tripOnce', 'dateOut') } }
                        placeholder="yyyy-mm-dd"
                    />
                </label>
                <br/>
                На
                <br/>
                <select
                    name="amountDays"
                    onClick={ (e) => { this.setAmountDays(e.target.value, 'tripOnce') } }
                >
                    { this.makeOptions() }
                </select>
            </div>
            <div>
                <SimpleRadioInputsBlock
                    array={ this.dataToRender.forAmountDays }
                    name={ 'countryOption' }
                    funcHandlerRadioInputChecked={ (e) => { this.setAmountDays(e.target.value, 'tripMultiple') } }
                />
                {/*<label>*/}
                    {/*Многократные с*/}
                    {/*<br/>*/}
                    {/*<input*/}
                        {/*type="text"*/}
                        {/*value={ this.state.tripMultiple.dateIn }*/}
                        {/*onChange={ (e) => { this.setDate(e.target.value, 'tripMultiple', 'dateIn') } }*/}
                        {/*placeholder="yyyy-mm-dd"*/}
                    {/*/>*/}
                {/*</label>*/}
                {/*<br/>*/}
                {/*<label>*/}
                    {/*<input*/}
                        {/*type = "radio"*/}
                        {/*name = "opions"*/}
                        {/*value = "opt1"*/}
                    {/*/>*/}
                    {/*30 дн*/}
                {/*</label>*/}
                {/*<br/>*/}
                {/*<label>*/}
                    {/*<input*/}
                        {/*type = "radio"*/}
                        {/*name = "opions"*/}
                        {/*value = "opt2"*/}
                    {/*/>*/}
                    {/*60 дн*/}
                {/*</label>*/}
                {/*<br/>*/}
                {/*<label>*/}
                    {/*<input*/}
                        {/*type = "radio"*/}
                        {/*name = "opions"*/}
                        {/*value = "opt3"*/}
                    {/*/>*/}
                    {/*90 дн*/}
                {/*</label>*/}
                {/*<br/>*/}
                {/*<label>*/}
                    {/*<input*/}
                        {/*type = "radio"*/}
                        {/*name = "opions"*/}
                        {/*value = "opt4"*/}
                    {/*/>*/}
                    {/*180 дн*/}
                {/*</label>*/}
            </div>
        </div>
    }
}