import React from "react";
import './MemeGenerate.css';

class MemeGenerate extends React.Component {
    state = {
        topText: '',
        bottomText: '',
        allMemeImgs: [],
        randomImg: '',
    }
    // we used componentDidMount() method to fetch image from the API
    componentDidMount() {
        // fetching the data from the API 
        fetch('https://api.imgflip.com/get_memes')
            //converting the promise received into Json
            .then(response => response.json())
            .then(content =>
                //updating state variable
                this.setState({
                    allMemeImgs: content.data.memes
                })
            )
    }
    // method to change the value of input fields
    handleChange = event => {
        //detstructuring the event.target object
        const { name, value } = event.target;

        //Again updating the state variable
        this.setState({
            [name]: value
        })
    }
    // method to submit from and create meme
    handleSubmit = event => {
        event.preventDefault()
        const { allMemeImgs } = this.state
        const rand = allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)].url
        this.setState({
            randomImg: rand
        })
    }
    render() {
        return (
            <div>
                <h1>MEMES PAGE</h1>
                {/*controlled form */}
                <form className='meme-form' onSubmit={this.handleSubmit}>
                    {/* input  field to get first text */}
                    <input className="first"
                        placeholder='Enter Text'
                        type='text'
                        value={this.state.topText}
                        name='topText'
                        onChange={this.handleChange}
                    />
                    {/* input field to get second text */}
                    <input className="second"
                        placeholder='Enter Text'
                        type='text'
                        value={this.state.bottomText}
                        name='bottomText'
                        onChange={this.handleChange}
                    />
                    {/* button to generate meme */}
                    <button>Generate</button>
                </form>
                <br />
                <div className="meme">
                    
                    {/* only show the below the element when image is ready to displayed */}
                    {this.state.randomImg === '' ? (
                        ''
                    ) : (
                        <img src={this.state.randomImg} alt='meme' />
                    )}
                    {this.state.randomImg === '' ? (
                        ''
                    ) : (
                        <h2 className='top'>{this.state.topText}</h2>
                    )}
                    {this.state.randomImg === '' ? (
                        ''
                    ) : (
                        <h2 className='bottom'>{this.state.bottomText}</h2>
                    )}
                </div>
            </div>
        )
    }
}
export default MemeGenerate;