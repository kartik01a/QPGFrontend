import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'
import './App.css'

function HomeForm() {
  const[data,setData] = useState({easy:"" ,medium:"",hard:""});
  const Navigate = useNavigate();

  const handleChange = (e)=>{
    const num = e.target.name;
    const value = e.target.value;
    setData({...data,[num]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let easy = data.easy /2.5;
    let medium = data.medium /5;
    let hard = data.hard /10;
    Navigate('./result',{replace:true, state:{easy,medium,hard}});
  }

  return (
    <>
    <section className='formOuter'>
      <h1 className='heading'>Question Paper Generator</h1>
          <form className='main' action='' onSubmit={handleSubmit}>
            <div className='fields'>
              <label>Easy question's percentage.</label>
              <input type="number" className='label' onChange={handleChange} value={data.easy} name='easy' placeholder='Try multiple of 5' />
            </div>
            <div className='fields'>
              <label>Medium question's percentage.</label>
              <input type="number" className='label' onChange={handleChange} value={data.medium} name='medium' placeholder='Try multiple of 5' />
            </div>
            <div className='fields'>
              <label>Hard question's percentage.</label>
              <input type="number" className='label' onChange={handleChange} value={data.hard} name='hard' placeholder='Try multiple of 10' />
            </div>
        
              <div className='fields'>
                <input type="submit" className='submitBtn' />
              </div>
                           
          </form>
    </section>
    </>
  )
}

export default HomeForm