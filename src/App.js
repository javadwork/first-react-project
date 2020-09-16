import React from 'react';
import Car from './Component/Car';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'ford',
            colors: [
            {favorite_color1:'red'},
            {favorite_color2:'yellow'},
            ],
            isvisible:true
    };
}
    // before render
    static getDerivedStateFromProps(props, state) {
        return {name: props.Name};
    }

    //
    changeColor = () => {
        let new_state_color1 = {...this.state};
        new_state_color1.colors[0].favorite_color1 = 'blue'
        this.setState(new_state_color1)
    }
// ---------------------------------------------------------------------------------------    
    componentDidMount() {
        setTimeout(() => {
          let new_state_color2 = {...this.state}
          new_state_color2.colors[0].favorite_color2 = 'green'
          this.setState(new_state_color2)
        }, 2000)
      }

       //   شاتی قبل از هربار آپدیت صفحه را نشان میدهد
        getSnapshotBeforeUpdate(prevProps, prevState) {
            document.getElementById("p1").innerHTML =
            "Before the update, the favorite color was: " + prevState.colors[0].favorite_color2;
        }
        // هر آپدیتی که در صفحه انجام شود، متد زیر اجرا میشود
        componentDidUpdate(){
            document.getElementById('p2').innerHTML=
            'favorite color2 updated is: ' + this.state.colors[0].favorite_color2
        }
// ---------------------------------------------------------------------------------------   

    shoot = (a,b) => {
        alert(a);
        document.getElementById('p3').innerHTML=
        'type is ' + b.type
    }

    render(){
        return(
            <React.Fragment>
                <h1 className='class1'>Hello World!</h1>
                {/* خط پایین از فایل index.js خوانده میشود */}
                <Car model={this.props.Model}/>
                <hr/>
                <h2>1) Lifecycle</h2>
                {/* change 'name' in 'getDerivedStateFromProps' method before mount*/}
                <h3>name car: {this.state.name}</h3>
                <br/>
                <h3>color1 is: {this.state.colors[0].favorite_color1}</h3>
                <button type='button' onClick={this.changeColor}>change color</button>
                <br/>
                <br/>
                <h3>color2 is: {this.state.colors[0].favorite_color2}</h3>
                <div>
                    <p id='p1'></p>
                    <p id='p2'></p>
                </div>
                <hr/>
                <h2>2) Event</h2>
                {/* passing arguanment on function in event */}
                <button onClick={(ev) => this.shoot('goal1',ev)}>Take Shoot with arrow func</button>
                <button onClick={this.shoot.bind(this,'goal2')}>Take Shoot with bind</button>
                <br/>
                <p id='p3'></p>
                <p id='p4'></p>
            </React.Fragment>
        )
    }
}

export default App