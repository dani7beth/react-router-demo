import { Card, Container, Dimmer, Header, Image, Loader, Segment } from "semantic-ui-react";
import {useState,useEffect} from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";

const Users = () =>{

    // {"id":1,"email":"george.bluth@reqres.in",
    // "first_name":"George",
    // "last_name":"Bluth",
    // "avatar":"https://reqres.in/img/faces/1-image.jpg"}

    const[users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        Axios.get('https://reqres.in/api/users?delay=1')
        .then((res)=>{
            setUsers(res.data.data);
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err);
            setLoading(false);
        });
    }, []);

    const renderUsers = () =>{
        return users.map(u=>(
            <Link to={`/users/${u.id}`}>
                <Container>
                    <Header>{u.email}</Header>
                </Container>
            </Link>
        
        ));
    }

    if(loading){
        return(
        <div>
             <Dimmer active inverted>
                <Loader inverted content='Loading' />
            </Dimmer>
        </div>
        )
    }

    return(
        <>
        <Header>Users</Header>
        {renderUsers()}
        </>
    )
}
export default Users;