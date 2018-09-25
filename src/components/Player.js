import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

class Player extends React.Component {
  propTypes: {
  }

  render() {
    return (
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          height: "60px",
          width: "100%",
          background: "#999",
        }}
      >
        <div
          style={{
            float: "left",
            margin: "8px",
            height: "42px",
            width: "42px",
            border: "solid 1px #fff",
            background: "#666",
          }}
        >
        </div>
        <MoreVertIcon style={{ margin: "18px 0px 0px -12px", float: "left", color: "#fff" }} />
        <div
          style={{
            margin: "22px 0px",
            width: "240px",
            float: "left",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Artist Name - Song Title
        </div>
        <PlayCircleOutlineIcon
          style={{
            float: "right",
            margin: "8px",
            height: "42px",
            width: "42px",
            color: "#fff",
          }}
        />
      </div>
    );
  }
};
  
export default Player