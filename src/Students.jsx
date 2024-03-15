import React from 'react'
import PropTypes from 'prop-types'

function Students(props) {
  return (
    <div className='student'>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student:{props.isStudent ? "yes":"No"} </p>
    </div>
  )
}
// verifier le type le type des datas.
Students.PropTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
// props default=> valeur par defaut

Students.defaultProps={
    name:"Guest",
    age: "unknown",
    isStudent:false
}
export default Students