import React from 'react'

const Dummy = () => {
  return (
    <>
    {/* <style jsx global> */}
    <style jsx>
    {`
    .dummy{
        background: yellow;
    }
    `}
    </style>
    <div className='dummy'>It is dummy dummy.</div>
    </>
  )
}

export default Dummy