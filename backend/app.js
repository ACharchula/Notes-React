import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import notesController from './controllers/NotesController'

const router = express.Router()
const app = express()
const port = 8080

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json)

router.get('/all_notes', )
router.get('/note/:title', )
router.post('/note', )
router.put('/note/:title', )
router.delete('/note/:title', )

app.use('rest_api', router)

app.listen(port, () => console.log(`Backend node server listening on port : ${port}`))