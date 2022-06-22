import '../App.css'
import React , { useState , useEffect , useContext} from 'react';
import { useForm } from 'react-hook-form';
import { DataContext } from '../Context/FormaContext';
import * as yup from "yup";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Forma() {
const {userData , setUserData} = useContext(DataContext);
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
 const TicketDataScheme = yup.object().shape({
    firstName: yup.string().min(3, " Please enter atleast 3 letters").required(),
    secondName: yup.string().min(3," Please enter atleast 3 letters" ).required(),
    email: yup.string().email('Wrong email').required(),
    phone: yup.string().matches(phoneRegExp , "Wrong number").required(),
    ticket: yup.string().min(10 , "Please enter atleast 10 letters").max(250 , "You reach limit of letters").required(),
});


const {register, handleSubmit ,  formState: { errors } } = useForm({ resolver: yupResolver(TicketDataScheme),});

const onSubmit = (data) => {
    setUserData(data)
    // console.log(userData)
};

    return (
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Please Fill Your Data Below</h2>
          <TextField className="tekst" {...register("firstName")} id="firstName" label="Your Name" variant="outlined" /> {errors.firstName ? errors.firstName.message : <br/>}
          <TextField {...register("secondName")} id="secondName" label="Second Name" variant="outlined" /> {errors.secondName ? errors.secondName.message : <br/>} 
          <TextField {...register("email")} id="email" label="Email" variant="outlined" /> {errors.email ? errors.email.message : <br/>}
          <TextField {...register("phone")} id="phone" placeholder="Your phone number" label="Phone" variant="outlined" /> {errors.phone ? errors.phone.message : <br/>}
          <TextField className="textField" placeholder=" min 10 letters and max 250" {...register("ticket")} id="ticket" label="Ticket" variant="outlined" multiline
          rows={4} /> {errors.ticket ? errors.ticket.message : <br/>} 
          <ButtonGroup >
          <Button className="ButtonSubmit" size="large" variant="contained"  type="submit" startIcon={<SendIcon />} >Submit</Button>
          <Button className="ButtonReset" type="reset" variant="contained" color="error" startIcon={<DeleteIcon />}> Reset</Button>
          </ButtonGroup>
        </form>

    )
}
