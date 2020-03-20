import React from 'react';



class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value.toUpperCase() });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
        <input type='text' value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type='submit' value='Submit' />
            </form>

        );
    }
}


class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        event.preventDefault();
    }

    handleSubmit(event) {
        alert('An essay was submitted ' + this.state.value);
        event.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type='submit' value='Submit' />
            </form>
        );
    }
}


class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is ' + this.state.value);
        event.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value='coconut'>Coconut</option>
                        <option value='grapefruit'>Grapefruit</option>
                        <option value='lime'>Lime</option>
                        <option value='mango'>Mango</option>
                    </select>
                </label>
                <input type='submit' value='Submit' />
            </form>
        );
    }
}


class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.HandleInputChange = this.HandleInputChange.bind(this);
    }

    HandleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    render () {
        return (
            <form>
                <label>
                    Is going:
                    <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.HandleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                </label>
            </form>
        )
    }
}


export default FlavorForm








