import './App.css'
import Navbar from './components/Navbar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm'
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalMode, setModalMode] = useState('add')

  const handleOpen = (mode) => {
    setIsOpen(true)
    setModalMode(mode)
  }

  const handleSubmit = () => {
    if(modalMode === 'add'){
      // console.log('model mode Add');
    }else{
      // console.log('model mode Edit');
    }
    setIsOpen(false)
  }

  return (
    <>
      <div>
        <Navbar onOpen={() => handleOpen('add')}/>
        <TableList onOpen={()=>handleOpen('edit')}/>
        <ModalForm isOpen={isOpen} 
        onClose={()=>setIsOpen(false)}
        mode={modalMode}
        onSubmit={handleSubmit}
        />
      </div>
    </>
  )
}

export default App
