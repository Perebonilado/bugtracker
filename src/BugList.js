
const Bug = ({id, description, severity, assigned, handleDelete, handleStatus, status, btnStatus}) => {
    

    return ( <div className="bug">

        <h5>Issue ID: {id}</h5>
        <p><b>Status:</b><span className="status">{status}</span></p>
        <p><b>Description:</b> {description}</p>
        <p><b>Severity:</b> {severity}</p>
        <p><b>Assigned To:</b> {assigned}</p>

        <div>
        {btnStatus && <button className="close" onClick={handleStatus}>Close</button>}
        <button className="delete" onClick={handleDelete}>Delete</button>
        </div>

    </div> );
}
 

 
export default Bug;