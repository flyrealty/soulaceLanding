import React, { useState } from 'react'
import Nav from '../components/Nav/Nav'
import warningImg from "../assets/warning.svg"

function Register() {
 
  const [input, setInput] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  })

  const [isEmptyIndex, setIsEmptyIndex] = useState({
    name: false,
    phoneNumber: false,
    email: false
  })

  const handleInput = (e) => {
    setInput(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }


  // handling email

  const sendEmail = () => {
    const apiKey = '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';
  
    const data = {
      to: [{ email: 'karandemo577@gmail.com', name: 'Recipient Name' }],
      from: { email: 'karanrdx577@gmail.com', name: 'Sender Name' },
      subject: 'Test Email',
      htmlContent: '<p>This is a test email sent using Sendinblue and ReactJS.</p>'
    };
  
    fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          console.log('Email sent successfully!');
        } else {
          throw new Error('Error sending email');
        }
      })
      .catch(error => {
        console.error('Error sending email:', error);
      });
  };
  


  const handleForm = (e) => {
    e.preventDefault()
    // check if any of the field is empty
    
    const isEmptyChecked = {
      name: input.name.trim() === "",
      phoneNumber: input.phoneNumber.trim() === "",
      email: input.email.trim() === ""
    }

    setIsEmptyIndex(isEmptyChecked)

    // send the form data


    // send the email
    sendEmail()

    if(input.name.trim() && input.email.trim() && input.phoneNumber.trim()) {
      console.log("send data")

      // reset the input
      setInput({
        name: "",
        phoneNumber: "",
        email: ""
      })
    }
  }

  return (
    <div className='px-[5vw] lg:px-20 flex flex-col sm:items-center'>
        <div className='w-full mt-8'>
            <Nav iconColor="black"/>
        </div>
        <div className="form-container w-[73%] sm:max-w-[20rem] mt-16 sm:mt-40">
        <form className='flex flex-col gap-3.5 my-4 items-start sm:items-center' onSubmit={handleForm}>
            <h2 className='font-[900] text-3xl mb-8 sm:text-4xl'>Sign Up</h2>
            <div className='relative w-full'>
            <input value={input.name} name="name" onChange={handleInput} className={`w-full rounded-lg border ${isEmptyIndex.name ? "border-red-500" : "border-black"} pl-3 py-1`} type="text" placeholder='Full Name' />
            <img className='absolute right-2 top-[0.48rem] w-[1.1rem]' src={warningImg} alt="warning" />
            </div>
            <div className='relative w-full'>
            <input value={input.phoneNumber} name="phoneNumber" onChange={handleInput} className={`w-full rounded-lg border  ${isEmptyIndex.phoneNumber ? "border-red-500" : "border-black"} pl-3 py-1`} type="number" placeholder='Mobile Number' />
            <img className='absolute right-2 top-[0.48rem] w-[1.1rem]' src={warningImg} alt="warning" />
            </div>
            <div className='relative w-full'>
          <input value={input.email} name="email" onChange={handleInput} className={`w-full rounded-lg border ${isEmptyIndex.email ? "border-red-500" : "border-black"} pl-3 py-1`} type="email" placeholder='Email ID' />
            <img className='absolute right-2 top-[0.48rem] w-[1.1rem]' src={warningImg} alt="warning" />
          </div>
            <button className='text-white bg-black rounded-xl px-4 py-0.5 sm:py-[3px] sm:text-lg' type='submit'>Register</button>
        </form>
        </div>
        <div className="bottomShape overflow-hidden ">
        <div className="bottomIcon w-[13rem] h-[13rem] bg-[#EDA225] rounded-full  fixed -bottom-[5.5rem] -right-20"></div>

        </div>
    </div>
  )
}

export default Register