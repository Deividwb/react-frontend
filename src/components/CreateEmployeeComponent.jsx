import React, {Component} from 'react';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firtsName:'',
            lastName:'',
            emailId:''
        }
    }
    changeFirstNameHandler=(event)=>{
        this.setState({firstName: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div>
                                <form>
                                    <Label>First Name:</Label>
                                    <input placeholder="First name" name="fisrtName" className="form-control"
                                    value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent;