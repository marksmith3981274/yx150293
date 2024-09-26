



import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import './styles.scss'



async function apiList() {
  return await fetch('/api/list')
  .then(resp => resp.json())
}

async function apiCreate({ name='' }={}) {
  return await fetch(
  '/api/create',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `json=${encodeURIComponent(JSON.stringify({
      name,
    }))}`,
  })
  .then(el => el.json());
}



const Names = () => {
  const [ name, setName ] = useState<string>('.. ..2 name ..');
  const [ data, setData ] = useState<{ id: number, name: string }[] >([]);

  useEffect(() => {
    onList();
  }, []);

  const onList = async () => {
    setData([
      ...(await apiList()),
    ]);
  }
  const onCreate = async () => {
    await apiCreate({ name });
    await onList();
    //data.push({ id: data.length + 1, name });
    
    // setData([
    //   ...data,
    //   { id: data.length + 1, name: name }
    // ]);
  }

  return (
    <>
      <button onClick={onList}>list</button>
      <button onClick={onCreate}>create</button>
      <br/>

      <input value={name} onChange={(event) => setName(event.target.value)} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, i) => {
            return <tr key={i}>
              <th>{el.id}</th>
              <th>{el.name}</th>
            </tr>
          })}
        </tbody>
      </table>
    </>
  )
}



const App = () => {

  // <div>.. ..2 565 ..</div>

  return <>
    <Names/>
  </>
}



const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);












