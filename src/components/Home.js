import React from 'react'
import Card from './Card'

function Home({posts}) {
    return (
        <div className="posts-list">
            <div className="posts-container">
                <Card data={posts[0]}/>
                {/*<Card/>
                <Card/>
                <Card/>*/}
            </div>
        </div>
    )
}

export default Home
