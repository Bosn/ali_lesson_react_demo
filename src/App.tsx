import React, { useState } from 'react';
import { fetch, useAPI } from './rapper';
import { List, ListItemText, ListItem, ListItemSecondaryAction, TextField, Button, CircularProgress } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/RemoveCircle'

function App() {
  const [timestamp, setTimestamp] = useState(0)
  const [data] = useAPI['GET/todo/list']({ timestamp })
  const [todoName, setTodoName] = useState('')
  const [loading, setLoading] = useState(false)

  const deleteTodo = async (id: number) => {
    setLoading(true)
    await fetch['DELETE/todo']({ id })
    setLoading(false)
    setTimestamp(Date.now())
  }

  const addTodo = async () => {
    setLoading(true)
    await fetch['PUT/todo']({ name: todoName })
    setLoading(false)
    setTimestamp(Date.now())
    setTodoName('')
  }

  return (
    <div style={{ width: 300, margin: 16, backgroundColor: '#EEEEEE', borderRadius: '5px' }}>
      {(loading) ? <CircularProgress style={{ margin: 16 }} /> :
        <List>
          {data?.data.map(x => (
            <ListItem key={x.id}>
              <ListItemText primary={x.name} />
              <ListItemSecondaryAction onClick={() => deleteTodo(x.id)}>
                <RemoveIcon />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>}
      <div style={{ padding: 16 }}>
        <TextField value={todoName} onChange={e => setTodoName(e.target.value)} placeholder="输入TODO名称" />
        <Button
          color="primary"
          variant="contained"
          style={{ marginLeft: 8 }}
          onClick={addTodo}
          disabled={todoName.trim() === ''}>Add</Button>
      </div>
    </div>
  );
}

export default App;
