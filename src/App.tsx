import React, { useState } from 'react';
import { useAPI } from './rapper';
import { List, ListItemText, ListItem, ListItemSecondaryAction, TextField, Button } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/RemoveCircle'

function App() {
  const [timestamp, setTimestamp] = useState(0)
  const [data] = useAPI['GET/todo/list']({ timestamp })
  const [todoName, setTodoName] = useState('')

  const deleteTodo = () => {
    setTimestamp(Date.now())
  }

  const addTodo = () => {
    setTimestamp(Date.now())
    setTodoName('')
  }

  return (
    <div style={{ width: 300, margin: 16, backgroundColor: '#EEEEEE', borderRadius: '5px' }}>
      <List>
        {data?.data.map(x => (
          <ListItem key={x.id}>
            <ListItemText primary={x.name} />
            <ListItemSecondaryAction onClick={deleteTodo}>
              <RemoveIcon />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
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
