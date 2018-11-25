import React from 'react';
import './drop-image.scss';

class DropImage extends React.Component {
  constructor(props) {
    super(props);
    this.dropArea = React.createRef();
    this.handleOnDragEnter = this.handleOnDragEnter.bind(this);
    this.handleOnDragLeave = this.handleOnDragLeave.bind(this);
    this.handleOnDragOver = this.handleOnDragOver.bind(this);
    this.handleOnDrop = this.handleOnDrop.bind(this);
    this.state = {
      showPreviewImg: false,
      highlight: '',
      hideText: '',
      imgFileData: []
    };
  }

  handleOnDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({highlight:'highlight'});
  }

  handleOnDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  handleOnDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({highlight: ''});
  }
  handleOnDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({highlight: ''});
    let reader = new FileReader()
    reader.readAsDataURL(e.dataTransfer.files[0])
    reader.onloadend = () => {
      this.setState({imgFileData: [...this.state.imgFileData, reader.result]})
      this.setState({showPreviewImg: true});
      this.setState({hideText: 'hide'})
    }
  }
  renderPreviewImgs() {
    return this.state.imgFileData.map((fileData, i) => {
      return <img width="100px" height="100px" src={fileData} key={i}/>
    })
  }

  render() {
    return (
      <div
        className={`drop-area ${this.state.highlight}`}
        onDragEnter={ this.handleOnDragEnter }
        onDragOver={ this.handleOnDragOver }
        onDragLeave={ this.handleOnDragLeave }
        onDrop={ this.handleOnDrop }
        >
        { this.state.showPreviewImg && this.renderPreviewImgs() }
        <input type="file" id="file-elem" multiple accept="image/*"></input>
        <label className={`drop-text ${this.state.hideText}`} htmlFor="fileElem">drag and drop img files here.</label>
      </div>
    )
  }
}

export default DropImage;