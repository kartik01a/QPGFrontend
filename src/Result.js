import React,{useState,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import Axios from 'axios'
import './result.css'
import { FaDotCircle } from "react-icons/fa";

function Result() {
    const location = useLocation();
    const[data,setData] = useState([]);


    const fetchData= async()=>{
        try{
            const res1 = await Axios.get('https://qpgbackends.onrender.com/app/getEasyQuestions');
            const response1 = res1.data.slice(0,Number(location.state.easy));
            const res2 = await Axios.get('https://qpgbackends.onrender.com/app/getMediumQuestions');
            const response2 = res2.data.slice(0,Number(location.state.medium));
            const res3 = await Axios.get('https://qpgbackends.onrender.com/app/getHardQuestions');
            const response3 = res3.data.slice(0,Number(location.state.hard));
            
            const f2 = [...response1, ...response2, ...response3];
            const shuffledArray = f2.sort((a, b) => 0.5 - Math.random());
            await setData(shuffledArray);
            console.log(data);

        }catch(e){
            console.log(e.message);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);

  return (<>
    <section className='outer'>
        <p className='para'>Note :-&nbsp;&nbsp; <FaDotCircle className='green' /> : Easy &nbsp;,&nbsp;<FaDotCircle className='yellow' /> : Medium&nbsp; ,&nbsp;<FaDotCircle className='red'/> : Hard</p>
        <div className='mainResult'>
           {
           data.map((d)=>{
               return <>
               <div className='innerMainResult'><span className='spanInner2'>&nbsp;&nbsp;<p className={`dot ${d.difficulty === "Easy" ?"green": d.difficulty ==="Hard" ?"red":"yellow"}`}><FaDotCircle /></p>&nbsp;&nbsp;{d.question}</span><span className='spanInner'>&#10633;&nbsp;{d.subject}&nbsp;,&nbsp;{d.marks}&nbsp;&#x298A;</span></div>
               </>
           })
        }
        </div>
    </section>
    </>
  )
}

export default Result