import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = (props) => {
  const { userState } = props;
  const { location, twitter_username, blog, company } = userState;

  return (
    <Grid container={true}>
      <Grid item={true} xs={6}>
        <Stack>
          <LocationOnIcon />
          <Typography>{location ? `@${location}` : 'Not Available'}</Typography>
        </Stack>
      </Grid>
      <Grid item={true} xs={6}>
        <Stack>
          <TwitterIcon />
          <Typography>
            {twitter_username ? `@${twitter_username}` : 'Not Available'}
          </Typography>
        </Stack>
      </Grid>
      <Grid item={true} xs={6}>
        <Stack>
          <LanguageIcon />
          <Typography>{blog ? `@${blog}` : 'Not Available'}</Typography>
        </Stack>
      </Grid>
      <Grid item={true} xs={6}>
        <Stack>
          <BusinessIcon />
          <Typography>{company ? `@${company}` : 'Not Available'}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;
