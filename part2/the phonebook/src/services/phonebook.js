import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject)
}

const deletePerson = (id) => {
    const deleteUrl = `${baseUrl}/${id}`
    return axios.delete(deleteUrl)
}

const update = (id, newObject) => {
    const updateUrl = `${baseUrl}/${id}`
    return axios.put(updateUrl, newObject)
}

export default {
    getAll: getAll,
    create: create,
    deletePerson: deletePerson,
    update: update
}