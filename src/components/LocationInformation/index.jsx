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
    <Grid container spacing={2} sx={{ marginTop: '15px', color: 'white' }}>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon sx={{ color: '#E0144C' }} />
          <Typography>{location ? location : 'Not Available'}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon sx={{ color: '#1DA1F2' }} />
          <Typography>
            {twitter_username ? twitter_username : 'Not Available'}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Stack direction="row" spacing={2}>
          <LanguageIcon sx={{ color: '#2a74f5' }} />
          <Typography>
            {blog ? (
              <Link
                target="_blank"
                rel="noreferrer"
                underline="hover"
                href={blog}>
                {blog}
              </Link>
            ) : (
              'Not Available'
            )}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon sx={{ color: '#939598' }} />
          <Typography>{company ? company : 'Not Available'}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;
