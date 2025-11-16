import React from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks';
import { clearSubmissions } from '../reducers/submissionReducer';

const Archive: React.FC = () => {
  const dispatch = useAppDispatch();
  const submissions = useAppSelector((state) => state.submission.submissions);

  return (
    <Box width="100%" maxHeight="80vh" overflow="auto" p={2}>
      <Typography mb={2} variant="h4">
        Archive
      </Typography>

      {submissions.length === 0 ? (
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography>No submissions yet.</Typography>
        </Paper>
      ) : (
        <>
          <Paper
            elevation={3}
            sx={{
              maxHeight: '60vh',
              overflow: 'auto',
              mb: 2,
              p: 2,
              bgcolor: '#f5f5f5',
            }}
          >
            <Grid container spacing={{xs: 1, sm: 2, md: 2}} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
              {submissions.map((submission, index) => (
                <Grid size={{xs:1, sm:1, md:1}} key={index}>
                  <Paper elevation={2} sx={{ p: 2, height: '90%' }}>
                    {Object.entries(submission).map(([key, value]) => (
                      <Typography key={key} align='left' flexWrap="wrap" sx={{ mb: 0.5 }}>
                        <strong>{key}:</strong> {String(value)}
                      </Typography>
                    ))}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>

          <Button
            variant="contained"
            color="error"
            onClick={() => dispatch(clearSubmissions())}
          >
            Clear All Submissions
          </Button>
        </>
      )}
    </Box>
  );
};

export default Archive;
