import { useState } from "react"

export default function ModalForm({isOpen, onClose, mode, onSubmit}) {

  const [rate, setRate] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [job, setJob] = useState("")
  const [status, setStatus] = useState(false)

  const handleStatusChange = (e) => {
    setStatus(e.target.value === "Active")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onClose()
  }

  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
          <h3 className="py-4 text-lg font-bold">{mode === 'edit' ? "Edit Client" : "Client Detail"}</h3>
          
          <form method="dialog" onSubmit={handleSubmit}>
            <label className="input input-bordered w-full my-4 flex items-center gap-2">
              Name
              <input type="text" className="grow" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label className="input input-bordered w-full my-4 flex items-center gap-2">
              Email
              <input type="text" className="grow" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
            </label>
            <label className="input input-bordered w-full my-4 flex items-center gap-2">
              Job
              <input type="text" className="grow" value={job} onChange={(e)=>setJob(e.target.value)}/>
            </label>

            <div className="flex mb-4 justify-between my-4">
              <label className="input input-bordered mr-4 flex items-center gap-2">
                Rate
                <input type="number" className="grow" value={rate} onChange={(e)=>setRate(e.target.value)}/>
              </label>

              <select value={status ? "Active" : "Inactive"} className="select select-bordered max-w-xs" onChange={handleStatusChange}> 
                <option>Inactive</option>
                <option>Active</option>
              </select>
            </div>

            <button className="btn btn-success" onClick={onSubmit}>
              {mode === "edit" ? "Save Changes" : "Add Client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
