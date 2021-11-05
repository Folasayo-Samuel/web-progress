
class GadgetForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit= {this.handleSubmit}>
                <label htmlFor="Full Name">
                   Full Name
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Your Name" />
                </label>
                <label htmlFor="Phone Number">
                    Phone Number
                    <input type="tel" value={this.state.value} onChange={this.handleChange} placeholder="Enter Phone Number"/>
                </label>
                <label htmlFor="Date Of Birth">
                    Date Of Birth
                    <input type="date" value={this.state.value} onChange={this.handleChange} placeholder="Enter Date Of Birth"/>
                </label>
                <label htmlFor="Email Address">
                    Email Address
                    <input type="email" value={this.state.value} onChange={this.handleChange} placeholder="Enter Your Email"/>
                </label>

                <label htmlFor="Contact Address">
                    Email Address
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Your Address"/>
                </label>
                <label htmlFor="Type &amp; Model of the insured form">
                Type &amp; Model of the insured form
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Your Type &amp; Model"/>
                </label>
                <label htmlFor="Value of the insured item">
                Value of the insured item
                    <input type="number" value={this.state.value} onChange={this.handleChange} placeholder="Enter Your Value of the insured item"/>
                </label>
                <label htmlFor="IMEI number">
                IMEI number
                    <input type="number" value={this.state.value} onChange={this.handleChange} placeholder="Enter Your IMEI number"/>
                </label>
                <input type="submit"  value="Submit" />
            </form>
        );
    }
}

export default GadgetForm;