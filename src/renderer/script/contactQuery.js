const path = require('path');
const fs = require('fs');
const contactListPath = path.join(__dirname, '../contacts.json');
const {Modal} = require('../middleware/modal');


/**
 * @fileoverview Módulo para consulta de contatos.
 * @description Fornece uma função para buscar contatos em um arquivo .json, BASEADO NO NOME DO CONTATO NO JSON.
 * 
 * @function contactQuery - Função que realiza a consulta no arquivo.
 * @requires fs - Módulo do Node.js para manipulação de sistema de arquivos.
 * @requires path - Módulo do Node.js para manipulação de caminho de arquivos.
 * @requires modal - Módulo personalizado para exibição de modais.
 * @param {string} queryParam - Nome do contato a ser buscado.
 * @constant {contactListPath} String - Caminho para o arquivo contacts.json.
 * @returns {Object} - Objeto do contato encontrado ou redireciona para criação de novo contato.
 */

function contactQuery(queryParam) {
    try{
        console.log("contactQuery -> queryParam:", queryParam);

        // Lê o JSON da lista de contatos
        const contactList = JSON.parse(fs.readFileSync(contactListPath, 'utf8'));

        // Procura o índice do contato com o nome correspondente
        let contact = contactList.findIndex(contact => contact.name === queryParam);

        // Verifica se o contato NÃO foi encontrado
        if (contact === -1) {

            const warn = new Modal({
                type: 'select',
                title: 'Contato não encontrado',
                msg: 'Não foi encontrado este contato na sua lista. Deseja criar um novo contato?',
                onConfirm: 'url:newContact.html',
                onCancel: 'close'
            });

            warn.render();
            return null;
        }

        contact = contactList[contact];
        return contact; //* Retorna o objeto do contato encontrado
    }
    catch (error) {
        console.error("contactQuery -> ERROR:", error);
        throw error;
        return null;
    }

}

module.exports = contactQuery;