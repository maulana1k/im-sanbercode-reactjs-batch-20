import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Rate,Space} from 'antd'

import { Carousel,Skeleton } from 'antd';


export default function Jumbotron(){
  const [banner, setBanner] = useState([])
  const [banner2, setBanner2] = useState([])

  useEffect(() => {
    axios.get('https://backendexample.sanbersy.com/api/data-movie')
    .then( res => {
      let data = res.data
      setBanner(data.filter( el => {
        return el.rating >= 8
      }).slice(0,3))
    }).catch( err => {console.log(err.message)})
    axios.get('https://backendexample.sanbersy.com/api/data-game')
    .then( res => {
      let data = res.data
      setBanner2(data.slice(0,3))
    }).catch( err => {console.log(err.message)})
  },[])
  return(
    <Carousel  autoplay  >
      {banner.map((el,index) => {
        return(
      <div>
         <div style={{
          backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), 
          url(${el.image_url})`,
          backgroundPosition:'center',
          height:400,
          display:'flex',
          justifyContent:'flex-start',
          padding:40,
          alignItems:'flex-end'
        }} >
          <Space size={16} direction='vertical' >
          <h2 style={{color:'white',display:'block',fontSize:26}} >{el.title}</h2>
          <Rate disabled defaultValue={el.rating/2} />
          
          </Space>
        </div>
      </div>
      
          )
      })}
      { banner2.map(el => {
        return(
          <div>
            <div style={{
              backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), 
              url(${el.image_url})`,
              height:400,
              display:'flex',
              justifyContent:'flex-start',
              padding:40,
              alignItems:'flex-end'
            }} >
              <Space size={16} direction='vertical' >
              <h2 style={{color:'white',display:'block',fontSize:26}} >{el.name}</h2>
              <h4 style={{color:'white',display:'block',fontSize:18}} >{el.platform}</h4>
              <div style={{color:'white'}} >
              {el.multiplayer == 1 && <p style={{border:'4px solid white',padding:5,float:'left',margin:5,fontSize:14}} ><b>Multiplayer</b></p>}
              {el.singlePlayer == 1 && <p style={{border:'4px solid white',padding:5, float:'left',margin:5,fontSize:14}} ><b>Singleplayer</b></p>}
              </div>
              </Space>
            </div>
          </div>
          )
      }) }
      {(banner2.length && banner.length) === 0 && (
        <div>
          <div style={{padding:40,background:'white'}} >
          <Skeleton active />
          <Skeleton active />
            
          </div>
        </div>
        )}
      
    </Carousel>
  );
}