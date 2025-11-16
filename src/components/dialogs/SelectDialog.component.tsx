import { Stack, Select, MenuItem, IconButton } from "@mui/material";
import NavigateNext from "@mui/icons-material/NavigateNext";
import type { DialogProps } from "./types";

interface Props extends DialogProps {
  options: string[];
}

export const SelectDialog: React.FC<Props> = ({
  input,
  onChange,
  onNext,
  options
}) => (
  <Stack
    direction="row"
    spacing={2}
    alignItems="center"
    sx={{ width: "100%" }}
  >
    <Select
      value={input}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      sx={{ flexGrow: 1 }}
    >
      {options.map((o, i) => (
        <MenuItem key={i} value={o}>
          {o}
        </MenuItem>
      ))}
    </Select>

    <IconButton
      color="primary"
      onClick={onNext}
      disabled={input.trim() === ""}
      sx={{ flexShrink: 0 }} // prevents squishing
    >
      <NavigateNext fontSize="large" />
    </IconButton>
  </Stack>
);
