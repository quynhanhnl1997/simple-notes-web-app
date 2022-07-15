import axios from 'axios'
import { NoteObject } from 'interfaces/note.interface'
const baseUrl = '/api/notes'

let token: string = null

const setToken = (newToken: string) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const request = axios.get(baseUrl)

  return request.then(response => response.data)
}

const create = async (newObject: NoteObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async (id: string, newObject: NoteObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update, setToken }