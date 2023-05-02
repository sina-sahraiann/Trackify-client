import React from 'react'
import { avatar } from '../../models/user'
import '../../assets/style.css'
import 'bootstrap/dist/js/bootstrap.min.js'


const Avatar = ({ image, id, name }: avatar) => {
    return (
        <a data-bs-placement="top" data-bs-toggle="tooltip" title={name}>
            <img id={id} style={{width:'30px',height:'30px'}} className='rounded-circle mx-1' src={image} alt={name} />
        </a>
    )
}

export default Avatar