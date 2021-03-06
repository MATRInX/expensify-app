import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            //id: props.expense ? props.expense.id : '',
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };   
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        // Jesli nie ma wartości to można kasować del lub bckspace gdy coś już wpisalismy
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) { //Cyfra na pocz. i ile chcemy cyfr potem, max 1 raz ropka i max 2 cyfry 
            this.setState({ amount });
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    };
    onSubmit = (e) => {
        e.preventDefault();
        
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: this.state.description ? 'Please provide amount!' : 'Please provide description' }));
        } else {
            this.setState(()=>({ error: '' })); 
            this.props.onSubmit({
                //id: this.state.id,
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input 
                        type="text"
                        className="text-input"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        className="text-input"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        className="textarea"
                        placeholder="Add a note to your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <div>
                        <button className="button">
                            {this.props.type ==='edit' ? 
                            'Save Expense' :
                            'Add Expense'}
                        </button>
                    </div>
                </form>
        );
    };
}

export default ExpenseForm;