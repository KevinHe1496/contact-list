import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'


const Card = () => {


  const contactsUrl = "https://playground.4geeks.com/contact/"
  const [contacts, setContact] = useState([])

  function getContacts(){
    fetch(contactsUrl + "agendas/asd1496", {
      method: "GET"
    })
    .then((response)=> response.json())
    .then((data)=>{
      
      setContact(data.contacts)
    })
    .catch((error)=>{
      console.error("Error fetching contacts", error);
    })
  }

let nameContact = {
  "name": "asdasdasd",
  "phone": "0987815349",
  "email": "asd@hotmail.com",
  "address": "av. asd"
}

function getName(){
  fetch(contactsUrl + 'agendas/asd1496',{
    method: "GET",
    body: JSON.stringify(nameContact),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => error)
}


useEffect(()=>{
  getContacts()
  
}, [])
  
  return (

<div className='container mt-5'>
<div className='d-flex justify-content-end'>
  <Link to='/newcontact'>
    <button type='button' className='btn btn-success'>Add new contact</button>
    </Link>
</div>





{contacts.map((value,index)=> (


<div className='border mt-5'>
<div className='row  m-3'>
    <div className='col-3'>
        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/" 
        className="rounded-circle" alt="..." style={{width: "200px", height: "200px"}}/>
    </div>

    

    <div className='col-4 d-grid'> 
       <p className='fs-1' >{value.name} </p>

     
    <div className=''>
      
<p ><i className="fa-solid fa-location-dot"> </i> {value.address}</p>
      
  
    </div>
    <div className=''>
    
    <p ><i className="fa-solid fa-phone"> </i> {value.phone}</p> 

    </div>
    <div className=''>
      
      <p ><i className="fa-solid fa-envelope"> </i> {value.email}</p>

    </div>
    </div>


     

    <div className='col-5 d-flex justify-content-end'>
      <div className=''>
        <button type='button' className='m-1'>
        <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button type='button' className='m-1'>
        <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
    
</div>

</div>
))}

</div>
  )
}

export default Card