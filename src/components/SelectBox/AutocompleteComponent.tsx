/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const countries = [
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'AM', label: 'Armenia', phone: '374' },
  { code: 'AO', label: 'Angola', phone: '244' },
  { code: 'AQ', label: 'Antarctica', phone: '672' },
  { code: 'AR', label: 'Argentina', phone: '54' },
  { code: 'AS', label: 'American Samoa', phone: '1-684' },
  { code: 'AT', label: 'Austria', phone: '43' },
  {
    code: 'AU',
    label: 'Australia',
    phone: '61',
    suggested: true,
  }
];

export default function AutocompleteComponent() {
  return (
    <div className='w-1/2'>
        <Autocomplete
          id="country-select-demo"
          sx={{ width: '100%', marginTop:'10px' }}
          options={countries}
          data-testid="select-box2"
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
             
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=""
              />
              {option.label} ({option.code}) +{option.phone}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a country"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
          )}
        />
    </div>
  )
}
