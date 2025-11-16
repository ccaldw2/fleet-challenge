import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { questions, dialogTypes } from "../components/questions";
import { useConversation } from "../components/useConversation";

import { TextDialog } from "../components/dialogs/TextDialog.component";
import { DistanceDialog } from "../components/dialogs/DistanceDialog.component";
import { CurrencyDialog } from "../components/dialogs/CurrencyDialog.component";
import { SelectDialog } from "../components/dialogs/SelectDialog.component";
import { UploadDialog } from "../components/dialogs/UploadDialog.component";
import { DateTimeDialog } from "../components/dialogs/DateTimeDialog.component";
import { ConversationList } from "../components/ConversationList.component";
import { PhoneNumberDialog } from "../components/dialogs/PhoneNumberDialog.component";
import { EmailDialog } from "../components/dialogs/EmailDialog.component";

import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const Submission = () => {
  const {
    input,
    setInput,
    conversation,
    currentQuestionIndex,
    handleNext,
    handleUndo,
    bottomRef,
    formData,
    file,
    setFile,
    handleSubmit,
    submitted,
    handleReset,
  } = useConversation(questions);

  const q = questions[currentQuestionIndex];
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minWidth: { xs: "95%", sm: "90%", md: "80%" },
        width: { xs: "95%", sm: "90%", md: "80%" },
        mx: "auto",
        p: { xs: 1, sm: 2, md: 3 },
      }}
    >

      <Typography variant="h4" gutterBottom align="center">
          Submission
        </Typography>
      <Paper sx={{ p: { xs: 2, sm: 3 } }}>
      

        {submitted ? (
          <Stack spacing={2} alignItems="center" sx={{ mt: 2 }}>
            <Typography variant="h6" align="center">
              Thank you for your submission!
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              width="100%"
              justifyContent="center"
            >
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleReset}
              >
                New
              </Button>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={() => navigate("/archive")}
              >
                Archive
              </Button>
            </Stack>
          </Stack>
        ) : currentQuestionIndex < questions.length ? (
          <>
            <ConversationList
              currentQuestion={q.label}
              conversation={conversation}
              onUndo={handleUndo}
              bottomRef={bottomRef}
            />

            {q.type === dialogTypes.TEXT && (
              <TextDialog input={input} onChange={setInput} onNext={handleNext} />
            )}
            {q.type === dialogTypes.DISTANCE && (
              <DistanceDialog input={input} onChange={setInput} onNext={handleNext} />
            )}
            {q.type === dialogTypes.EMAIL && (
              <EmailDialog input={input} onChange={setInput} onNext={handleNext} />
            )}
            {q.type === dialogTypes.PHONE && (
              <PhoneNumberDialog input={input} onChange={setInput} onNext={handleNext} />
            )}
            {q.type === dialogTypes.CURRENCY && (
              <CurrencyDialog input={input} onChange={setInput} onNext={handleNext} />
            )}
            {q.type === dialogTypes.SELECT && (
              <SelectDialog
                options={q.options}
                input={input}
                onChange={setInput}
                onNext={handleNext}
              />
            )}
            {q.type === dialogTypes.UPLOAD && (
              <UploadDialog
                file={file}
                setFile={setFile}
                onChange={setInput}
                onNext={handleNext}
              />
            )}
            {q.type === dialogTypes.DATETIME && (
              <DateTimeDialog date={dayjs()} onChange={setInput} onNext={handleNext} />
            )}
          </>
        ) : (
          <>
            <Typography variant="h6" align="center" sx={{ mb: 2 }}>
              Review and submit:
            </Typography>
            <Box sx={{ mb: 2 }}>
              {Object.entries(formData).map(([key, value]) => (
                <Typography key={key} sx={{ mb: 0.5 }}>
                  <strong>{key}:</strong> {value}
                </Typography>
              ))}
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                color="warning"
                fullWidth
                onClick={() => handleUndo(currentQuestionIndex - 1)}
              >
                Go Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Stack>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default Submission;
