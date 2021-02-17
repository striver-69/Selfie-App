import React, {Component} from 'react';
import axios from 'axios'

export default class TakeSelfie extends Component{
    constructor(props)
    {
        super(props);

        this.onChangeDescription=this.onChangeDescription.bind(this)
        this.onSubmit=this.onSubmit.bind(this)

        this.state={
            description:'',
            date:new Date()
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/selfie/')
        .then(response=>{
            if(response.data.length > 0){
                this.setState({
                    users:response.data.map(user=>user.username),
                })
            }
        })
    }
    
    onChangeDescription(e){
        this.setState({
            description:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const photo={
            description:this.state.description,
            date:this.state.date
        }
        console.log(photo)
        axios.post('http://localhost:5000/selfie/add',photo)
        .then(res=> console.log(res.data))
        window.location='/'
    }

    render(){
        return (
            <div>
                <h3>Take new Photo</h3>
                <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                        </div>
                        <div className="form-group">
                        <input type="submit" value=" Take Photo " className="btn btn-primary"/>
                        </div>
                </form>
            </div>
        )
    }
}