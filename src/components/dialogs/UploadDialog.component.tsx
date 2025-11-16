import { Stack, Button, Typography, IconButton, Box, styled } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import NavigateNext from "@mui/icons-material/NavigateNext";
import React from "react";

interface UploadDialogProps {
  file: File | null;
  setFile: (file: File | null) => void;
  onChange: (input: string) => void;
  onNext: () => void;
}

export const UploadDialog: React.FC<UploadDialogProps> = ({
  file,
  setFile,
  onChange,
  onNext,
}) => {
  const HiddenInput = styled("input")({
    display: "none",
  });

  const onFile = (selectedFile: File | null) => {
    setFile(selectedFile);
    onChange(selectedFile ? selectedFile.name : "");
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: "100%" }}
    >
      {!file ? (
        <Button component="label" variant="contained" fullWidth sx={{ flexGrow: 1 }}>
          Upload
          <HiddenInput
            type="file"
            onChange={(e) => onFile(e.target.files?.[0] ?? null)}
          />
        </Button>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
          >
            <Typography noWrap sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
              {file.name}
            </Typography>
            <IconButton onClick={() => onFile(null)}>
              <ClearIcon />
            </IconButton>
          </Stack>
        </Box>
      )}

      <IconButton
        onClick={onNext}
        color="primary"
        disabled={file === null}
        sx={{ flexShrink: 0 }}
      >
        <NavigateNext fontSize="large" />
      </IconButton>
    </Stack>
  );
};
