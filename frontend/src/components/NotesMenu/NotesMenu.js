import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import '../../App.css';

class NotesMenu extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="App-Container container">
                <div className="row padding-top">
                    <div className="form-inline form-group col-md-3">
                        <span className="px-2">From:</span>
                        <input class="form-control" name="fromDate" type="date"/>
                    </div>
                    <div className="form-inline form-group col-md-3">
                        <span className="px-2">To:</span>
                        <input className="form-control" name="toDate" type="date"/>
                    </div>

                    <div className="form-inline form-group col-md-3">
                        <span className="px-2">Category:</span>
                        <select name="category" className="form-control">
                            <option>All</option>
                        </select>
                    </div>

                    <div className="form-inline form-group col-md-3">
                        <button type="button" class="btn btn-primary margin-right">Primary</button>
                        <button type="button" class="btn btn-secondary">Secondary</button>
                    </div>
                </div>

                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Title</th>
                            <th className="col-width"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>date</td>
                            <td>title</td>
                            <td>
                                <Link to={'/notes/edit/1'}>
                                    <button type="button" class="btn btn-outline-dark margin-right">Edit</button>
                                </Link>
                                <button type="button" class="btn btn-outline-dark">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Link to={'/notes/create'}>
                    <button type="button" class="btn margin-bottom btn-primary">Create</button>
                </Link>
            </div>

            
        )
    }
}

export default NotesMenu