import React from "react";
import {useForm} from 'react-hook-form';
import Layout from "../Layout";
import {InputBase} from '@mui/material';
import useStyles from "./styles";


function MainTemplate(props) {
    const {register, handleSubmit} = useForm();
    const classes = useStyles();
    const onSubmit = (data) => {
	console.log("Email: ", data.email);
        props.updateImg(data.file[0], data.email);
    };

    return (
        <Layout>
            <div className={classes.root}>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.email}>
                    <InputBase type="email" placeholder = "Enter your email to receive results" {...register("email", { required: true})} name="email"
                        style={{width: '500px', backgroundColor: '#FFFFFF', borderColor: '#000000', borderRadius: '8px', borderWidth: 2, borderStyle: 'solid',
                                padding: '5px', paddingLeft: '5px', margin: '10px'}}/>
                    </div> 
                    <div className={classes.form}>
                        <h3>Choose a file to upload</h3>
                        {/* <input type="file" {...register("file", { required: true})} name="file"/> */}
                        <InputBase type="file" {...register("file", { required: true})} name="file"/>
                        <button>Upload</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
export default MainTemplate;
