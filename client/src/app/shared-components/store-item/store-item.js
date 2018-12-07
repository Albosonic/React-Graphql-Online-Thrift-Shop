import React from 'react';
import PropTypes from 'prop-types';

import store from '../../../redux/store';
import { ToggleStoreItemActionMode, storeItemEditMode } from '../../../redux/actions';

import './store-item.scss';
import { subscribeToChatter, sendToChatter } from '../../services/item-service';


class StoreItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chatTxt: '',
      messages: []
    };
    this.handleActionClick = this.handleActionClick.bind(this);
    const { view, storeItem } = this.props;
    this.handleMsgClick = this.handleMsgClick.bind(this);
    this.handleChatChange = this.handleChatChange.bind(this);
    this.handleChatSubmit = this.handleChatSubmit.bind(this);
    this.renderChattter = this.renderChattter.bind(this);
  }

  handleActionClick(e) {
    store.dispatch(storeItemEditMode({
      storeItem: this.props.storeItem,
      storeItemActionMode: true,
      title: 'Edit Item',
    }))
  }

  handleMsgClick(e) {
    console.log(e.target)
  }

  handleChatChange(e) {
    e.preventDefault();
    this.setState({ chatTxt: e.target.value });
  }

  renderChattter(messages) {    
    return messages.map((msgObj, i) => (
      <div className="message-container" key={ i }>
        <p className="handle">handle</p>
        <div className="text-container">
          <p className="text">{ msgObj.msg }</p>
        </div>
        <p className="time">{ msgObj.date }</p>
      </div>
    ))          
  }

  handleChatSubmit(e) {
    e.preventDefault();
    sendToChatter(this.state.chatTxt)
    subscribeToChatter()
    .then(msg => {
      msg = [msg];
      console.log('spread', msg)
      console.log('msg', msg)
      this.setState({messages: [...this.state.messages, ...msg]})
      this.forceUpdate();
      console.log(this.state)
    })
  }

  render() {
    const { storeItem, handleItemClick, view } = this.props;
    let showMessageIcon = view === 'activities' || view === 'shop';
    return (
      <div className="outer-item-container">
        <div className="item-container">
          <div className="left-container">
            <span className={ `thumbnail ${storeItem.itemSubType}` }></span>
            <div className="item-img-container">
              <p className="img-text">Image</p>
              <img className="item-img" src={ storeItem.imgFileData } onClick={ ()=> handleItemClick(storeItem.imgFileData  ) }/>
            </div>
          </div>
          <div className="description-container">
            <h4 className="description-title">Decription</h4>
            <p className="description">{ storeItem.itemDescription }</p>
          </div>
          <div className="edit-icon-container">
            { view === 'my-store' && <span className="edit-icon" onClick={ this.handleActionClick }></span> }
            { showMessageIcon && <span onClick={ this.handleMsgClick } className="messages-icon"></span> }
          </div>
        </div>
        <div className="chat-container">
          { this.renderChattter(this.state.messages) }
          <form onSubmit={ this.handleChatSubmit } className="chat-form">
            <input onChange={ this.handleChatChange } className="chat-input" type="text" placeholder="enter message here."/>
          </form>
        </div>

      </div>
    )
  }
}

StoreItem.propTypes = {
  storeItem: PropTypes.object,
  handleItemClick: PropTypes.func
}

export default StoreItem