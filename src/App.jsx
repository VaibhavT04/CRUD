import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalMode, setModalMode] = useState('add')

  const handleOpen = (mode) => {
    setIsOpen(true)
    setModalMode(mode)
  }

  const handleSubmit = () => {
    if(modalMode === 'add'){
      console.log('model mode Add');
    }else{
      console.log('model mode Edit');
    }
  }

  return (
    <>
      <Navbar onOpen={() => handleOpen('add')}/>
      <TableList handleOpen={handleOpen}/>
      <ModalForm 
      isOpen={isOpen} 
      onSubmit={handleSubmit}
      onClose={()=>setIsOpen(false)}
      mode={modalMode}
      />
    </>
  )
}

export default App
