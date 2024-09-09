import React from 'react'
import { FaAngellist } from "react-icons/fa";

function Skills({name}) {
    return (
        <div>
            <span className='d-flex gap-2 justify-content-center m-3'>
                <FaAngellist size={28} />
                <em className='mt-1'>{name}</em>
            </span>
        </div>
    )
}

export default Skills