import React from 'react'

function Card({data}) {
    return (
        <div className="posts-tile">
            <div className="top">
                <img src="https://picsum.photos/300/200" alt=""/>
            </div>
            <div className="title">
                <span>{data.title}</span>
            </div>
            <div className="writer">
                <span>By : {data.userId}</span>
            </div>

            <button>Read More</button>
        </div>
    )
}

export default Card
