import React from "react";

function Background(props) {
  const styles = {
    background:
   { 
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundSize: `${props.backgroundSize}`,
    minHeight: `${props.minHeight}`,
    width : 'auto',
    backgroundRepeat: `${props.backgroundRepeat}`,
    backgroundAttachment: `${props.backgroundAttachment}`,
    backgroundPosition: `${props.backgroundPosition}`
  },
  };

  return (
    <div className="parallax" style={styles.background}>
      {props.children}
    </div>
  );
}

export default Background;