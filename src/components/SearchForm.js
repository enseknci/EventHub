import React from "react";
import { Box, TextField, MenuItem, Button } from "@mui/material";
import "../styles/SearchForm.css";

export const SearchForm = () => {
  return (
    <div className="SearchBar">
      <Box sx={{ minWidth: 170 }} className="Box">
        <Box className="Box-1">
          <TextField label="Şehir Seçiniz" select fullWidth>
            <MenuItem value="İstanbul">İstanbul</MenuItem>
            <MenuItem value="Ankara">Ankara</MenuItem>
            <MenuItem value="Antalya">Antalya</MenuItem>
            <MenuItem value="İzmir">İzmir</MenuItem>
            <MenuItem value="Sivas">Sivas</MenuItem>
          </TextField>
        </Box>
        <Box sx={{ minWidth: 170 }} className="Box-2">
          <TextField label="Mekan Seçiniz" select fullWidth>
            <MenuItem value="BJk stadyumu">BJk stadyumu</MenuItem>
            <MenuItem value="Şükrü saraçoğlu Stadyumu">
              Şükrü saraçoğlu Stadyumu
            </MenuItem>
            <MenuItem value="Antalya kongre merkezi">
              Antalya kongre merkezi
            </MenuItem>
            <MenuItem value="İzmir kongre merkezi">
              İzmir kongre merkezi
            </MenuItem>
            <MenuItem value="Sivas kongre merkezi">
              Sivas kongre merkezi
            </MenuItem>
          </TextField>
        </Box>
        <Box sx={{ minWidth: 170 }} className="Box-3">
          <TextField label="Tarih Seçiniz" select fullWidth>
            <MenuItem value="Bugün">Bugün </MenuItem>
            <MenuItem value="Yarın">Yarın </MenuItem>
            <MenuItem value="Bu hafta">Bu hafta </MenuItem>
            <MenuItem value="Bu ay">Bu ay </MenuItem>
          </TextField>
        </Box>
        <Box className="Box-4">
          <Button variant="contained" color="error">
            Ara
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default SearchForm;
