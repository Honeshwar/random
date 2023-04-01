import React from "react";

// Use props to add styles, link and images so that it looks like the reference image.

class ListItem extends React.Component {
  render() {
    return (
      <div
        class="listItem"
        style={{
          backgroundColor: this.props.data.bgColor
        }}
      >
        <img src={this.props.data.icon} alt={this.props.data.name} />
        <a href={this.props.data.link}>{this.props.data.name}</a>
      </div>
    );
  }
}

export default ListItem;
