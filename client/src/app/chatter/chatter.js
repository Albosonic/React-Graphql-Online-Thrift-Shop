import React from 'react';
import { connect } from "react-redux";

class Chatter extends React.Component {
  constructor(props) {
    super(props);    
    this.chatList = React.createRef();    
  }
  componentDidUpdate() {
    let nodeList = this.chatList.current.childNodes;
    this.scrollToMsg(nodeList[nodeList.length - 1]);  
  }

  scrollToMsg(el) {
    el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
  }

  render() {
    const { currentChat } = this.props;    
    return (
      <div ref={ this.chatList } className="message-list-container">
        {   
          currentChat.map((msgObj, i) => (
            <div className="message-container" key={ i }>
              <p className="handle">handle</p>
              <div className="text-container">
                <p className="text">{ msgObj.message }</p>
              </div>
              <p className="time">{ msgObj.time }</p>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentChat: state.currentChat
})

export default connect(mapStateToProps)(Chatter);