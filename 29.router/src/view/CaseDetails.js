import React from 'react'
import { useParams } from 'react-router-dom'

const CaseDetails = () => {
    const {id} = useParams()
    return (
        <div>
            {id}
        </div>
    )
}

export default CaseDetails
