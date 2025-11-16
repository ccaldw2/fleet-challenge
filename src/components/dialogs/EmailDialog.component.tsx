import { Stack, TextField, IconButton } from "@mui/material";
import NavigateNext from "@mui/icons-material/NavigateNext";
import type { DialogProps } from "./types";

export const EmailDialog: React.FC<DialogProps> = ({ input, onChange, onNext }) => {
  // Simple email regex (good balance of correctness + practicality)
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const emailIsValid = isValidEmail(input);

  const handleChange = (email: string) => {
    onChange(email);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <TextField
        fullWidth
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        error={input.trim() !== "" && !emailIsValid}
        helperText={
          input.trim() !== "" && !emailIsValid ? "Please enter a valid email address." : ""
        }
      />

      <IconButton
        color="primary"
        onClick={onNext}
        disabled={!emailIsValid}
      >
        <NavigateNext fontSize="large" />
      </IconButton>
    </Stack>
  );
};
