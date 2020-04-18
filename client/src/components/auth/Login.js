import React, { useState } from 'react';
import { login } from '../../actions/auth'
import { connect } from 'react-redux'
import { setAlert, removeAlert } from '../../actions/alert'
//MATERIAL UI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles((theme) => ({
    paper: {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#ff971d',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#ff971d',
        color: 'white'
    },
    links: {
        color: '#fd6a02'
    }
}));

const Login = ({ login, setAlert }) => {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData

    const onChange = e => {


        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

        console.log('form', formData)
    }

    const onSubmit = e => {

        e.preventDefault()

        var isEmpty = false

        for (var key in formData) {

            if (formData[key] === '') {
                isEmpty = true
            }
        }

        if (isEmpty) {
            setAlert('warning', 'Please fill out the required fields')

            return
        }

        if (password !== password2) {
            setAlert("warning", "Passwords do not match")

            return console.log('error')
        }

        login({ name, email, password })
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AccountCircleIcon />
                </Avatar>
                <Typography component="h1" variant="h5" >
                    Good To See You Back!
                </Typography>
                <form className={classes.form} noValidate onSubmit={e => onSubmit(e)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                onChange={e => onChange(e)}
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Username"

                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                onChange={e => onChange(e)}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={e => onChange(e)}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={e => onChange(e)}
                                variant="outlined"
                                required
                                fullWidth
                                name="password2"
                                label="Confirm Password"
                                type="password"
                                id="password2"

                            />
                        </Grid>
                    </Grid>
                    <Button

                        type="submit"
                        fullWidth
                        variant="contained"

                        className={classes.submit}
                    >
                        Log In
                    </Button>
                    <Grid container justify="center">
                        <Grid item>
                            Don't have an account?{' '}
                            <Link href="#" variant="body2" className={classes.links}>
                                Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>

        </Container>
    );
}

export default connect(null, { login, setAlert })(Login)