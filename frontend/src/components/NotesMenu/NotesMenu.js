import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';

class NotesMenu extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <h1>NotesMenu</h1>
                <Link to={'/notes/edit/0'}>
                    <button type="button" class="btn btn-primary">Edit</button>
                </Link>
                <Link to={'/notes/create'}>
                    <button type="button" class="btn btn-primary">Create</button>
                </Link>
            </div>
        )
    }
}

export default NotesMenu