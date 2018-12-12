import './store-item.scss';
import React from 'react';
import store from '../../../redux/store';
import { Redirect } from 'react-router-dom';

import { storeItemEditMode, updateOneMessage, updateCurrentChat } from '../../../redux/actions';
import { subscribeToChatter, sendToChatter } from '../../services/item-service';

import Chatter from '../../chatter/chatter';

class StoreItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chatTxt: '',
      messages: this.props.storeItem.messages,
      currentMessage: '',
      showMessages: false,
      chatClass: 'hide',
      enterInfo: false
    };
    this.handleActionClick = this.handleActionClick.bind(this);
    this.handleChatChange = this.handleChatChange.bind(this);
    this.handleChatSubmit = this.handleChatSubmit.bind(this);
    this.handleMsgClick = this.handleMsgClick.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.chatInput = React.createRef();
  }

  handleActionClick(e) {
    store.dispatch(storeItemEditMode({
      storeItem: this.props.storeItem,
      storeItemActionMode: true,
      title: 'Edit Item',
    }))
  }

  handleMsgClick(e) {
    let state = this.state;
    store.dispatch(updateCurrentChat(this.props.storeItem.messages));
    state.chatClass === 'hide' ? this.setState({chatClass: 'show'}) : this.setState({chatClass: 'hide'});
  }

  handleChatChange(e) {
    e.preventDefault();
    this.setState({ chatTxt: e.target.value });
  }

  handlePurchase() {    
    this.setState({ enterInfo: true })
  }

  handleChatSubmit(e) {
    e.preventDefault();
    const { storeItem } = this.props;
    sendToChatter({ messageData: { storeId: storeItem.storeId, itemId: storeItem._id, message: this.state.chatTxt }});
    subscribeToChatter()
    .then(storeItem => {
      this.chatInput.current.value = "";
      store.dispatch(updateOneMessage(storeItem));
    })
  }

  render() {
    const { storeItem, handleItemClick, view } = this.props;
    let showComIcons = view === 'activities' || view === 'shop';
    if(this.state.enterInfo) return <Redirect to="./account-settings"/>;
    return (
      <div className="outer-item-container">
        <div className="item-container">
          <div className="left-container">
            <span className={ `thumbnail ${ storeItem.itemSubType }` }></span>
            <div className="item-img-container">
              <p className="img-text">Image</p>
              <img className="item-img" src={ storeItem.imgFileData } onClick={ ()=> handleItemClick(storeItem.imgFileData) }/>
            </div>
          </div>
          <div className="description-container">
            <h4 className="description-title">Decription</h4>
            <p className="description">{ storeItem.itemDescription }</p>
          </div>
          <div className="edit-icon-container">
            { view === 'my-store' && <span className="edit-icon" onClick={ this.handleActionClick }></span> }
            { showComIcons && <span onClick={ this.handleMsgClick } className="messages-icon"></span> }
            { view === 'shop' && <span className="buy-icon" onClick={ this.handlePurchase }>Buy</span> }
          </div>
        </div>
        <div className={`chat-container ${ this.state.chatClass }`}>
          <Chatter/>
          <form onSubmit={ this.handleChatSubmit } className="chat-form">
            <input ref={this.chatInput} onChange={ this.handleChatChange } className="chat-input" type="text" placeholder="enter message here."/>
          </form>
        </div>
      </div>
    )
  }
}

export default StoreItem;