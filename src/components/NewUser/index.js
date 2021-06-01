import React, { useState, useCallback } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const CreateNewUser = (props) => {
    const { createUser } = props;
    const [first_name, setName] = useState();
    const [last_name, setLName] = useState();
    const [email, setEmail] = useState();

    const addNewUser = async ({ name, lname, email }) => {
        
        const response = await axios.post('https://reqres.in/api/users', 
        {
          first_name: name,
          last_name: lname,
          email: email,
          avatar: 'https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg',
        });

        const newUser = await (response.data);
        //Check if api responded to post
        if(response.status === 201) {
            createUser(
                { id: Number(newUser.id), 
                    email, 
                    first_name, 
                    last_name, 
                    avatar: 'https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg'
                }
            );
        }
        return newUser;
      };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleLNameChange = (event) => {
        setLName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleNewUser = useCallback(() => {
        addNewUser({ first_name, last_name, email });
    }, [first_name, last_name, email]);

    return (
        <>
        <h1>Add new user</h1>
        <form>
            <TextField 
            id="outlined-name" 
            label="First Name" 
            variant="outlined" 
            onChange={handleNameChange}/>
            <TextField 
            id="outlined-lname" 
            label="Last Name" 
            variant="outlined" 
            onChange={handleLNameChange}/>
            <TextField 
            id="outlined-job" 
            label="Email" 
            variant="outlined" 
            onChange={handleEmailChange}/>
            <div>
            <Button 
            variant="outlined" 
            color="primary" 
            onClick={handleNewUser}>
                Add User
            </Button>
            </div>
        </form>
        </>
    )
}

export default CreateNewUser;
