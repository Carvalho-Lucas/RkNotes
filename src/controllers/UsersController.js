const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite")
class UsersController {
  async create(request, response){
    const { name, email, password } = request.body;

    const database = await sqliteConnection();

    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)" , [email])
    
    if (checkUserExists) {
      throw new AppError('Este e-mail já está em uso!');
    }

    const hashedPassword = await hash(password, 8);
    
    await database.run("INSERT INTO users (name, email, password) VALUES (?,?,?)"
    , [name, email, hashedPassword]
    );

    return response.status(201).json();
  }

  async update(request, response){
    const { name, email, password, old_password} = request.body;
    const { id } = request.params;
  
    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id] ); //seleciona todos os campos da tabela usuario onde o id seja igual ao [id] 
    
    if (!user) {
      throw new AppError('Usuário não encontrado!');
    }
  
    const userWithUpdateEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email] ); //selecione todos os campos da tabela usuario onde o email seja igual ao [email] | verificar se email já existe, e se pode ser trocado.
  
    if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id){
      throw new AppError('Este e-mail já foi cadastrado!');
    }
  
    user.name = name ?? user.name;
    user.email = email ?? user.email;
  
    if(password && !old_password) {
      throw new AppError("Digite a senha cadastrada anteriormente para atualizar.");
    }
  
    if(password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);
      if(!checkOldPassword) {
        throw new AppError("Digite uma senha diferente da que já foi cadastrada anteriormente");
      }
      if(password == old_password){
        throw new AppError("Digite uma senha diferente da anterior!!!")
      }
      user.password = await hash(password, 8);
    }
  
    //Atualize na tabela de usuários e passe os valores:
  
    await database.run(`
    UPDATE users SET
    name = ?,
    email = ?,
    password = ?,
    updated_at = DATETIME('now')
    WHERE id = ?`,
    [user.name, user.email, user.password, id ]);
  
    return response.json();
  }
}
module.exports = UsersController;
