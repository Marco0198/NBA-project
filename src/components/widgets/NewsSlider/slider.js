import React,{Component} from 'react';
import axios from 'axios';
import  {SliderTemplate} from './SliderTemplate'
class NewSlider extends Component{
state={
    news:[]
}
componentDidMount(){
    axios.get(` http://localhost:4000/articles?_start=0&_end=3`).then(
        response=>{
           this.setState({
               news:response.data
           })
        }
    )

}
    render(){
        console.log(this.state.news)
        return(
           <div> SLIDER 

           
               <SliderTemplate data={this.state.news}/>
           </div> 
        )
    }
}
export default NewSlider;