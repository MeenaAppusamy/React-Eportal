import {useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from 'react-bootstrap';

export default function Display(){
    const { id } = useParams(); 
    const [userdata, setUserdata] = useState();

    useEffect(() => {
        axios.get(`https://65c0d1efdc74300bce8ccab1.mockapi.io/eportal/${id}`)
            .then((response) => {
                console.log("display",response.data);
                setUserdata(response.data);
            })
            .catch((error) => {
                console.error('Error fetching user details:', error);
            });
    }, [id]);

    if (!userdata) {
        return <h1 className="text-center"> User Details are Loading...</h1>;
    }

    return (
        <div className="container mt-5">
            <h1>User Details</h1>
            <div className="row">
                <div className="col-md-6">
                    
                <div className="col-md-6">
                    <h2>NAME: {userdata.username}</h2>
                    <h2>EMAIL: {userdata.email}</h2>
                    <p>AGE: {userdata.age}</p>
                    <p>AGE: {userdata.gender}</p>
                    <p>MOBILE: {userdata.mobile}</p>
                    <Button variant="info" type="submit">
                       Save
                    </Button>
               </div>
               </div>
            </div>
        </div>
    );
};
