import React, {useState, Component} from 'react';
import { Container, Typography, Link, Grid, Paper } from '@material-ui/core'
import SteveCard from './SteveCard'
import styled from 'styled-components'

const StyledContainer = styled(Container)`
    padding-top: 5%;
`;

export class Sponsors2 extends Component {
    render() {
        return(
            <StyledContainer>
                <Typography variant="h3" gutterBottom="true">
                    Sponsors
                </Typography>
                <Typography variant="subtitle1" gutterBottom="true">
                    Interested in becoming a sponsor? Click <Link href="">here</Link> for more information!
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                </Grid>
            </StyledContainer>
        );
    }
}


export function Sponsors () {
    const sponsors = [
        {
            name: "Niantic",
            logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/NIA_logo.svg",
            link: "https://nianticlabs.com/",
        },
        {
            name: "Panic Button",
            logo: "https://upload.wikimedia.org/wikipedia/en/8/89/Panic_Button_logo.png",
            link: "http://panicbuttongames.com/about.php",
        },
        {
            name: "Farbridge",
            logo: "https://miro.medium.com/fit/c/256/256/1*JS-VVQ-I7iusO1si7L3tsA.png",
            link: "http://farbridge.com/",
        },
        {
            name: "Cute Dogo",
            logo: "https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg",
            link: "http://www.cutestpaw.com/tag/dogs/",
        },
        {
            name: "NootNoot",
            logo: "https://emblemsbf.com/img/91217.jpg",
            link: "http://nootnoot.net/",
        },
        {
            name: "NootNoot",
            logo: "https://emblemsbf.com/img/91217.jpg",
            link: "http://nootnoot.net/",
        },
        {
            name: "NootNoot",
            logo: "https://emblemsbf.com/img/91217.jpg",
            link: "http://nootnoot.net/",
        },
        {
            name: "NootNoot",
            logo: "https://emblemsbf.com/img/91217.jpg",
            link: "http://nootnoot.net/",
        },
        {
            name: "NootNoot",
            logo: "https://emblemsbf.com/img/91217.jpg",
            link: "http://nootnoot.net/",
        },
        {
            name: "NootNoot",
            logo: "https://emblemsbf.com/img/91217.jpg",
            link: "http://nootnoot.net/",
        },
        {
            name: "NootNoot",
            logo: "https://emblemsbf.com/img/91217.jpg",
            link: "http://nootnoot.net/",
        },
        {
            name: "NootNoot",
            logo: "https://emblemsbf.com/img/91217.jpg",
            link: "http://nootnoot.net/",
        },
        
    ];

    return(
        <StyledContainer>
                <Typography variant="h3" gutterBottom="true">
                    Sponsors
                </Typography>
                <Typography variant="subtitle1" gutterBottom="true">
                    Interested in becoming a sponsor? Click <Link href="">here</Link> for more information!
                </Typography>
                <Grid container spacing={1}>
                {sponsors.map(sponsor => 
                    <SteveCard name={sponsor.name} img={sponsor.logo} link={sponsor.link} />
                )}
            </Grid>
            </StyledContainer>
    );
}