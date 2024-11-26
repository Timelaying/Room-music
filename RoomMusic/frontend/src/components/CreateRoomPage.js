import React, { Component } from 'react';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Textfield from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default class CreateRoomPage extends Component {
    defaultsVotes = 2;

    constructor(props) {
        super(props);
    }

    render(){
        return <Grid container spacing = {1}>
            <Grid item xs = {12} align = "center">
                <Typography Component = 'h4' variant = "h4">
                    Create a Roomde
                </Typography>
            </Grid>
        </Grid>;
    }
}
