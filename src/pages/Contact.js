import { useState } from 'react'
import flower from '../Assets/flower.svg'
import '../Assets/css/Contact.css'
import { db } from '../componants/Firebase'
import { collection, addDoc } from "firebase/firestore";
const Contact = () => {
  const [formInput, setFormInput] = useState({
    'email':'',
    'subject':'',
    'message': ''
  })
  const sendContact = async () => {
     try {
      const docRef = await addDoc(collection(db, "contact"), formInput);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    sendContact();
  }
  
  return (
    <div> 
      <div className="contact-page">
                <div className="contact-page-container">
                    <h1>
                        Let's talk about <br /> the project? <img src={flower} alt="" />
                    </h1>
                    <div className="contact-info">
                       
                       <form onSubmit={submitHandler}>
                         <input type="email" placeholder="Email" value={formInput.email} onChange={(e)=>setFormInput({...formInput, email: e.target.value})} />
                         <input type="text" placeholder="Subject" value={formInput.subject} onChange={(e)=>setFormInput({...formInput, subject: e.target.value})}/>
                         <textarea type="text" placeholder="message" value={formInput.message} onChange={(e)=>setFormInput({...formInput, message: e.target.value})}></textarea>
                         <button type="submit">Submit</button>
                       </form>
                       <ul>
                         <li><a href="+216 92398964">+216 92398964</a></li>
                         <li>ibtihel.Bensalah@outlook.fr</li>
                       </ul>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Contact
