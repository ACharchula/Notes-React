import React, { PureComponent } from 'react'
import '../../App.css';
import NoteEditor from '../NoteEditor/NoteEditor';

class NoteCreate extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <NoteEditor mode='create'/>
        )
    }
}

export default NoteCreate