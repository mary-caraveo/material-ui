import React from 'react';
import { Grid, Link, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = (props) => {
  const { userState } = props;
  const { location, twitter_username, blog, company } = userState;

  return (
    <Grid
      container={true}
      spacing={2}
      sx={{ marginTop: '15px', color: 'white' }}>
      <Grid item={true} xs={6}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon />
          <Typography>{location ? location : 'Not Available'}</Typography>
        </Stack>
      </Grid>
      <Grid item={true} xs={6}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon />
          <Typography>
            {twitter_username ? twitter_username : 'Not Available'}
          </Typography>
        </Stack>
      </Grid>
      <Grid item={true} xs={6}>
        <Stack direction="row" spacing={2}>
          <LanguageIcon />
          <Typography>
            {blog ? (
              <Link
                target="_blank"
                rel="noreferrer"
                underline="hover"
                href={blog}
                sx={{ color: 'blue' }}>
                {blog}
              </Link>
            ) : (
              'Not Available'
            )}
          </Typography>
        </Stack>
      </Grid>
      <Grid item={true} xs={6}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon />
          <Typography>{company ? company : 'Not Available'}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;
