import { Stack, TextField, IconButton, InputAdornment } from "@mui/material";
import NavigateNext from "@mui/icons-material/NavigateNext";
import type { DialogProps } from "./types";
import React from "react";

export const CurrencyDialog: React.FC<DialogProps> = ({ input, onChange, onNext }) => {

  const handleInputChange = (value: string) => {
    // Remove any characters that aren't digits or a decimal
    const cleaned = value.replace(/[^0-9.]/g, "");

    // Prevent multiple decimals
    const normalized = cleaned.replace(/(\..*)\./g, "$1");

    onChange(normalized);
  };
  
  const handleBlur = () => {
    // Final formatting on blur (makes sure 2 decimals)
    const num = Number(input || "0");
    onChange(num.toFixed(2));
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <TextField
        fullWidth
        type="text"   // <--- important
        value={input}
        onChange={(e) => handleInputChange(e.target.value)}
        onBlur={handleBlur}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <IconButton color="primary" onClick={onNext} disabled={input.trim() === ""}>
        <NavigateNext fontSize="large" />
      </IconButton>
    </Stack>
  );
};
