import React, { Component } from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import TextField from "@mui/material";
import { FormHelperText } from "@mui/material";
import { FormControl } from "@mui/material";
import { Link } from "react-router-dom";
import Radio from "@mui/material";
import RadioGroup from "@mui/material";
import FormControlLabel from "@mui/material";

export default class CreateRoomPage extends Component {
  defaultsVotes = 2;

  constructor(props) {
    super(props);
  }

  render() {
    // return <Button variant='text'>Text</Button>
    // material ui not working

    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography Component="h4" variant="h4">
            Create a Room
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl component="fieldset">
            <FormHelperText>
              <div align="center">Guest Control of Playback State</div>
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}
