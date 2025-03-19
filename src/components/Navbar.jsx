export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl ml-2">Client CRUD</a>
        </div>
        <div className="navbar-center">
        <input type="text" placeholder="Search" className="input input-bordered w-50 md:w-auto" />
        </div>
        <div className="navbar-end">
          <a className="btn btn-soft">Button</a>
        </div>
      </div>
    </>
  );
}
