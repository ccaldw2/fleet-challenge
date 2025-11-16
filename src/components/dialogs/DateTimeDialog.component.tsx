import { Stack, IconButton } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import NavigateNext from "@mui/icons-material/NavigateNext";
import { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";

interface DateDialogProps {
  date: Dayjs | null;
  onChange: (input: string) => void;
  onNext: () => void;
}

export const DateTimeDialog: React.FC<DateDialogProps> = ({ date, onChange, onNext }) => {
  const [dateVal, setDateVal] = useState<Dayjs | null>(date);

  // Notify parent whenever dateVal changes
  useEffect(() => {
    const dateString = dateVal ? dateVal.format("MMMM D, YYYY h:mm A") : ""
    onChange(dateString);
  }, [dateVal, onChange]);

  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          value={dateVal}
          onChange={(newValue) => setDateVal(newValue)}
          sx={{ width: "100%" }}
        />
      </LocalizationProvider>

      <IconButton
        onClick={onNext}
        color="primary"
        disabled={!dateVal}
        sx={{ flexShrink: 0 }}
      >
        <NavigateNext fontSize="large" />
      </IconButton>
    </Stack>
  );
};
