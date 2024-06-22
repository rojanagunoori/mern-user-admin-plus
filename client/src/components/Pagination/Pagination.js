import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import "./pagination.css"

const Paginations = ({ handlePrevious, handleNext, page, pageCount, setPage }) => {
  return (
    <>
    {
      pageCount>0 &&
    
      <div className="pagination_div d-flex justify-content-end mx-s">
        <Pagination>

          <Pagination.Prev onClick={()=>handlePrevious()}/>
            {
             Array(pageCount).fill(null).map((element, index) => {
              return (
                <React.Fragment key={index}>
                  <Pagination.Item active={page === index + 1} onClick={()=>setPage(index+1)}>
                    {index + 1}
                  </Pagination.Item>
                </React.Fragment>
              );
            })
            
            }
         
          

          <Pagination.Next  onClick={()=>handleNext()}/>

        </Pagination>
      </div>}
    </>
  )
}

export default Paginations