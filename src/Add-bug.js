import {useState, useEffect, useReducer} from 'react'
import Bug from './BugList'

const AddBug = () => {
    
    const [description, setDescription] = useState('')
    const [severity, setSeverity] = useState('low')
    const [assigned, setAssigned] = useState('')
    const [status, setStatus] = useState('Open')
    const [btnStatus, setBtnStatus] = useState(true)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [Bugs, setBugs] = useState([])


    const handleSubmit = (e) => {
        if (description && severity && assigned) {
            setBugs([{id: new Date().getTime().toString(), description, severity, assigned, status, btnStatus}, ...Bugs])
            setSuccess(true)
            setTimeout(()=>{setSuccess(false)}, 3000)
            setSeverity('low')
            setDescription('')
            setAssigned('')
        }
        else {
            setError(true)
            setTimeout(()=>{setError(false)}, 3000)
        }


        e.preventDefault()
    }

   

    return ( <>
        <form onSubmit={handleSubmit}>
            {success && <SuccessModal />}
            {error && <ErrorModal />}
            <h2>Add New Issue</h2>

            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
            
            <label htmlFor="severity">Severity</label>
            <select name="severity" id="severity" value={severity} onChange={(e)=>{
                setSeverity(e.target.value)
                }}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <label htmlFor="assignment">Assigned To</label>
            <input type="text" id="assignment" name="assignment" value={assigned} onChange={(e)=>{setAssigned(e.target.value)}} />

            <button type="submit">Submit</button>

        </form>

        
        <section>
            {Bugs.map((bug)=>{
               return Bugs && <Bug key={bug.id} id={bug.id} description={bug.description} severity={bug.severity} assigned={bug.assigned} btnStatus={bug.btnStatus} status={bug.status} 
               handleDelete={()=>{
                   setBugs(Bugs.filter((bugs)=> bugs.id !== bug.id))
               }} handleStatus={()=>{
                   setBugs(Bugs.filter((bugs)=>{
                       setStatus('Open')
                       bug.status = 'Closed'
                       bug.btnStatus = false
                       return bugs
                   }))
               }}/>
            })}
                
        </section>
                   
        
    </> );
}

const SuccessModal = () => {
    return ( <p className='modal success'>
    Issue added successfully
    </p> );
}

const ErrorModal = () => {
    return ( <p className='modal error'>
    Please complete all fields
    </p> );
}
 
 
 
export default AddBug;