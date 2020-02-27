import React from "react";

function Button(props) {
  const { style, type, ...rest } = props;
  const getColor = type => {
    switch (type) {
      case 'primary':
        return '#26C281'
      case 'danger':
        return '#FF6448'
      default:
        break;
    }
  }
  const styles = {
    background: getColor(type || 'primary'),
    border: "1px solid rgba(34, 34, 34, 0.1)",
    borderRadius: "8px",
    color: '#ffffff',
    padding: '8px 16px',
    fontSize: '14px',
    lineHeight: '16px'
  };
  const userStyles = props.style || {};
  
  Object.keys(userStyles).forEach(key => {
    styles[key] = userStyles[key];
  });
  
  return (
    <button
      style={styles}
      {...rest}
    >
      {props.children}
    </button>
  );
}

export default Button;
