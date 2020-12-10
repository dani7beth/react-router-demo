import Axios from "axios";
import { useEffect , useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import Userform from "./UserForm";
const { Header, Button, Card, Image } = require("semantic-ui-react");

const User = () =>{
    let[user, setUser] = useState({});
    let history = useHistory();
    let {id} = useParams();

    // async await
    const getUser = async() =>{
        try{
        let res = await Axios.get(`https://reqres.in/api/users/${id}`);
        setUser(res.data.data);
        console.log(res);
        }catch(err){
            console.log(err);
        }
    }

    const updateUser = async () =>{
        try{
            let res =  Axios.put(`https://reqres.in/api/users/${id}`, user);
            setUser(res.data);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getUser();
    }, []);

    return(
        <>
        <Card>
        <Image src={user.avatar} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{user.first_name} {user.last_name}</Card.Header>
        <Card.Meta>Joined in {Math.floor(Math.random() * (2020 - 2010)+ 2010)}</Card.Meta>
      <Card.Description>
        {user.email}
      </Card.Description>
    </Card.Content>
  </Card>
    <Userform user={user} updateUser={updateUser}/>
        {/* <Button onClick={history.push('/')}>Go Home</Button> */}
        </>
    )
}
export default User;
//try catch block
// try{
//     do anything i want if error thrown catch
// }catch(err){
//     err is going to be the error that was thrown
// }