import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { BackGround } from './BackGround';
import { DrawerAppBar } from './DrawerAppBar';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function Contact() {
  return (
    <div>
      <DrawerAppBar Content={<ContactContent />} />
      <div className='App' id='App-contact'>
        <BackGround className='contact-background' />
      </div>
    </div>
  );
}

function ContactContent(){

  const [data,setData] = useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
    message:"",
  })

  const {fname,lname,email,phone,message} = data;
  const p = document.getElementById('p');

  const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value});
    p.innerHTML = "";
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const res = await fetch("https://v1.nocodeapi.com/pradeepak5/google_sheets/GsvDUswghmQCLyrA?tabId=Sheet1",{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([[fname,lname,email,phone,message, new Date().toLocaleString()]])
      });
      await res.json();
      p.innerHTML = "Message Received. I'll get back to you soon...";
      setData({...data,fname:'',lname:'',email:'',phone:'',message:''});
    }catch(err){
      p.innerHTML = "Sorry...something went wrong! try after sometime"
      console.log(err);
    }
  }

  return (
    <div className='contact-body'>
      <section id='section-wrapper'>
        <div className='box-wrapper'>
          <div className='info-wrap'>
              <h2 className='info-title'>Contact Information</h2>
              <h3 className='info-sub-title'>Fill up the form, I will get back to you within 24 hours.</h3>
              <ul className='info-details'>
                <li>
                  <PhoneAndroidIcon className='icon'></PhoneAndroidIcon>
                  <span>Phone : </span><Link className='link1' to='tel:+918270748551'>8270748551</Link>
                </li>
                <li>
                  <EmailIcon className='icon'></EmailIcon>
                  <span>Mail : </span><Link className='link1' to='mailto:pradeepak571@gmail.com'>pradeepak571@gmail.com</Link>
                </li>
                <li>
                  <PublicIcon className='icon'></PublicIcon>
                  <span>Website : </span><Link className='link1' to='#'>site link</Link>
                </li>
              </ul>
              <ul className='social-icons'>
                <li>
                  <Link to="https://github.com/Pradeepak5" className='link2'>
                  <GitHubIcon style={{backgroundColor:'white'}}></GitHubIcon>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com/in/a-pradeep-kumar-577b761b5/" className='link2'>
                  <LinkedInIcon style={{backgroundColor:'blue',color:'white'}}></LinkedInIcon>
                  </Link>
                </li>
              </ul>
          </div>
          <div className='form-wrap'>
            <form onSubmit={handleSubmit}>
              <h2 className='form-title'>Happy to get in touch with you 😍</h2>
              <div className='form-fields'>
                <div className='form-group'>
                  <input type="text" name="fname" placeholder='First Name' value={fname} onChange={handleChange} required/>
                </div>
                <div className='form-group'>
                  <input type="text" name="lname" placeholder='Last Name' value={lname} onChange={handleChange} />
                </div>
                <div className='form-group'>
                  <input type="email" name="email" placeholder='Mail Id' value={email} onChange={handleChange} required/>
                </div>
                <div className='form-group'>
                  <input type="number" name="phone" placeholder='Phone' value={phone} onChange={handleChange} required/>
                </div>
                <div className='form-group'>
                  <textarea name='message' placeholder='Write your message...' value={message} onChange={handleChange} required></textarea>
                </div>
              </div>
              <input type="submit" value="Send message" className='submit-button' />
              <p id='p'></p>
            </form>
          </div>
        </div>
      </section>  
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className='copyright'>Copyright &copy; 2023 - Pradeepak5. All rights reserved.</div>
    </div>
  )
}
