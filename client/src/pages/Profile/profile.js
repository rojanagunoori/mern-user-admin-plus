import React,{ useContext, useEffect, useState }  from 'react'
import Card from "react-bootstrap/Card"
import "./profile.css"
import Spiner from "../../components/Spiner/spiner"
import Row from 'react-bootstrap/esm/Row'
import { useParams } from 'react-router-dom'
import { singleusergetfuc } from '../../services/Apis'
import { BASE_URL } from '../../services/helper'
import moment from "moment"


const Profile = () => {
  const [userProfile,setuserProfile]=useState([])
  const [showspin,setShowSpin]=useState(true)

const {id}=useParams()


  const userProfileGet=async()=>{
const response=await singleusergetfuc(id)
if(response.status===200){
  setuserProfile(response.data)
}
else{
  console.log("error")
}
  }

  useEffect(()=>{
    userProfileGet()
   setTimeout(()=>{
setShowSpin(false)
   },1200)
  },[id])
  return (
    <>
    {showspin?<Spiner/>:
    <div className='container'>

      <Card className='card-profile shadow col-lg-6 mx-auto mt-5'>
<Card.Body>
  <Row>
    <div className='card-profile-status d-flex justify-content-center'>
      <img src={`${BASE_URL}/uploads/${userProfile.profile}`} alt='img'/>
    </div>
    <div className='text-center'>
  <h3>{userProfile.fname+" "+userProfile.lname}</h3>
  <h4><i className="fa-solid fa-envelope email"></i>&nbsp;:- <span>{userProfile.email}</span></h4>
<h5><i className="fa-solid fa-mobile"></i>&nbsp;:- <span>{userProfile.mobile}</span></h5>
<h4><i className="fa-solid fa-person"></i>&nbsp;:- <span>{userProfile.gender}</span></h4>
<h4><i className="fa-solid fa-location-dot location"></i>&nbsp;:- <span>{userProfile.location}</span></h4>
<h4>Status&nbsp;:- <span>{userProfile.status}</span></h4>
<h5>Date Created <i className="fa-regular fa-calendar-days calender"></i>&nbsp;:- <span>{moment(userProfile.dateCreated).format("DD-MM-YYYY HH:mm")}</span></h5>
<h5>Date Updated <i className="fa-regular fa-calendar-days calender"></i>&nbsp;:- <span>{moment(userProfile.dateUpdated).format("DD-MM-YYYY HH:mm")}</span></h5>
    </div>
  </Row>
</Card.Body>
      </Card>
    </div>}
    </>
  )
}

export default Profile