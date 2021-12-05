import React from 'react';
import { Grid, IconButton, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { HomePageErrorFields } from '../page/home-page/home-page.state';

type Props = {
  accountName: string;
  repositoryName: string;
  errorFields: HomePageErrorFields;
  onChangeTextField: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSearch: () => void;
};

const SearchBar = (props: Props) => {
  const formFieldsCompleted = () =>
    props.accountName.length > 0 && props.repositoryName.length > 0;

  return (
    <Grid container item gap={2}>
      <Grid item xs={12} sm>
        <TextField
          label='GitHub Account'
          fullWidth
          name='formAccountName'
          value={props.accountName}
          onChange={props.onChangeTextField}
        />
        {props.errorFields.errors.accountName.map((errMsg) => {
          return (
            <Typography
              key={'acn' + errMsg}
              variant='caption'
              display='block'
              color='red'
            >
              {props.errorFields.fieldText.accountName}
              {errMsg}
            </Typography>
          );
        })}
      </Grid>

      <Grid item xs={12} sm>
        <TextField
          label='Repository Name'
          fullWidth
          name='formRepositoryName'
          value={props.repositoryName}
          onChange={props.onChangeTextField}
        />
        {props.errorFields.errors.repositoryName.map((errMsg) => {
          return (
            <Typography
              key={'rpn' + errMsg}
              variant='caption'
              display='block'
              color='red'
            >
              {props.errorFields.fieldText.repositoryName}
              {errMsg}
            </Typography>
          );
        })}
      </Grid>

      <Grid
        item
        xs={12}
        sm={1}
        textAlign={{ xs: 'end', sm: 'start' }}
        alignSelf='start'
      >
        <IconButton
          disabled={!formFieldsCompleted()}
          color='primary'
          size='large'
          sx={{ backgroundColor: '#EEEEEE' }}
          onClick={props.onClickSearch}
        >
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
