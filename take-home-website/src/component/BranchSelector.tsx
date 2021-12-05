import { MenuItem, TextField } from '@mui/material';
import React from 'react';

type Props = {
  branches: string[];
  selectedBranch: string;
  onChangeTextField: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const BranchSelector = (props: Props) => {
  return (
    <TextField
      select
      label='Branch'
      value={props.selectedBranch}
      onChange={props.onChangeTextField}
      fullWidth
    >
      {props.branches.map((b) => (
        <MenuItem key={b} value={b}>
          {b}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default BranchSelector;
