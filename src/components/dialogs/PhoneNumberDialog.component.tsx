import { Stack, TextField, IconButton } from "@mui/material";
import NavigateNext from "@mui/icons-material/NavigateNext";
import type { DialogProps } from "./types";
import { useState, useEffect } from "react";

export const PhoneNumberDialog: React.FC<DialogProps> = ({ input, onChange, onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState(input);

  // Sync parent → local state
  useEffect(() => {
    setPhoneNumber(input);
  }, [input]);

  const handleInputChange = (value: string) => {
    // Strip non-digits
    const digits = value.replace(/\D/g, "");

    // Limit to 10 digits
    if (digits.length <= 10) {
      setPhoneNumber(digits);
      onChange(digits);
    }
  };

  const isValid = phoneNumber.length === 10;

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <TextField
        fullWidth
        value={phoneNumber}
        onChange={(e) => handleInputChange(e.target.value)}
        error={phoneNumber !== "" && !isValid}
        helperText={
          phoneNumber !== "" && !isValid
            ? "Phone number must be 10 digits."
            : ""
        }
      />

      <IconButton
        color="primary"
        onClick={onNext}
        disabled={!isValid}
      >
        <NavigateNext fontSize="large" />
      </IconButton>
    </Stack>
  );
};
