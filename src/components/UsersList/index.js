import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './styles.css';


const useStyles = makeStyles({
    root: {
      maxWidth: 250,
      margin: 25,
    },
    media: {
      height: 200,
    },
});


const List = ({extraUsers}) => {
    const [users, setUsers] = useState([]);

    async function getUsers(){
        const response = await fetch('https://reqres.in/api/users');
        const users = await response.json();
        setUsers(users.data);
    };
    
    useEffect(() => {
        getUsers();
    },[]);

    useEffect(() => {
        const newUser = extraUsers.length ? extraUsers[extraUsers.length - 1]
        : null;
        if(newUser !== null ){
            setUsers( user => [...users, newUser]);
        }
    },[extraUsers])

    const classes = useStyles();

    return(
        <>
        <h1>Users</h1>
        <Grid container spacing={3}>
            {users.map((user) => {
                return (
                <Grid item xs={3} key={user.id}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia className={classes.media}
                            image={user.avatar}
                            title={`${user.first_name} ${user.last_name}`}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {user.first_name} {user.last_name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {user.email}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>           
                )
            })}
        </Grid>
        </>
    );
}

export default List;