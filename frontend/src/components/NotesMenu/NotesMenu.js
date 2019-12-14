import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import '../../App.css';
import Axios from 'axios';

const api = 'http://localhost:8080/rest_api';

class NotesMenu extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            categories: []
        }
    }

    componentDidMount() {
        Axios.get(`${api}/all_notes`).then(res => {
            this.setState({
                notes: res.data.data.notes,
                categories: res.data.data.categories
            })
        }).catch(err => {
            console.log(err);
        })
    }

    delete(id) {
        Axios.delete(`${api}/delete_note/${id}`).then(res => {
            if (res.data !== 'Deleted') {
                alert(res.data)
            } else {
                this.componentDidMount();
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="App-Container container">
                <div className="row padding-top">
                    <div className="form-inline form-group col-md-3">
                        <span className="px-2">From:</span>
                        <input className="form-control" name="fromDate" type="date"/>
                    </div>
                    <div className="form-inline form-group col-md-3">
                        <span className="px-2">To:</span>
                        <input className="form-control" name="toDate" type="date"/>
                    </div>

                    <div className="form-inline form-group col-md-3">
                        <span className="px-2">Category:</span>
                        <select name="category" className="form-control">
                            <option>All</option>
                            {
                                this.state.categories.map( (name, index) => {
                                    return <option key={index}>{name}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="form-inline form-group col-md-3">
                        <button type="button" className="btn btn-secondary margin-right">Filter</button>
                        <button type="button" className="btn btn-secondary">Cancel</button>
                    </div>
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Title</th>
                            <th className="col-width"></th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                this.state.notes.map( (note) => {
                                    return (<tr key={note.title}>
                                        <td>{note.date}</td>
                                        <td>{note.title}</td>
                                        <td>
                                            <Link to={`/notes/edit/${note.title}`}>
                                                <button type="button" className="btn btn-outline-secondary margin-right">Edit</button>
                                            </Link>
                                            <button type="button" className="btn btn-outline-secondary" onClick={() => this.delete(note.title)}>Delete</button>
                                        </td>
                                    </tr>)
                                })
                            }
                    </tbody>
                </table>
                <div className="footer">
                    <Link to={'/notes/create'}>
                        <button type="button" className="btn margin-bottom btn-primary">Create</button>
                    </Link>
                    <ul className="to-right pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item page-link">1 / 1</li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </div>
            </div>

            
        )
    }
}

export default NotesMenu