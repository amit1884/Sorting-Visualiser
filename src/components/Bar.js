import React, {useState} from 'react'

function Bar({index, length, changeArray }) {

    const [len,setLen]=useState(length)
    let barStyle={
        background:'#3d5af1',
        height:length,
        marginTop:200-length
    }
   
    let textStyle={

        width:length,
        top:Math.floor(length/2)-10,
        left:-Math.floor(length/2)+10,
        
    }

    let quantityBtnStyle={
        top:length-9,

    }
    const handleChange=(e)=>{
        let val=e.target.value
        if(val==='')
        {
            setLen(0)
            changeArray(index,0)
        }
        else
        {
            val=parseInt(val)
            if(val>200){
                setLen(200)
                changeArray(index,200)
            }
            else{
                setLen(val)
                changeArray(index,val)
            }
        }
    }


    const increament=()=>{
       let val=len+1;
        if(val>200){
            setLen(200)
            changeArray(index,200)
        }
        else{
            setLen(val)
            changeArray(index,val)
        }
        changeArray(index,len+1)
    }
    const decreament=()=>{
        let val=len-1;
        if(val<0)
        {
            setLen(0)
            changeArray(index,0)
        }
        else
        {
            setLen(len-1);
            changeArray(index,len-1)
        }
    }
    return (
        <div className="bar" style={barStyle}>
           <input type="number" className="text"
            style={textStyle} 
            value={len} onChange={handleChange}/>
           <div className="quantityNav">
               <div className="quantity-btn quantity-up" style={quantityBtnStyle} onClick={increament}>
                    +
               </div>
               <div className="quantity-btn quantity-down" style={quantityBtnStyle} onClick={decreament}>
                    -
               </div>
           </div>
        </div>
    )
}

export default Bar
