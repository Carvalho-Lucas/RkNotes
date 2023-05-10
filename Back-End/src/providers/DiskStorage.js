const fs = require('fs')
const path = require('path')
const uploadConfig = require('../config/upload')

class DisckStorage {
//salvar arquivos
  async saveFile(file){
    await fs.promises.rename(
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    )
    return file
  }
//Deletar arquivos
  async deleteFile(file){
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

      try{
        await fs.promises.stat(filePath) //verificar estado do arquivo
      } catch {
        return;
      }
    await fs.promises.unlink(filePath) //Remove arquivo (unlink)
  } 
}

module.exports = DisckStorage;