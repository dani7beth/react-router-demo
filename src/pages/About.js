import {useEffect} from 'react';
import { Header, Container } from "semantic-ui-react"

export default () =>{
    // act only as component did mount componentwillunmount
    useEffect(()=>{
        console.log("about mounted");
        return() =>{
            console.log("about unmounted");
        }
    }, [])
    return(
        <Container>
            <Header>About</Header>
        </Container>
    )
}