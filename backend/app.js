const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const notesController = require('./controllers/NotesController')

const router = express.Router();
const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json);

router.get('/all_notes', notesController.getAllNotes);
router.get('/note/:title', notesController.getNote);
router.post('/note', notesController.saveNote);
router.put('/note/:old_title', notesController.updateNote);
router.delete('/note/:title', notesController.deleteNote);

app.use('rest_api', router);

app.listen(port, () => console.log(`Backend node server listening on port : ${port}`))