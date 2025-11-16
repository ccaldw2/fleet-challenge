export enum dialogTypes {
  TEXT,
  EMAIL,
  UPLOAD,
  DISTANCE,
  PHONE,
  CURRENCY,
  DATETIME,
  SELECT
}

export interface Question {
  label: string;
  name: string;
  type: dialogTypes;
  options: string[];
}

export const questions: Question[] = [
  { label: "What is your name?", name: "name", type: dialogTypes.TEXT, options: [] },
  { label: "What is your email?", name: "email", type: dialogTypes.EMAIL, options: [] },
  { label: "What is your phone number?", name: "phone", type: dialogTypes.PHONE, options: [] },
  { label: "How did you get to work on the date of your guaranteed ride home?", name: "toWork", type: dialogTypes.SELECT, 
    options: ["Carpool","Vanpool","Public Transportation", "Bike", "Walk"] },
  { label: "How did you get a ride home?", name: "rideHome", type: dialogTypes.SELECT, 
    options: ["Taxi","Rental Car","Car Share", "Public Tranit", "Transportation Network (e.g. Uber, Lyft)"] },
  { label: "What was the date and time of your ride home?", name: "datetime", type: dialogTypes.DATETIME, options: [] },
  { label: "What was the starting address?", name: "startAddress", type: dialogTypes.TEXT, options: [] },
  { label: "What was the starting city?", name: "startCity", type: dialogTypes.TEXT, options: [] },
  { label: "What was the destination address?", name: "destinationAddress", type: dialogTypes.TEXT, options: [] },
  { label: "What was the destination city?", name: "destinationCity", type: dialogTypes.TEXT, options: [] },
  { label: "What was the reason for your ride?", name: "rideReason", type: dialogTypes.SELECT, 
    options: [
      "You or an immediate family member suffered an illness, injury, or severe crisis",
      "Your carpool or vanpool vehicle broke down",
      "Your carpool or vanpool driver had to leave early or stay late",
      "Shuttle connecting to a transit station broke down and no other shuttle options were available",
      "You had to respond to a break-in, fire, or flood at your residence",
      "Your commute bicycle broke down on way to/from work",
      "You were asked by supervisor to work unscheduled overtime (supervisor confirmation required)",
      "Other (please explain in additional details)"
    ] },
  { label: "Please provide additional ride details.", name: "rideDetails", type: dialogTypes.TEXT, options: [] },
  { label: "What is the cost you'd like reimbursed?", name: "cost", type: dialogTypes.CURRENCY, options: [] },
  { label: "What would you estimate the distance to be?", name: "distance", type: dialogTypes.DISTANCE, options: [] },
  { label: "Please upload a receipt related to your ride.", name: "receipt", type: dialogTypes.UPLOAD, options: [] }
];
