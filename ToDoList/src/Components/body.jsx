import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const body = (props) => {
  return (
    <>
    <div className="container bg-warning mt-3 p-3 rounded-4 shadow-lg">
  <div className="d-flex justify-content-between align-items-center">
    <span className="fs-5 fw-semibold text-dark">
      {props.msg}
    </span>

    <div>
      <input
        id="edit"
        type="button"
        value="Edit"
        className="btn btn-sm btn-primary me-2 rounded-3"
        onClick={e => {
          let arr = JSON.parse(localStorage.getItem("myMgs"));
          arr[props.index]=txtMessage.value;
          localStorage.setItem("myMgs", JSON.stringify(arr));
          props.setMessages(arr);
        }}
      />

      <input
        id="cross"
        type="button"
        value="X"
        className="btn btn-sm btn-danger rounded-3"
        onClick={e => {
          let arr = JSON.parse(localStorage.getItem("myMgs"));
          arr.splice(props.index, 1);
          localStorage.setItem("myMgs", JSON.stringify(arr));
          props.setMessages(arr);
        }}
      />
    </div>
  </div>
</div>
    </>
  )
}

export default body
