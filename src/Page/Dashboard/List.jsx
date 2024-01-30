import React from 'react';

function List({employees, handleEdit, handleDelete}) {
  const formatter = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null
  });

  return(
    <div className='contain-table'>
    <table className='striped-table'>
    <thead>
    <tr>
    <th>mo.</th>    
      <th>first name</th>
      <th>last name</th>
      <th>email</th>
      <th>salary</th>
      <th>date</th>
      <th colSpan={2} className='text-center'>actions</th>

    </tr>
    </thead>
      <tbody>
        {employees.length > 0 ? (
       employees.map((employe, i) => (
         <tr key={employe.id}> 
         <td>{i + 1}</td>
           <td>{employe.firstName}</td>         
           <td>{employe.lastName}</td>
           <td>{employe.email}</td>
           <td>{formatter.format(employe.salary)}</td>
           <td>{employe.data}</td>
           <td className='text-right'>
           <button onClick={() => handleEdit(employe.id)} className='button muted-button'>edit</button>
           </td>
            <td className='text-left'>
            <button onClick={() => handleDelete(employe.id)} className='button muted-button'>delete</button>
            </td>
           

         
         </tr>
       )
         
       )
        ) : (
         <tr>
         <td colSpan={7}>no employees</td>
         </tr>
        )}
      </tbody>
    </table>
    </div>
  )
}

export default List;
