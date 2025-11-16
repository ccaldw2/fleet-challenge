import { Stack, TextField, IconButton } from "@mui/material";
import NavigateNext from "@mui/icons-material/NavigateNext";
import type { DialogProps } from "./types";

export const TextDialog: React.FC<DialogProps> = ({ input, onChange, onNext }) => (
  <Stack direction="row" spacing={2} alignItems="center">
    <TextField fullWidth value={input} onChange={(e) => onChange(e.target.value)} />
    <IconButton color="primary" onClick={onNext} disabled={input.trim() === ""}>
      <NavigateNext fontSize="large" />
    </IconButton>
  </Stack>
);
