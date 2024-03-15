
import React from 'react'

function ProfilePic() {
    const imageUrl='./src/assets/pic.jpg'

    const handleClick=(e)=>e.target.style.display='none';
  return (
    <img onClick={e=>(handleClick(e))} src={imageUrl} height={150} width={150}/>
  )
}

export default ProfilePic