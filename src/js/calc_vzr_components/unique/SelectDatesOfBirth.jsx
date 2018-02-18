// Принимает (props):
//

export default class SelectDatesOfBirth extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            dates: ['']
        };

        this.addDate = this.addDate.bind(this);
        this.changeDate = this.changeDate.bind(this);
    }

    addDate () {
        this.setState((prevState) => {
            let nDates;

            if (prevState.dates.length === 5) { return }

            nDates = [].concat(prevState.dates);
            nDates.push("");

            return {
                dates: nDates
            }
        })
    }

    changeDate (date, iPerson) {
        this.setState((prevState) => {
            let nDates = [].concat(prevState.dates);

            if (date.search(/(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}/) !== -1) {
                nDates[iPerson] = date;
            } else {
                nDates[iPerson] = "";
            }

            return {
                dates: nDates
            };
        });
    }

    makeInputs () {
        return this.state.dates.map((date, i) => {
            return <label key={i}>{i+1} выезжающий
                <input
                    type="text"
                    placeholder="дд-мм-гггг"
                    onChange={(e) => {
                        this.changeDate(e.target.value, i)
                    }}
                />
            </label>
        });
    }


    render () {
        return <div>
            <p>Дата рождения</p>

            {this.makeInputs()}

            <button onClick={this.addDate}>+</button>
        </div>
    }
}