import React, {Component} from 'react';


class Form extends Component {
    constructor(){
        super() ;
            this.state = {
                
                username:'',
                password:''
            }
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`submission complete for Username, Password, Occupassion, Gender, E-mail, Phone & Address`)
    }
   
    handleChange = (event) => {
        let {name,value} = event.target
        this.setState({
            [name]:value
        })
        console.log(this.state)
    }

    
    render() {
        return (
            <div className='form'>
            <h1>LogIn</h1>
            <form onSubmit={this.handleSubmit}>
                <label id = 'change'>
                    FirstName: <input class='p' type='text' onVolumeChangeCapture={this.handleChange.change}
                    onChange={this.state.value} /> <br/> <br/>

                    LastName: <input class='p'type='text' value={this.handleChange.change}
                    onChange={this.state.value} /> <br/> <br/>

                    Occupassion<input class='p'type='text' value={this.handleChange.change}
                    onChange={this.state.value} /> <br/> <br/>

                    Gender: <input class='p'type='text' onChange={this.handleChange.change}
                    onChange={this.state.value} /> <br/> <br/>

                    {/* <input type="radio" name="Male">Male */}

                    E-mail: <input class='p' type='text' value={this.handleChange.change}
                    onChange={this.state.value} /> <br/> <br/>

                    Phone: <input class='p' type='text' value={this.handleChange.change}
                    onChange={this.state.value} /> <br/> <br/>

                    Address: <input class='p' type='text' value={this.handleChange.change}
                    onChange={this.state.value} /> <br/> <br/>

                </label>
                <input id="i" type='Submit' value='submit'/>

            </form>
            </div>
        )
    }

    
}

 export default Form; 