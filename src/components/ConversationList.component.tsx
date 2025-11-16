import { Stack, Paper, Typography, Box, Button } from "@mui/material";
import Undo from "@mui/icons-material/Undo";

interface Props {
  currentQuestion: string;
  conversation: { Q: string; A: string }[];
  onUndo: (index: number) => void;
  bottomRef: React.RefObject<HTMLDivElement|null>;
}

export const ConversationList: React.FC<Props> = ({ currentQuestion, conversation, onUndo, bottomRef }) => (
  <Box sx={{ overflowY: "auto", width: "100%", maxHeight: "50vh", mb: 2 }}>
    <Stack spacing={2}>

      {conversation.map((line, index) => (
        <div key={index}>
          <Stack direction={"row"} spacing={1} alignItems="left" mb={1}>
            <Paper elevation={5} sx={{ p: 2, width: "80%" }}>
              <Typography align="left">{line.Q}</Typography>
            </Paper>
          </Stack>

          <Stack direction={"row"} spacing={1} alignItems="center" mb={1}>
            <Button onClick={() => onUndo(index)}>
              <Undo />
            </Button>
            <Paper elevation={5} sx={{ color:"white", backgroundColor:"primary.light", p: 2, width: "80%" }}>
              <Typography align="right">{line.A}</Typography>
            </Paper>
          </Stack>
        </div>
      ))}
          <Box>
            <Paper elevation={5} sx={{ p: 2, width: "80%" }}>
              <Typography align="left">{currentQuestion}</Typography>
            </Paper>
          </Box>
      <div ref={bottomRef} />

    </Stack>
  </Box>
);
