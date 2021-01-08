const fs = require('fs');
const path = require('path');

let productModel = {

    filepath: path.join(__dirname, '../data/productsDataBase.json'),
    readFile() {
        let fileContents = fs.readFileSync(this.filepath, 'utf-8');
        if (fileContents) {
            return JSON.parse(fileContents);
        }
        return [];
    },
    writeFile(content) {
        let fileContents = JSON.stringify(content, null, " ");
        fs.writeFileSync(this.filepath, fileContents);
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

module.exports = productModel;