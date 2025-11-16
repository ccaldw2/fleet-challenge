import { Stack, TextField, IconButton, InputAdornment } from "@mui/material";
import NavigateNext from "@mui/icons-material/NavigateNext";
import type { DialogProps } from "./types";

export const DistanceDialog: React.FC<DialogProps> = ({ input, onChange, onNext }) => (
  <Stack direction="row" spacing={2} alignItems="center">
    <TextField 
    fullWidth 
    type="number" 
    value={input} 
    onChange={(e) => onChange(e.target.value)} 

    InputProps={{
      endAdornment: <InputAdornment position="end">km</InputAdornment>,
    }}
    />
    <IconButton 
    color="primary" 
    onClick={onNext} 
    disabled={input.trim() === ""}
    >
      <NavigateNext fontSize="large" />
    </IconButton>
  </Stack>
);
