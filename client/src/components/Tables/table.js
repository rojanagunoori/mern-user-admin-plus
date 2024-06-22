import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/Card"
import Table from "react-bootstrap/Table"
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import "./table.css"
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../services/helper';
import { statusChangefun } from '../../services/Apis';
import { ToastContainer, toast } from 'react-toastify';
import Paginations from '../Pagination/Pagination';

const Tables = ({userData,deleteUser,userGet,handlePrevious,handleNext,page,pageCount,setPage}) => {
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/userprofile/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete= (id) => {
    navigate(`/userprofile/${id}`);
  };

  const handleChange=async(id,status)=>{
    const response=await statusChangefun(id,status)
    if(response.status===200){
      userGet()
      toast.success("Status Updated")
    }else{
      toast.error("error ")
    }

  }

  return (
    <>
      <div className='container'>
        <Row>
          <div className='col mt-0'>
            <Card className='shadow '>
              <Table className="align-align-items-center" responsive="sm">
                <thead className='thead-dark'>
                  <tr className='table-dark'>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Profile</th>
                    <th>Action</th>
                  </tr>

                </thead>
                <tbody>
                  {userData.length>0?userData.map((element,index)=>{
                    return(
                      
                      <tr  key={element._id || index}>
                    <td>{index+1+(page-1)*4}</td>
                    <td>{element.fname+" " + element.lname}</td>
                    <td>{element.email}</td>
                    <td>{element.gender==="Male"?"M":"F"}</td>
                    <td className='d-flex align-items-center'>
                      <Dropdown className='text-center'>
                        <Dropdown.Toggle className='dropdown_btn' variant="success" id="dropdown-basic">
                        <Badge bg={element.status === "Active" ? "primary" : "danger"}>{element.status} <i className="fa-solid fa-angle-down"></i></Badge>

                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={()=>handleChange(element._id,"Active")}>Active</Dropdown.Item>
                          <Dropdown.Item  onClick={()=>handleChange(element._id,"InActive")}>InActive</Dropdown.Item>

                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td className='img_parent'>
                    <img src={`${BASE_URL}/uploads/${element.profile}`} alt="img" />
                    </td>
                    <td>
                      <Dropdown className='text-center'>
                        <Dropdown.Toggle variant="light" className='action' id="dropdown-basic">
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {/*<NavLink to={`/userprofile/${element._id}`}>*/}
                          <Dropdown.Item onClick={() => handleView(element._id)}><i className="fa-solid fa-eye" style={{ color: "green" }}></i> <span>View</span></Dropdown.Item>
                          {/*</Dropdown.Menu></NavLink >*/}
                         
                          <Dropdown.Item onClick={() => handleEdit(element._id)}><i className="fa-solid fa-pen-to-square" style={{ color: "blue" }}></i> <span>Edit</span></Dropdown.Item>
                          <Dropdown.Item onClick={() => deleteUser(element._id)}><i className="fa-solid fa-trash" style={{ color: "red" }}></i> <span>Delete</span></Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                      
                    )
                  }): <tr>
                  <td colSpan="7" className='text-center'>No Data Found</td>
                </tr>}
                  
                </tbody>
              </Table>
              <Paginations handlePrevious={handlePrevious} handleNext={handleNext} page={page} pageCount={pageCount}
      setPage={setPage}/>
            </Card>
          </div>
        </Row>
        <ToastContainer/>
      </div>
    </>
  )
}

export default Tables