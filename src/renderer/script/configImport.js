/**
 * @fileoverview Módulo para importação da configuração da aplicação.
 * Carrega o módulo de configuração e o disponibiliza para uso em todo o renderer process.
 * 
 * @constant {cfgimp_configArchivePath} String - Caminho absoluto para o módulo de configuração.
 * @constant {config} Object - Objeto de configuração importado do módulo de configuração.
 * Quando importado, este arquivo disponibiliza o objeto de configuração para uso em todo o renderer process como uma global.
 */

const cfgimp_configArchivePath = path.join(__dirname, '../../config/config.js');
const config = require(cfgimp_configArchivePath);
