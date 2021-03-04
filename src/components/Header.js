import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" color="green" onClick={() => console.log('Hello')}/>
    </header>
  )
}

// const headingStyle = {
//   color: "red",
//   backgroundColor: "greenyellow",
//   fontSize: "32px"
// };

Header.defaultProps = {
  title: "The Default Title"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header
