const path = require('path');
const directory = path.join(__dirname, '../files');
const fs = require('fs');
const moment = require('moment');
const Note = require('../models/Note');

module.exports = class FileNoteRepository {

    findAll() {
        const files = fs.readdirSync(directory);
        const allCategories = []
        const notes = files.map( file => {
            const nameAndExtension = file.split('.');
            const note = new Note();
            
            note.title = nameAndExtension[0];
            const content = fs.readFileSync(directory + '/' + file, 'utf-8');
            const lines = content.split('\n');

            const categories = lines[0].split(':')[1].replace(/,/g, '').trim().split(' ');
            const date = lines[1].split(':')[1].trim();

            if (categories !== undefined) { 
                categories.forEach(element => {
                    if (element != undefined && element != '' && !allCategories.includes(element)) {
                        allCategories.push(element);
                    }
                });
            }
            note.categories = categories;
            note.date = date;
            return note; //ommiting content because we don't need it
        });

        return {
            categories: allCategories,
            notes: notes
        }
    }

    findById(id) {
        if (this.checkIdAvailability(id)) {
            throw Error(`Note with id '${id}' doesn't exist`);
        }

        const file = this.getFullFilename(id);
        const content = fs.readFileSync(directory + '/' + file, 'utf-8');
        const note = new Note();
        
        const nameAndExtension = file.split('.');
        note.title = nameAndExtension[0];
        note.markdown = (nameAndExtension[1] != 'txt');
        
        const lines = content.split('\n');
        const categories = lines[0].split(':')[1].replace(/,/g, '').trim().split(' ');
        const date = lines[1].split(':')[1].trim();

        note.categories = categories;
        var d = new Date(date);
        note.date = moment(d).format('YYYY-MM-DD')

        note.content = '';

        for (var i = 2; i < lines.length; ++i) {
            note.content += lines[i]+'\n';
        }

        return note;
    }

    save(note) {
        if (!this.checkIdAvailability(note.title)) {
            throw Error(`There is already note with title - '${note.title}'`)
        }

        let content = 'category: ';
        note.categories.forEach( category => {
            if (note.categories[0] === category) {
                content += category;
            } else {
                content += (', ' + category);
            }
        });
        content += '\ndate: ';
        content += moment(note.date).format('YYYY/MM/DD')
        content += '\n';
        content += note.content;
        const extension = note.markdown ? '.md' : '.txt';
        fs.writeFileSync(directory + '/' + note.title + extension, content);
    }

    delete(id) {
        const file = this.getFullFilename(id);

        if (file !== undefined) {
            fs.unlinkSync(directory + '/' + file);
        }
    }

    update(oldTitle, note) {
        if (oldTitle !== note.title && !this.checkIdAvailability(note.title)) {
            throw Error(`There is already note with title - '${note.title}'`);
        }

        this.delete(oldTitle);
        this.save(note);
    }

    getFullFilename(id) {
        const files = fs.readdirSync(directory);
        for (var i = 0; i < files.length; ++i) {
            if (files[i].split('.')[0] === id) {
                return files[i];
            } else {
                continue;
            }
        }

        return undefined;
    }

    checkIdAvailability(id) {
        const files = fs.readdirSync(directory);
        const titles = files.map(file =>  {
            return file.split('.')[0]
        })
        return !titles.includes(id)
    }


}