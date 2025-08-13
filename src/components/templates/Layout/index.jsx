import React from "react";
import useStyles from "./styles";

function Layout(props) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <div className={classes.topBar}>
                <div className={classes.infoBar}>
                    <div className={classes.hiveInfo}>1601 S Floyd St, Louisville, KY 40208</div>
                    <div className={classes.hiveInfo}>tech@hivehub.org</div>
                </div> 
                <div className={classes.headerBar}>
                    <div className={classes.topBarLeft}>
                        <img src="/HIVE_logo_transparent_background.png" height={100} alt="HIVE logo"/>
                    </div>
{/*                     
                    <div className={classes.topBarRight}>

                    </div> */}
                    <h1 className={classes.centeredTitle}>HIVE Mammography Image Processing</h1>
                </div>
            </div>
            <div>
                <br/>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
export default Layout;
