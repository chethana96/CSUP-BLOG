import React, { useState } from 'react'

function NewBlog() {

    const [title, setTitle] = useState('');

    function addPost(){}
    return (
        < div className="add-post">
            <h2>Add New Blog</h2> 

            <form onSubmit={addPost}>
                <label>Add Title</label>
                <input type="text" value={title}
                onChange={(e) => setTitle(e.target.value)}
                /> 

                <label>Add Image Url</label>
                <input type="text"/> 

                <label>Name of the Writer</label>
                <input type="text"/> 

                <label>Add Content</label>
                <input type="text"/> 

                <button>Publish</button>
            </form>

            
        </div>
    )
}

export default NewBlog
