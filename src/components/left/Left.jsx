import React from 'react'
import './Left.css'
import white from '../images/white.png'
import { BsList,BsYoutube,BsTrophy } from 'react-icons/bs';
import { LuRadioTower, } from 'react-icons/lu';
import {AiOutlineDown ,AiOutlineFire } from 'react-icons/ai';
import { MdOutlineMusicNote} from 'react-icons/md';
import { SiYoutubegaming ,SiReasonstudios} from 'react-icons/si';
import {TbBrandYoutubeKids } from 'react-icons/tb';
function Left() {
  return (
    <div className='left'>
      <div className='listandyoutube'>
        <BsList  className='list1'/>
        <div className='youtube'>
        <BsYoutube  className='youtubeicon'/>
          <div className='youtubeandnp'>
          <div className='text'>YouTube</div>
          <div className='np'>NP</div>
          </div>
        </div>
      </div>
      <div className='line'></div>
      <div className='subscribtions'>Subscriptions</div>
      <div className='circlenameandicon'>
        <div className="tseriesandcircle">
       <img src={white} className='white'/>
        <div className='texts'>T-Series</div>
        </div>
        <LuRadioTower className='tower'/>
      </div>
      <div className='circlenameandicon'>
        <div className="tseriesandcircle">
       <img src={white} className='white'/>
        <div className='texts'>T-Series</div>
        </div>
        <LuRadioTower className='tower'/>
      </div>
      <div className='circlenameandicon'>
        <div className="tseriesandcircle">
       <img src={white} className='white'/>
        <div className='texts'>T-Series</div>
        </div>
        <LuRadioTower className='tower'/>
      </div>
      <div className='circlenameandicon'>
        <div className="tseriesandcircle">
       <img src={white} className='white'/>
        <div className='texts'>T-Series</div>
        </div>
        <LuRadioTower className='tower'/>
      </div>
      <div className='circlenameandicon'>
        <div className="tseriesandcircle">
       <img src={white} className='white'/>
        <div className='texts'>T-Series</div>
        </div>
        <LuRadioTower className='tower'/>
      </div>
      <div className='circlenameandicon'>
        <div className="tseriesandcircle">
       <img src={white} className='white'/>
        <div className='texts'>T-Series</div>
        </div>
        <LuRadioTower className='tower'/>
      </div>
      <div className='circlenameandicon'>
        <div className="tseriesandcircle">
       <img src={white} className='white'/>
        <div className='texts'>T-Series</div>
        </div>
        <LuRadioTower className='tower'/>
      </div>
      <div className='circlenameandicon'>
        <div className="tseriesandcircle">
       <AiOutlineDown  className='down'/>
       <div className='texts'>Show 208 more</div>
      
        </div>
      </div>
      <div className='line'></div>
      <div className='subscribtions'>Explore</div>
      <div className='fireandtrending'>
<AiOutlineFire  className='fire'/>
<div className='trending'>Trending</div>
      </div>
      <div className='fireandtrending'>
<MdOutlineMusicNote  className='fire'/>
<div className='trending'>Trending</div>
      </div>
      <div className='fireandtrending'>
<SiYoutubegaming  className='fire'/>
<div className='trending'>Trending</div>
      </div>
      <div className='fireandtrending'>
<BsTrophy  className='fire'/>
<div className='trending'>Trending</div>
      </div>
      <div className='line'></div>
      <div className='subscribtions'>More From Youtube</div>
      <div className='fireandtrending'>
<SiReasonstudios  className='firered'/>
<div className='trending'>Youtube Studio</div>
      </div>
      <div className='fireandtrending'>
<TbBrandYoutubeKids  className='firered'/>
<div className='trending'>Youtube Kids</div>
      </div>
    </div>
  )
}

export default Left