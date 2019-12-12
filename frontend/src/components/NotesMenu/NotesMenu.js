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
                        <button type="button" class="btn btn-secondary margin-right">Filter</button>
                        <button type="button" class="btn btn-secondary">Cancel</button>
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
                                    <button type="button" class="btn btn-outline-secondary margin-right">Edit</button>
                                </Link>
                                <button type="button" class="btn btn-outline-secondary">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="footer">
                    <Link to={'/notes/create'}>
                        <button type="button" class="btn margin-bottom btn-primary">Create</button>
                    </Link>
                    <ul className="to-right pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item page-link">1 / 1</li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </div>
            </div>

            
        )
    }
}

export default NotesMenu