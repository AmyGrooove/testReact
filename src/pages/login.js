import React from 'react'

const LogPas = [
    {
        "login": "qwe",
        "pass": "123"
    },
    {
        "login": "asd",
        "pass": "456"
    },
    {
        "login": "zxcCursed",
        "pass": "789"
    }
]

class Login extends React.Component {
    constructor(props) {
        super(props)
        
        if (localStorage.getItem('Logged') === null)
        {
            localStorage.setItem('Logged', false)
        }

        this.state = {
            Logged: localStorage.getItem('Logged'),
            Mistake: false
        }
    }

    check = () => {
        const log = document.querySelector("#log").value
        const pas = document.querySelector("#pas").value
    
        LogPas.forEach(el => {
          if (el.login === log && el.pass === pas) 
          {
            this.signin()
          } 
          else
          {
              this.setState({ Mistake: true })
          }
        })
    }

    signin = () => {
        localStorage.setItem('Logged', true)
        this.setState({ Logged: true, Mistake: false })
    }
    
    logout = () => {
        localStorage.setItem('Logged', false)
        
        this.setState({ Logged: false, Mistake: false })
    }

    render() {
        const { Mistake } = this.state
        const { Logged } = this.state

        return (
            <div>
                {Logged && (
                    <div>
                        <h1>Hello</h1>   

                        <button onClick={this.logout}>Log out</button>
                    </div>

                )}

                {!Logged && (
                    <div>
                        <div>
                            Login:
                            <input id='log' style={{"marginLeft": "33px"}}></input>
                        </div>
                        <div>
                            Password:
                            <input id='pas' type={"password"} style={{"marginLeft": "10px"}}></input>
                        </div>
    
                        <button onClick={this.check}>Sumbit</button>
    
                        {Mistake && (
                            <div style={{"color": "red", "fontSize": "24px"}}>WRONG LOG/PASS</div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

export default Login