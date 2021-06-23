import {useState} from 'react'

function AddProductForm({ addProductCallback }) {
    const [name,setName]=useState('')
    const [desc, setDesc] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        addProductCallback({
            id: Date.now().toString(),
            name,
            desc
        })
        setName('')
        setDesc('')
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input placeholder="add a name" value={name} onChange={e=>setName(e.target.value)}></input>
            <input placeholder="add a desc" value={desc} onChange={e=>setDesc(e.target.value)}></input>
            <button>Add</button>            
        </form>
    )
}

export default AddProductForm
