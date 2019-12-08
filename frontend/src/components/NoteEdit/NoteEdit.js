import React, { PureComponent } from 'react'
import '../../App.css';
import NoteEditor from '../NoteEditor/NoteEditor'

class NoteEdit extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <NoteEditor mode="edit"/>
        )
    }
}

export default NoteEdit