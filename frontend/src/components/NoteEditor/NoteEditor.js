import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';


class NoteEditor extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="App-Container container padding-top">
                <div className="row">
                    <div className="form-inline form-group col-md-5">
                        <label className="control-label px-2">Title of the note:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-inline form-group col-md-3">
                        <label className="control-label px-2">Date:</label>
                        <input className="form-control" name="date" type="date"/>
                    </div>
                    <div className="form-group form-inline col-md-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"/>
                            <label className="form-check-label">Markdown</label>
                        </div>
                    </div>
                </div>
                
                <textarea className="form-control" rows="8"/>

               
            <div className="row">
                
                <div className="col-md-4">
                    <ul className="list-group categories">
                    <li className="list-group-item">1</li>
                    <li className="list-group-item">1</li>
                    <li className="list-group-item">1</li>
                    <li className="list-group-item">1</li>
                    <li className="list-group-item">1</li>
                </ul>
                </div>
                
                <div className="form-group form-inline col-md-8">
                    <label className="control-label px-2">Category name:</label>
                    <input type="text" className="form-control" name="category" id="category"/>
     
                    <button className="margin-left btn btn-outline-secondary" type="submit" name="submitButton" value="Add" >Add</button>
                    <button className="margin-left btn btn-outline-secondary" type="submit" name="submitButton" value="Remove">Remove</button>
        
                </div>
            
            </div>
        

                <div className="form-group padding-top padding-bottom">
                    <button type="button" className="btn btn-primary margin-right">Submit</button>
                    <Link to={'/'}>
                        <button type="button" className="btn btn-secondary">Cancel</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NoteEditor