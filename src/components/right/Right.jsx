import React, { useState } from 'react'
import './Right.css'
import {AiOutlineSearch,AiOutlineVideoCameraAdd } from 'react-icons/ai';
import {FaMicrophone ,} from 'react-icons/fa';
import {MdNotificationsNone} from 'react-icons/md';
import prince from '../images/prince.jpg'
import white from '../images/white.png'
// import {useState} from "react";

function Right() {
  const[name,setName]=useState({})
function Click(){
  setName({backgroundColor:"white", color:"black"})
}
  return (
    <div  style={name}  className='right'>
      <div className='searchandicons'>
        <input type='text' placeholder='search' className='searchbox'></input>
        <div className='searchiconbox'>
          <AiOutlineSearch  className='searchicon'/>
        </div>
        <div className='microbox'>
        <FaMicrophone  className='microphone'/>
        </div>
        <div className='rightthree'>
<AiOutlineVideoCameraAdd  className='bellicon'/>
<div className='belliconand1'>
<MdNotificationsNone  className='bellicon'/>
<div className='circle'>
  <div className='one'>1</div>
</div>
</div>
<img src={prince} onClick={Click} className='prince'/>
        </div>
      </div>
      <div className='all'>
        <div className='textbox1'>All</div>
        <div className='textbox'>Mixes</div>
        <div className='textbox'>Scene</div>
        <div className='textbox'>Martail arts</div>
        <div className='textbox'>Gaming</div>
        <div className='textbox'>Live</div>
        <div className='textbox'>Pradeep</div>
        <div className='textbox'>Manish</div>
        <div className='textbox'>Eliza</div>
        <div className='textbox'>Parvat</div>
        <div className='textbox'>News</div>
        <div className='textbox'>Burger House</div>
        <div className='textbox'>Indreni</div>
        <div className='textbox'>mashup</div>
        <div className='textbox'>mashup</div>
      </div>
      <div className='allboxes'>
      <div className='videoboxes'>
        <div className='box1'></div>
        <div className='logoandtext'>
        <img src={white} className='white1'/>
        <div className='twotexts'>
        <div className='name'>Rush Hour 1-i'm blackanese.mov</div>
        <div className='views'>Lazy Boys Production</div>
        <div className='views'>8.3M views .12 years ago</div>
        </div>
        </div>
      </div>
      <div className='videoboxes'>
        <div className='box1'></div>
        <div className='logoandtext'>
        <img src={white} className='white1'/>
        <div className='twotexts'>
        <div className='name'>Rush Hour 1-i'm blackanese.mov</div>
        <div className='views'>Lazy Boys Production</div>
        <div className='views'>8.3M views .12 years ago</div>
        </div>
        </div>
      </div>
      <div className='videoboxes'>
        <div className='box1'></div>
        <div className='logoandtext'>
        <img src={white} className='white1'/>
        <div className='twotexts'>
        <div className='name'>Rush Hour 1-i'm blackanese.mov</div>
        <div className='views'>Lazy Boys Production</div>
        <div className='views'>8.3M views .12 years ago</div>
        </div>
        </div>
      </div>
      <div className='videoboxes'>
        <div className='box1'></div>
        <div className='logoandtext'>
        <img src={white} className='white1'/>
        <div className='twotexts'>
        <div className='name'>Rush Hour 1-i'm blackanese.mov</div>
        <div className='views'>Lazy Boys Production</div>
        <div className='views'>8.3M views .12 years ago</div>
        </div>
        </div>
      </div>
      <div className='videoboxes'>
        <div className='box1'></div>
        <div className='logoandtext'>
        <img src={white} className='white1'/>
        <div className='twotexts'>
        <div className='name'>Rush Hour 1-i'm blackanese.mov</div>
        <div className='views'>Lazy Boys Production</div>
        <div className='views'>8.3M views .12 years ago</div>
        </div>
        </div>
      </div>
      <div className='videoboxes'>
        <div className='box1'></div>
        <div className='logoandtext'>
        <img src={white} className='white1'/>
        <div className='twotexts'>
        <div className='name'>Rush Hour 1-i'm blackanese.mov</div>
        <div className='views'>Lazy Boys Production</div>
        <div className='views'>8.3M views .12 years ago</div>
        </div>
        </div>
      </div>
      <div className='videoboxes'>
        <div className='box1'></div>
        <div className='logoandtext'>
        <img src={white} className='white1'/>
        <div className='twotexts'>
        <div className='name'>Rush Hour 1-i'm blackanese.mov</div>
        <div className='views'>Lazy Boys Production</div>
        <div className='views'>8.3M views .12 years ago</div>
        </div>
        </div>
      </div>
      <div className='videoboxes'>
        <div className='box1'></div>
        <div className='logoandtext'>
        <img src={white} className='white1'/>
        <div className='twotexts'>
        <div className='name'>Rush Hour 1-i'm blackanese.mov</div>
        <div className='views'>Lazy Boys Production</div>
        <div className='views'>8.3M views .12 years ago</div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Right