import { Component } from 'react'

class ClassComponentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name : "",
      email : "",
      password: ""
    }

    this.handleSubmit = (e)=> {
      e.preventDefault()
      console.log(this.state)
    }

    this.handleChange = (e)=> {
      e.preventDefault()
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  }
  render() {
    return (
      <>
      <h1>CLASS METHOD</h1>
      <form action="" className="form" onSubmit={this.handleSubmit}>
            <label htmlFor="name">
                Name:
            </label>
            <input type="text" name="name" onChange={this.handleChange}/><br/><br/>
            <label htmlFor="email">
                Email:
            </label>
            <input type="email" name="email" onChange={this.handleChange}/><br/><br/>
            <label htmlFor="password">
                Password:
            </label>
            <input type="password" name="password" onChange={this.handleChange}/><br/>
            <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}

export default ClassComponentForm