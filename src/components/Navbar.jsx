export default function Navbar({onOpen}) {
  return (
    <>
      <div className="navbar p-4 bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl ml-2">Client CRUD</a>
        </div>
        <div className="navbar-center">
        <input type="text" placeholder="Search" className="input input-bordered w-50 md:w-auto" />
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary" onClick={onOpen}>Add Client</a>
        </div>
      </div>
    </>
  );
}
