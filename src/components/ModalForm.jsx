export default function ModalForm({isOpen, onClose, mode, onSubmit}) {
  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
          <h3 className="py-4 text-lg font-bold">{mode === 'edit' ? "Edit Client" : "Client Detail"}</h3>
          
          <form method="dialog">
            <label className="input input-bordered w-full my-4 flex items-center gap-2">
              Name
              <input type="text" className="grow" />
            </label>
            <label className="input input-bordered w-full my-4 flex items-center gap-2">
              Email
              <input type="text" className="grow" /> 
            </label>
            <label className="input input-bordered w-full my-4 flex items-center gap-2">
              Job
              <input type="text" className="grow" />
            </label>

            <div className="flex mb-4 justify-between my-4">
              <label className="input input-bordered mr-4 flex items-center gap-2">
                Rate
                <input type="number" className="grow" placeholder="" />
              </label>

              <select className="select select-bordered max-w-xs"> 
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
