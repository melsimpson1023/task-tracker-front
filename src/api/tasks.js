import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexTasks = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/tasks'
  })
}

export const createTask = (task) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/tasks',
    data: task
  })
}

export const deleteTask = (taskId) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/tasks/' + taskId,
  })
}
