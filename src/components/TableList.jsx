export default function TableList({onOpen}) {
    const clients = [
        {id:1, name:"Vaibhav", email:"vaibhavdemo@gmail.com", job:"Developer", rate:"100", isActive:true},
        {id:2, name:"Ram", email:"ramdemo@gmail.com", job:"CA", rate:"100", isActive:true},
        {id:3, name:"Harsh", email:"harshdemo@gmail.com", job:"Doctor", rate:"100", isActive:false},
    ]
  

    return (  
    <>
      <div className="overflow-x-auto mt-10 ml-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mail</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Status</th>

            </tr>
          </thead>
          <tbody className="hover:bg-base-300">
            {/* row 1 */}
            {clients.map((client)=>(
                <tr>
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                    <button  className={`btn rounded-full w-20 ${client.isActive?`btn-accent`:`btn-outline btn-error`}`}>
                        {client.isActive? 'Active' : 'Inactive'}
                    </button>
                </td>
                <td>
                    <button onClick={onOpen} className='btn btn-info'>Update</button>
                </td>
                <td>
                    <button className='btn btn-error'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
