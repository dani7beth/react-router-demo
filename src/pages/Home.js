import { Component } from "react"
import { Header, Container } from "semantic-ui-react"


export default class Home extends Component{ 

    state = {yo: "here"};

    componentDidMount(){
        console.log("home mounted");
    }

    componentWillUnmount(){
        console.log("home unmounted");
    }

    render(){
        return(
            <Container>
                <Header>Home</Header>
            </Container>
        )
    }
    
}