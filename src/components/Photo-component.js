import React, { Component } from 'react';
import moment from 'moment'
import axios from 'axios';

const Photo = props => (
  <tr>
    <td>{props.photo.description}</td>
    <td>{moment(props.photo.createdAt).format("L LTS")}</td>
    <td>
      <a href="#" onClick={() => { props.deletePhoto(props.photo._id) }}>delete</a>
    </td>
  </tr>
)

export default class PhotoDatabase extends Component {
    constructor(props) {
    super(props);

    this.deletePhoto = this.deletePhoto.bind(this)

    this.state = {photos: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/selfie/')
      .then(response => {
        this.setState({ photos: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
      
  }

  deletePhoto(id) {
    axios.delete('http://localhost:5000/selfie/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      photos: this.state.photos.filter(el => el._id !== id)
    })
  }

  photoList() {
    return this.state.photos.map(photo => {
      return <Photo photo={photo} deletePhoto={this.deletePhoto} key={photo._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Photo Database</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            { this.photoList() }
          </tbody>
        </table>
      </div>
    )
  }
}