import React, { useState } from 'react';

// Material UI Imports
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// Asset Imports
import logo from '../../assets/whichProf.svg'
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setProfessors, setProfessorsByUni } from '../../redux/reducer';

// Search bar customization
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderBottom: '0.001px dotted grey',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// Navbar
function Navbar(props) {
  const dispatch = useDispatch()
  const seearchProfessors = useSelector((state) => state.professors.seearchProfessors)

  const [uni, setUni] = useState('NSU');

  // const handleChange = (e) => {
  //   setUni(e.target.value);
  // }

  const handleSearch = (e) => {
    dispatch(setProfessors(e.target.value))
    console.log(e.target.value)
  }

  const handleChange = (e) => {
    const selectedUni = e.target.value;
    setUni(selectedUni);
    dispatch(setProfessorsByUni(e.target.value))
};


  return (
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="tertiary">
        <Toolbar>
          <Link to="/">
            <Box
              component="img"
              src={logo}
              alt="WhichProf Logo"
              sx={{
              width: 150, 
              height: "auto",
              display: "block",
              mx: "auto", 
              }}
              />
          </Link>

        <Box sx={{ flexGrow: 1 }} />

      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">University</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={uni}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="NSU">NSU</MenuItem>
          <MenuItem value="DU">DU</MenuItem>
          <MenuItem value="BRAC">BRAC</MenuItem>
        </Select>
      </FormControl>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search prof..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;