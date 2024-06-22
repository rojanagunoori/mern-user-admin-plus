import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Tables from "../../components/Tables/table"
import Alert from 'react-bootstrap/Alert';

import Spiner from "../../components/Spiner/spiner"
import {useNavigate} from "react-router-dom"


import "./home.css"
import { addData, updateData,dltData } from '../../components/context/contextProvider';
import { deletefun, exporttocsvfun, usergetfunc } from '../../services/Apis';

import { toast } from 'react-toastify';
import FileSaver from 'file-saver';




const Home = () => {

  const [userData,setUserData]=useState([])

  const [showspin,setShowSpin]=useState(true)
const [search,setSearch]=useState("")
const [gender,setGender]=useState("All")
const [status,setStatus]=useState("All")
const [sort,setSort]=useState("New")
const [page,setPage]=useState(1)
const [pageCount,setPagecount]=useState(0)

  const { useradd, setUserAdd } = useContext(addData);
  const {update,setUpdate}=useContext(updateData)
  const {deletedata,setDeleteData}=useContext(dltData)
  const navigate=useNavigate()

  const adduser=()=>{

  navigate("/register")
  }

  //get user

  const userGet=async()=>{
const response =await usergetfunc(search,gender,status,sort,page)

if(response.status===200){
  setUserData(response.data.usersData)
  setPagecount(response.data.Pagination.pageCount)
}else{
  console.log("ërror form get user data")
}
  }

  //user delete

  const deleteUser=async(id)=>{
const response=await deletefun(id)
if(response.status===200){
  userGet()
  setDeleteData(response.data)
}else{
  toast.error("error")
}
  }

  //export user

  const exportUser=async()=>{
    const response=await exporttocsvfun()
    if(response.status===200){
      window.open(response.data.downloadUrl,"blank")
     // const blob = new Blob([response.data], { type: 'text/csv;charset=utf-8;' });
     // FileSaver.saveAs(blob, 'users.csv');
    }else{
      toast.error("Error exporting data")
    }
  }

  //pagination
  //handle  prev btn
  const handlePrevious=()=>{
    setPage(()=>{
      if(page===1) return page
      return page-1
    })
  }

  //handle next btn

  const handleNext=()=>{
    setPage(()=>{
      if(page===pageCount) return page
      return page+1;
    })
  }

  useEffect(()=>{
    userGet()
    
   setTimeout(()=>{
setShowSpin(false)
   },1200)
  },[search,gender,status,sort,page])

  return (
    <>
    {useradd? <Alert variant="success" onClose={() => setUserAdd(false)} dismissible>
        {useradd.fname.toUpperCase()} successfully Added
      </Alert>:""}
      {update? <Alert variant="primary" onClose={() => setUpdate(false)} dismissible>
        {update.fname.toUpperCase()} successfully Update
      </Alert>:""}
      {deletedata? <Alert variant="danger" onClose={() => setDeleteData(false)} dismissible>
        {deletedata.fname.toUpperCase()} successfully Deleted
      </Alert>:""}
    <div className='container'>
      <div className='main_div'>
       {/* Search Add btn */}
       <div className='serach_add mt-4 d-flex justify-content-around'>
         <div className='search col-lg-4'>
         <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setSearch(e.target.value)}
            />
            <Button variant="success" className='search_btn'>Search</Button>
          </Form>
         </div>
         <div className='add_btn'>
         <Button variant="primary"  onClick={adduser} className='search_btn'><i className="fa-solid fa-plus"></i>&nbsp; Add User</Button>
         </div>
       </div>

       {/* export,gender,status */}

       <div className='filter_div mt-5 d-flex justify-content-between flex-wrap'>
        <div className='export_div'>
        <Button  className='export_btn' onClick={exportUser}>Export To Csv</Button>
        </div>
        <div className='filter_gender'>
          <h3>Filter By Gender</h3>
          <div className='gender d-flex justify-content-center'>
          <Form.Check 
            type={"radio"}
            name='gender'
            label={"All"}
            value={"All"}
            onChange={e=>setGender(e.target.value)}
            defaultChecked
          />
          <Form.Check 
            type={"radio"}
            name='gender'
            label={"Male"}
            value={"Male"}
            onChange={e=>setGender(e.target.value)}
            
          />
          <Form.Check 
            type={"radio"}
            name='gender'
            label={"Female"}
            value={"Female"}
            onChange={e=>setGender(e.target.value)}
           
          />
          </div>

        </div>

        {/* short by value */}
        <div className='filter_newold'>
              <h3>Sort By value</h3>
              <Dropdown className='text-center'>
      <Dropdown.Toggle className='dropdown_btn' variant="success" id="dropdown-basic">
      <i className="fa-solid fa-sort"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>setSort("New")}>New</Dropdown.Item>
        <Dropdown.Item onClick={()=>setSort("Old")} >Old</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
        </div>
        {/* filter by status */}
        <div className='status'>
          <h3>Filter By Status</h3>
          <div className='status_radio d-flex justify-content-around '>
          <Form.Check 
            type={"radio"}
            name='status'
            label={"All"}
            value={"All"}
            defaultChecked
            
            onChange={e=>setStatus(e.target.value)}
          />
          <Form.Check 
            type={"radio"}
            name='status'
            label={"Active"}
            value={"Active"}
            onChange={e=>setStatus(e.target.value)}
          />
          <Form.Check 
            type={"radio"}
            name='status'
            label={"InActive"}
            value={"InActive"}
            onChange={e=>setStatus(e.target.value)}
          />
          </div>
        </div>
       </div>
      </div>
      {showspin?<Spiner/>:<Tables userData={userData} deleteUser={deleteUser} userGet={userGet}
      handlePrevious={handlePrevious} handleNext={handleNext} page={page} pageCount={pageCount}
      setPage={setPage}
      />}
    </div>
    
    </>
  )
}

export default Home