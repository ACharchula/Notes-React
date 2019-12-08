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
                
                <ul className="list-group col-md-4">
                    <li className="list-group-item">1</li>
                </ul>
                
                <div className="form-group form-inline col-md-5">
                    <label className="control-label px-2">Category name:</label>
                    <input type="text" className="form-control" name="category" id="category"/>
                </div>
                
                <div class="form-group col-md-3">
                    <button className="btn btn-primary" type="submit" name="submitButton" value="Add" >Add</button>
                    <button className="btn btn-primary" type="submit" name="submitButton" value="Remove">Remove</button>
        
                </div>
            
            </div>
        

                <div className="form-group padding-top padding-bottom">
                    <button type="button" class="btn btn-primary margin-right">Submit</button>
                    <Link to={'/'}>
                        <button type="button" class="btn btn-secondary">Cancel</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NoteEditor