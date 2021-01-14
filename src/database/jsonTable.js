const fs = require('fs');
const path = require('path');


let model = function(tableName) {
    return {
        filePath: path.join(__dirname, '../data/' + tableName + '.json'),
        readFile() {
            let fileContents = fs.readFileSync(this.filePath, 'utf8');

            if (fileContents) {
                return JSON.parse(fileContents);
            }

            return [];
        },
        writeFile(contents) {
            let fileContents = JSON.stringify(contents, null, " ");
            fs.writeFileSync(this.filePath, fileContents);
        },
        lastID() {
            let id = this.readFile();
            let maximoID = id.map(element => {
                return element.id;
            });

            let miMax = Math.max(...maximoID);
            miMax++;
            return miMax;
        },
        all() {
            return this.readFile();
        },
        find(id) {
            let campo = this.readFile();
            return campo.find(camp => camp.id == id);
        },
        findByField(field, value) {
            let campo = this.readFile();
            return campo.find(camp => camp[field] == value);
            //Con [field] en lugar de pasarle una propiedad como en el caso anterior de find(id), le pasamos una variable.

        },
        findByAllField(field, value) {
            let campo = this.readFile();
            return campo.filter(camp => camp[field] == value);

        },
        create(content) {
            let campo = this.readFile();
            content.id = this.lastID();
            campo.push(content);
            this.writeFile(campo);
            return content.id;
        },
        update(content) {
            let campo = this.readFile();
            let actualizarCampo = campo.map(element => {
                if (element.id == content.id) {
                    return content;
                }
                return element;
            });
            this.writeFile(actualizarCampo);
            return content.id;
        },
        delete(id) {
            let campo = this.readFile();
            let actualizarCampo = campo.filter(element => element.id != id);
            this.writeFile(actualizarCampo);
        }


    }

}

module.exports = model;