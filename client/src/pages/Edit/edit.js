import React, { useContext, useEffect, useState } from 'react'
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Spiner from "../../components/Spiner/spiner"
import Select from 'react-select';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./edit.css"
import { editfunc, singleusergetfuc } from '../../services/Apis';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../services/helper';
import { updateData } from '../../components/context/contextProvider';

const Edit = () => {
  const [showspin, setShowSpin] = useState(true)
  const [inputdata, setInputData] = useState({
    fname: "", lname: "", email: "", mobile: "", gender: "", location: ""
  })

  const [status, setStatus] = useState("Active");
  const [imgaedata,setImageData]=useState("")
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("")

  const {update,setUpdate}=useContext(updateData)

  const navigate=useNavigate()

  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'InActive', label: 'InActive' },
  ];

  const { id } = useParams()
  //set input value

  const setInputValue = e => {
    const { name, value } = e.target
    setInputData({ ...inputdata, [name]: value })
  }

  //status set
  const setStatusValue = e => {
    setStatus(e.value)
  }

  //profile set

  const setProfile = e => {
    setImage(e.target.files[0])
  }




  const userProfileGet = async () => {
    const response = await singleusergetfuc(id)

    if (response.status === 200) {
      setInputData(response.data)
      setStatus(response.data.status)
      setImageData(response.data.profile)
    }
    else {
      console.log("error")
    }
  }

  //submit userData
  const submitUserData =async e => {
    e.preventDefault()
    const { fname, lname, email, mobile, gender, location } = inputdata
    if (fname === "") {
      toast.error("First name is required")
    } else if (lname === "") {
      toast.error("Last name is required")
    } else if (email === "") {
      toast.error("Email is required")
    } else if (!email.includes("@")) {
      toast.error("Ënter Valid Email!")
    } else if (mobile === "") {
      toast.error("Mobile Number is required")
    } else if (mobile.length > 10) {
      toast.error("Enter Valid Mobile Number")
    } else if (gender === "") {
      toast.error("Gender is required")
    } else if (status === "") {
      toast.error("Status is required")
    } else if ( imgaedata === "" && !image ) {
      toast.error("Profile is required")
    } else if (location === "") {
      toast.error("Location is required")
    } else {
     try {
      const data = new FormData();
      data.append("fname", fname);
      data.append("lname", lname);
      data.append("email", email);
      data.append("mobile", mobile);
      data.append("gender", gender);
      data.append("status", status);
      data.append("user_profile", image || imgaedata);
      data.append("location", location);

      const config = {
          "Content-Type": "multipart/form-data"
      };

      const response =await editfunc(id,data,config)
     if(response.status===200){
      setUpdate(response.data)
      navigate("/")
     }else{
      const {response:data}=response
      if(data.status===401){
        toast.error(`${data.data.error}`);
      }
      if(data.status===500){
        toast.error("Only .png, .jpg and .jpeg formats are allowed!");
      }
      
     
     }
     } catch (error) {
      //toast.error(`${error}`)
      console.log(error)
     }
    }
  }

  

  useEffect(() => {
    if (image) {
      setImageData("")
      setPreview(URL.createObjectURL(image))
    }
  }, [image])

  useEffect(() => {
    userProfileGet()
    setTimeout(() => {
      setShowSpin(false)
    }, 1200)
  }, [])

  return (
    <>
      {showspin ? <Spiner /> :
        <div className='container'>
          <h2 className='text-center mt-1'>Update Your Details</h2>
          <Card className='shadow mt-3 p-3'>
            <div className='profile_div text-center'>
              <img src={image ? preview : `${BASE_URL}/uploads/${imgaedata}`} alt='img' />
            </div>
            <Form>
              <Row>

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label style={{ color: 'blue' }}>First Name</Form.Label>
                  <Form.Control type="text" name='fname' value={inputdata.fname} onChange={setInputValue} placeholder="Enter First Name" />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name='lname' value={inputdata.lname} onChange={setInputValue} placeholder="Enter Last Name" />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" value={inputdata.email} onChange={setInputValue} placeholder="Enter Email" name='email' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="text" onChange={setInputValue} name='mobile' value={inputdata.mobile} placeholder="Enter Mobile Number" />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Gender</Form.Label>
                  <Form.Check
                  style={{ color: "#000" }}
                    type={"radio"}
                    name='gender'
                    label={"Male"}
                    value={"Male"}
                    onChange={setInputValue}
                    checked={inputdata.gender==="Male"?true:false}
                  />
                  <Form.Check
              style={{ color: "#000" }}
                    type={"radio"}
                    name='gender'
                    label={"Female"}
                    value={"Female"}
                    onChange={setInputValue}
                    checked={inputdata.gender!=="Male"?true:false}
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Status</Form.Label>
                  <Select
                    defaultValue={status}
                    onChange={setStatusValue}
                    options={options}
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Profile</Form.Label>
                  <Form.Control type="file" name='user_profile' onChange={setProfile} placeholder="Select Your Profile" />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Enter Your Location</Form.Label>
                  <Form.Control type="text" name='location' value={inputdata.location} onChange={setInputValue} placeholder="Enter Location" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={submitUserData}>
                  Submit
                </Button>
              </Row>
            </Form>

          </Card>
          <ToastContainer
            position="top-center"

          />
        </div>}

    </>
  )
}

export default Edit