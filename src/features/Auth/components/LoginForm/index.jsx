import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { LockOpenOutlined } from '../../../../../node_modules/@material-ui/icons/index';
import InputField from '../../../../components/form-controls/InputField';
import PasswordFeild from '../../../../components/form-controls/PasswordField';


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(4),
    },
    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },
    title: {
        margin: theme.spacing(2, 0, 4, 0),
        textAlign: 'center',
    },
    submit: {
        margin: theme.spacing(3, 0, 2, 0),
    },
    progress: {
        position: 'absolute',
        top: theme.spacing(1),
        left: 0,
        right: 0,
    }
}));
LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
    const classes = useStyles();
    const schema = yup.object().shape({
        email: yup.string()
            .required('Please enter your email.')
            .email('Please enter a valid email address.'),
        password: yup.string()
            .required('Please enter your password. '),


    });
    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }
        form.reset();
    };
    const { isSubmitting } = form.formState;
    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.progress}></LinearProgress>}
            <Avatar className={classes.avatar}>
                <LockOpenOutlined></LockOpenOutlined>
                </Avatar>

            <Typography className={classes.title} component="h3" variant="h5">
                Log In
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="identifier" label="Email" form={form} />
                <PasswordFeild name="password" label="Password" form={form} />

                <Button
                    disabled={isSubmitting}
                    type="submit"
                    className={classes.submit}
                    variant="contained"
                    fullWidth
                    color="primary"
                    size="large"                    
                    
                >
                    Log In
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;
