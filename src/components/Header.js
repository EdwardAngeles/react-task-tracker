import React from 'react'
import PropTypes from 'prop-types'


const Header = ({title}) => {
  return (
    <header>
      <h1 style={headingStyle}>{title}</h1>
    </header>
  )
}

const headingStyle = {
  color: "red",
  backgroundColor: "greenyellow",
  fontSize: "32px"
};

Header.defaultProps = {
  title: "The Default Title"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header
