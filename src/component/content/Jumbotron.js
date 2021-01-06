import React from 'react'
import {Rate,Space} from 'antd'
import Slide1 from './Slide1.jpg'
import Slide2 from './Slide2.jpg'
import Slide3 from './Slide3.jpg'
import Slide4 from './Slide4.jpg'
import { Carousel } from 'antd';


export default function Jumbotron(){

  return(
    <Carousel  autoplay  >
      <div>
         <div style={{
          backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1.0)), 
          url(${Slide1})`,
          backgroundPosition:'center',
          height:'35vw',
          display:'flex',
          justifyContent:'flex-start',
          padding:40,
          alignItems:'flex-end'
        }} >
          <Space size={16} direction='vertical' >
          <h2 style={{color:'white',display:'block'}} >Spiderman Home Coming</h2>
          <Rate disabled defaultValue={5} />
          
          </Space>
        </div>
      </div>
      <div>
        <div style={{
          backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1.0)), 
          url(${Slide2})`,
          height:'35vw',
          display:'flex',
          justifyContent:'flex-start',
          padding:40,
          alignItems:'flex-end'
        }} >
          <Space size={16} direction='vertical' >
          <h2 style={{color:'white',display:'block'}} >Sonic </h2>
          <Rate disabled defaultValue={4} />
          
          </Space>
        </div>
      </div>
      <div>
        <div style={{
          backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1.0)), 
          url(${Slide3})`,
          height:'35vw',
          display:'flex',
          justifyContent:'flex-start',
          padding:40,
          alignItems:'flex-end'
        }} >
          <Space size={16} direction='vertical' >
          <h2 style={{color:'white',display:'block'}} >Queens Gambit</h2>
          <Rate disabled defaultValue={4} />
          
          </Space>
        </div>
      </div>
      <div>
        <div style={{
          backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1.0)), 
          url(${Slide4})`,
          height:'35vw',
          display:'flex',
          justifyContent:'flex-start',
          padding:40,
          alignItems:'flex-end'
        }} >
          <Space size={16} direction='vertical' >
          <h2 style={{color:'white',display:'block'}} >Gears 5</h2>
          <Rate disabled defaultValue={5} />
          
          </Space>
        </div>
      </div>
    </Carousel>
  );
}