import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(159, 112, 112, 1)",
        height: "100vh",
    },
    topBar: {
        // display: "flex",
        // justifyContent: "center",
        // backgroundColor: "rgb(173,0,0)",
        width: "100vw",
        // height: "15%",
    },
    topBarLeft: {
        display: "flex",
        width: "100px",
        paddingLeft: '20px',
	    // alignItems: "center",
        // backgroundColor: "rgb(100,100,180)",
        // width: "10",
    },
    topBarRight: {
        display: "flex",
        // backgroundColor: "rgb(100,180,100)",
        //width: "40%",
        justifyContent: "center",
        alignItems: "center",
        color: "#FDC407",
        flexGrow: 1
    },
    infoBar: {
        display: "flex",
        alignItems: 'center',
        backgroundColor: "#FDC407",
        height: "40px",
        width: "100vw"
    },
    hiveInfo: {
        color: "white",
        paddingLeft: '20px', 
        paddingRight: '20px',
        fontWeight: 'bold'
    },
    headerBar: {
        display: "flex",
        alignItems: 'center',
        width: '100vw',
        backgroundColor: 'white',
    }
}));

export default useStyles;
