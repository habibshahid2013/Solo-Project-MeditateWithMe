import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './register.css'

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";




function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')
  console.log('testing email', email);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [preferred_method, setPreferred_Method] = useState('')
  const [spiritual_belief, setSpiritual_Belief] = useState('')

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  //enables history to move between pages
  const history = useHistory();

  const registerUser = (event) => {
    event.preventDefault();

    if (email.length > 0 && firstName.length > 0 && lastName.length > 0 && username.length > 0 && preferred_method.length > 0 && spiritual_belief.length > 0) {
            //dispatch over to saga
    
    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        email: email,
        first_name: firstName,
        last_name: lastName,
        preferred_method: preferred_method,
        spiritual_belief: spiritual_belief,
      }})
      history.push('/Dashboard')
    }
    else alert('Please put valid data into all of the input feilds')
    }
   // end registerUser

    const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: "teal",
      fontFamily: "sans-serif",
    },
  }));

  const classes = useStyles();


  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h1>Registration</h1>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div className="inputs">
      <Grid item xs={11}>
              <Paper className={classes.paper}>
      <div id="username">
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      </Paper>
       </Grid>
       <Grid item xs={11}>
       <Paper className={classes.paper}>
      <div id="password">
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
       </Paper>
       </Grid>
        <Grid item xs={11}>
           <Paper className={classes.paper}>
      <div id="firstName">
        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            required
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
      </div>
      </Paper>
      </Grid>
      <Grid item xs={11}>
      <Paper className={classes.paper}>
      <div id="lastName">
        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            required
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
      </div>
      </Paper>
      </Grid>
      <Grid item xs={11}>
      <Paper className={classes.paper}>
      <div id="email">
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      </Paper>
       </Grid>
      <Grid item xs={11}>
      <Paper className={classes.paper}>
      <div id="preferred_method">
        <label htmlFor="preferred_method">
          Meditative Practice:
          <select
            type="text"
            name="preferred_method"
            value={preferred_method}
            required
            onChange={(event) => setPreferred_Method(event.target.value)}>
            <option defaultValue=""> select here</option>
            <option value="1">mindfulness meditation</option>
            <option value="2">spiritual meditation</option>
            <option value="3">focused meditation</option>
            <option value="4">movement meditation</option>
            <option value="5">mantra meditation</option>
            <option value="6">transcendental meditation</option>
            <option value="7">loving-kindness meditation</option>
            <option value="8">visualization meditation</option>
          </select>
        </label>
      </div>
      </Paper>
      </Grid>
      <Grid item xs={11}>
      <Paper className={classes.paper}>
      <div id="spiritual_belief">
        <label htmlFor="spiritual_belief">
          Spiritual Belief:
           </label>
          <select
            type="text"
            name="spiritual_belief"
            value={spiritual_belief}
            required
            onChange={(event) => setSpiritual_Belief(event.target.value)}>
            <option defaultValue=""> select here</option>
            <option value="1">Christianity</option>
            <option value="2">Islam</option>
            <option value="3">Judasim</option>
            <option value="4">Hinduism </option>
            <option value="5">Buddhism</option>
            <option value="6">Atheism</option>
            <option value="7">Sikhism</option>
            <option value="8">Baha'i</option>
            <option value="9">Agnosticism</option>
            <option value="10">Humanism</option>
            <option value="11">Zoroastrianism</option>
          </select>
       
      </div>
      </Paper>
      </Grid>
      </div>
      <div id="registration-form">
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
