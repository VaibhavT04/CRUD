export default function ModalForm(isOpen, onClose, mode, OnSubmit) {
    return (
        <>
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <div className="modal-box">
                    <h3 className="py-4 text-lg font-bold">{mode === 'edit' ? 'Edit Client' : 'Client Detail'}</h3>
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>
                            ✕
                        </button>
                        
                        <button className="btn btn-success ">{mode === 'edit'? 'Save Changes': 'Add Client'}</button>
                    </form>
                </div>
            </dialog>
        </>
    );
}
