import {useState} from 'react';
import useFormInput from '../../hooks/useFormInput';
const { Header, Form } = require("semantic-ui-react");


const UserForm = ({user, updateUser}) =>{
    const email = useFormInput(user.email,"email");
    const first_name = useFormInput(user.first_name, "first name");
    const last_name = useFormInput(user.last_name, "last name");
    const avatar = useFormInput(user.avatar, "avatar");

    const handleSubmit = (e) =>{
        console.log(email.value); 
        updateUser({
            email: email.value,
            first_name: first_name.value,
            last_name: last_name.value,
            avatar: avatar.value
        });
    }
    return(
        <>
        <Header>UserForm</Header>
        <Form onSubmit={handleSubmit}>
            <Form.Input {...email} required/>
            <Form.Input {...first_name} />
            <Form.Input {...last_name} />
            <Form.Input {...avatar} />
            <Form.Button>submit</Form.Button>
            
        </Form>
        </>
    )
}
export default UserForm;