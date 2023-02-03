import { useEffect, useState } from "react";

// Import styles
import "../styles/home.css";

// Import axios
import axios from "axios";

// Import react-bootstrap components
import { Container, Card } from "react-bootstrap";

const HomeComponent = () => {
    const [users,setUsers] = useState();

    const fetchUsers = () => {
        axios.get("http://jsonplaceholder.typicode.com/users")
        .then((response) => {
            setUsers(response.data);
        })
    }

    useEffect(() => {
        fetchUsers();
    },[]);

    console.log(users);

    return (
        <Container className = "mainContainer">
            <h1 className = "welcomeHeader">Hello, welcome to Skill Up by TEC!</h1>
            {
                users?.map((singleUser) => {
                    return (
                        <Card className = "userSpecificCards">
                            <h2>Name: {singleUser.name}</h2>
                            <h4>Username: {singleUser.username}</h4>
                            <h4>Phone: {singleUser.phone}</h4>
                        </Card>
                    )
                })
            }
        </Container>
    )
}

export default HomeComponent;