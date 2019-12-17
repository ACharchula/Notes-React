const moment = require('moment');
const paginate = require('jw-paginate')
const FileNoteRepository = require('../repositories/FileNoteRepository');
const Note = require('../models/Note');

const DateFormat = 'YYYY-MM-DD';
const PageSize = 5

exports.getAllNotes = (req, res) => {
    const repository = new FileNoteRepository();
    const notes = repository.findAll();

    const fromDate = moment(req.query.from, DateFormat);
    const toDate = moment(req.query.to, DateFormat);
    const category = req.query.category;

    let filteredNotes = notes.notes;
    if (fromDate.isValid()) {
        filteredNotes = filteredNotes.filter(note => 
            moment(note.date, DateFormat).isSameOrAfter(fromDate));
    }

    if (toDate.isValid()) {
        filteredNotes = filteredNotes.filter(note => 
            moment(note.date, DateFormat).isSameOrBefore(toDate));
    }

    if (category !== undefined && category !== 'All') {
        filteredNotes = filteredNotes.filter(note => note.categories.includes(category));
    }

    const page = parseInt(req.query.page) || 1;
    const pager = paginate(filteredNotes.length, page, PageSize);
    pager.endPage = Math.ceil(notes.length / PageSize);

    const notesForPage = filteredNotes.splice(pager.startIndex, PageSize);

    res.send( { data: {pager: pager, notes: notesForPage, categories: notes.categories}});
}

exports.getNote = (req, res) => {
    const repository = new FileNoteRepository();
    const title = req.params.title;
    const note = repository.findById(title);
    res.send({note: note});
}

exports.saveNote = (req, res) => {
    const repository = new FileNoteRepository();
    
    const note = new Note();

    note.title = req.body.title;
    note.date = req.body.date;
    note.categories = req.body.categories;
    note.markdown = req.body.markdown;
    note.content = req.body.content;

    try {
        repository.save(note);
    } catch (error) {
        res.send(error.message);
        return;
    }

    res.send('Saved');
}

exports.deleteNote = (req, res) => {
    const repository = new FileNoteRepository();
    const title = req.params.title;
    repository.delete(title);
    res.send("Deleted");
}

exports.updateNote = (req, res) => {
    const repository = new FileNoteRepository();

    const note = new Note();
    
    note.title = req.body.title;
    note.date = req.body.date;
    note.categories = req.body.categories;
    note.markdown = req.body.markdown;
    note.content = req.body.content;

    const oldTitle = req.params.old_title;
    
    try {
        repository.update(oldTitle, note);
    } catch (error) {
        res.send(error.message);
        return;
    }
    res.send('Updated');
}