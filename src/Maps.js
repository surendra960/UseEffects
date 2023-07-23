import React from 'react'

function Maps() {
    const students = ['Anil', 'Sidhu', 'Sam','Peter'];

//     students.map((item)=>{
//         console.warn("May Name Is :" + item)
//     })

//     for(let i=0;i<students.length;i++)
//     {
//         console.warn("My Name in for loop :" , students[i])
//     }

  return (
    <div className='box marginTop'>
        <h1>Handle Array with List</h1>
        {
            students.map((data)=>
                <h1>Name is :{data}</h1>
            )
        }
    </div>
  );
}

export default Maps