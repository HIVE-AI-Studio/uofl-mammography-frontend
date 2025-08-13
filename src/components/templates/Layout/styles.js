import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(159, 112, 112, 1)",
        height: "100vh",
    },
    topBar: {
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "rgb(173,0,0)",
        width: "100vw",
        // height: "15%",
    },
    topBarLeft: {
        display: "flex",
        // width: "20%",
	alignItems: "center",
        // backgroundColor: "rgb(100,100,180)",
        // width: "10",
    },
    topBarRight: {
        display: "flex",
        // backgroundColor: "rgb(100,180,100)",
        width: "40%",
        alignItems: "center",
    },
    infoBar: {
        backgroundColor: "#FDC407",
        height: "4px",
        width: "100vw"
    },
    hiveAddress: {
        display: "flex",
        color: "white",
        paddingLeft: '20px', 
        paddingRight: '20px',
        alignItems: 'center'
    }
}));

export default useStyles;
