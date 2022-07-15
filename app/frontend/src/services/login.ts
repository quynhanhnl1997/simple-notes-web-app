import axios from 'axios'
const baseUrl = '/api/login'

interface LoginCredential {
  username: string;
  password: string;
}

const login = async (credentials: LoginCredential) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }