import React from 'react'

const AddNote = () => {
  return (
    <div className='flex align-center justify-center'>
    <div className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <label htmlFor="small">Small input</label>
        </div>
        <input id="small" type="" sizing="sm" />
      </div>
      <div>
        <div className="mb-2 block">
          <label htmlFor="large">Large input</label>
        </div>
        <input id="large" type="" className='size-90' />
      </div>
    </div>
    </div>


  )
}

export default AddNote