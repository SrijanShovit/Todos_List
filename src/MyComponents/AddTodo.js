
import React ,{ useState } from 'react';

export const AddTodo = (props) => {
    let footerStyle2 = {
        paddingLeft: "5vh",
        paddingRight: "5vh"
    }

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault(); //page won't reload on submit
        if (!title) {
            alert("Title cannot be empty")
        }
        else{
            props.addToDo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="Container my-3" style={footerStyle2}>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) =>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) =>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
               
                <button type="submit" className="btn btn-sm btn-success">Add</button>
            </form>

        </div>
    )
}
