## FLEET SWE Screening exercise: _GRH Chatflow_

### Sections

- [Overview](#overview)
- [Approach & Assumptions](#approach-&-assumptions)
- [Future Considerations](#future-considerations)

### Overview

This project seeks to provide a conversational flow for submission of reimbursement data as a part of the [Alameda CTR GRH program](https://grh.alamedactc.org/). To serve this goal, this React application offers a responsive interface with input validation for relevant reimbursement data, and an archive of previous submissions.

### Approach & Assumptions

While browsing the GRH program website, one can find its own online form for participants to submit reimbursement data - the fields of that form were adapted for this project as it is safe to assume they are necessary for reimbursement by the program.

The flow was designed around a set of dialogs, which would allow some reuse of components (especially around unstructured string data such as name, address, and trip details.) Input validation was added where possible, and fields such as GRH date/time and receipt files were given appropriate input UI.

All submitted reimbursement requests are saved in local storage and managed using redux. This persistence layer acts as a stand-in for a site backend, save that a full implementation would not allow viewing of all submissions.

This project is built with Typescript, and uses Vite for boilerplate setup and build management. Components are sourced from Material UI, and Redux is used for state management. Copilot was leveraged to rapidly build components and improve layout responsiveness, as well as solve a few niche typescript errors.

### Future Considerations

Input validation is currently somewhat inconsistent - while all fields have some sort of validation, many are as simple as checking that the field is non-empty. A second pass at address/city fields would be worthwhile - using something like the Google Maps API to check addresses would be especially effective, and could potentially remove the estimated distance field entirely.

The file upload behavior for receipts is not where it could be - as of right now, a user can upload a file to the browser, but only the name of that file is ultimately archived. A filereducer was initally planned, but was cut for time. Implementing this would better simulate production file storage (e.g. via S3 buckets) in which files are stored away from other submission data, and fetched with a unique ID stored on the associated submission.

[Github Repo](https://github.com/ccaldw2/fleet-challenge)
[CodeSandbox](https://codesandbox.io/p/github/ccaldw2/fleet-challenge/main)
