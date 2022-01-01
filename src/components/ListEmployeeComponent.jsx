import React, {Component} from 'react';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees:[]
        }
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th>Employee Firts Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email id</th>
                            <th>Employee Actions</th>
                        </tr>

                        </thead>

                        <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                    <tr Key = {employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                    </tr>
                            )
                        }
                        </tbody>

                    </table>

                </div>

            </div>
        );
    }
}

export default ListEmployeeComponent;