import  {createContext, useContext, useState, useEffect} from 'react';
import { api } from '../services/api'
const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', {email, password});
        const {user, token} = response.data;

        localStorage.setItem("@rocketnotes:user", JSON.stringify(user)) //salvar em localStorage
        localStorage.setItem("@rocketnotes:token", token) //salvar em localStorage

        api.defaults.headers.common['Authorization'] = `Bearar ${token}`;
          setData({user, token})

    } catch(error){
      if (error.response) {
        alert(error.response.data.message)
      }else{
        alert('Não foi possível entrar.')
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token")
    const user = localStorage.getItem("@rocketnotes:user")

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearar ${token}`;
      setData({
        token, user: JSON.parse(user)
      });
    }
  }, [])

  function signOut() {
    localStorage.removeItem('@rocketnotes:token')
    localStorage.removeItem('@rocketnotes:user')

    setData({})
  }

  return(
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user
       }}>
      {children}
    </AuthContext.Provider>
  )
} 

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth };