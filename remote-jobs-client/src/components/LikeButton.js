import React, { useState } from 'react'

const LikeButton = () => {
    const [like, setLike] = useState(0)

    return (
        <div>
            {like}
            <button className="btn btn-info ml-3" onClick={() => setLike(like + 1)}> Likes</button>
        </div>
    )
}

export default LikeButton
