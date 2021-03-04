
const Button = ({text, color, onClick}) => {
  const style = {
    backgroundColor: color ?? this.defaultProps.color
  }
  
  return (
    <button
      style={style}
      className="btn"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Edward",
  color: "blue"
}

export default Button;
