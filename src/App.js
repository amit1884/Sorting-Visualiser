import React, { useState, useEffect } from 'react'
import Bar from './components/Bar'
import './app.css'
function App() {
    const [values,setValues]=useState({
        array:[],
        steps:[],
        colorKey:[],
        colors:[],
        timeouts:[],
        currentStep:0,
        count:10,
        delay:500,
        algorithm:''
    })


    const handleStart = () => {

    }
    
   const generateRandomNumber = (min,max) => {

        return Math.floor(Math.random() * (max-min) + min)
    }
   
   const generateElements = () => {
        let count =values.count;
        let arr=[]

        for(let i=0;i<count;i++){
            arr.push(generateRandomNumber(50,200))
        }

        setValues({...values,
            array:arr,
            steps:[arr],
            count:count,
            currentStep:0
        })
        console.log(arr)
    }
    useEffect(() => {
        generateElements()
    }, [])




    const changeArray = (index,value) => {

        let arr=values.array
        arr[index]=value
        setValues({...values,
            array:arr,
            steps:[arr],
            currentStep:0
        })
        console.log('changed..',arr)
    }

    const clearTimeOuts = ()=> {
        values.timeouts.forEach((timeouts) => clearTimeout(timeouts))
        setValues({...values,timeouts:[]})
    }
    const clearColorKey = () => {
        let blank=new Array(values.count).fill(0)
        setValues(...values,{
            colorKey:blank,
            colors:[blank]
        })
    }


    const bars=values.array.map((value,index)=>{
        return <Bar key={index} index={index} length={value} changeArray={changeArray}/>
    })
        return (
          <div className="app">
              <div className="frame">
                <div className="card container">
                    {bars}
                </div>
              </div>
          </div>
        )
}

export default App

