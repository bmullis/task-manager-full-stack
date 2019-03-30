import moment from 'moment'

export const sort = (tasks, sortBy, sortOrder) => {
  if (sortBy === 'due_at' && sortOrder === 'asc') {
    return tasks.sort((a, b) => {
      return moment(a.due_at).toDate() - moment(b.due_at).toDate()
    })
  }
  
  if (sortBy === 'due_at' && sortOrder === 'desc') {
    return tasks.sort((a, b) => {
      return moment(b.due_at).toDate() - moment(a.due_at).toDate()
    })
  }

  if (sortBy === 'description' && sortOrder === 'asc') {
    return tasks.sort((a, b) => {
      return a.description.localeCompare(b.description)
    })
  }

  if (sortBy === 'description' && sortOrder === 'desc') {
    return tasks.sort((a, b) => {
      return b.description.localeCompare(a.description)
    })
  }
}