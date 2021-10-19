export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  manager: number;
}

export const checkValidPatient = (patient) => {
  return patient?.firstName && patient?.lastName && !isNaN(patient?.manager);
};

export const Patients: Patient[] = [
  { id: 0, manager: 0, firstName: "Rahim", lastName: "Vang" },
  { id: 1, manager: 0, firstName: "Leigh", lastName: "Neal" },
  { id: 2, manager: 1, firstName: "Tehya", lastName: "Thompson" },
  { id: 3, manager: 1, firstName: "Zayden", lastName: "Mcdowell" },
  { id: 4, manager: 2, firstName: "Nico", lastName: "Summers" },
  { id: 5, manager: 2, firstName: "Abdulrahman", lastName: "Turnbull" },
  { id: 6, manager: 3, firstName: "Saeed", lastName: "Hess" },
  { id: 7, manager: 3, firstName: "Brandy", lastName: "Pearson" },
  { id: 8, manager: 4, firstName: "Merlin", lastName: "Villarreal" },
  { id: 9, manager: 4, firstName: "Ayaz", lastName: "Mckeown" },
  { id: 10, manager: 5, firstName: "Zephaniah", lastName: "Douglas" },
  { id: 11, manager: 5, firstName: "Jameson", lastName: "Bartlett" },
  { id: 12, manager: 6, firstName: "Felicity", lastName: "Huff" },
  { id: 13, manager: 6, firstName: "Abi", lastName: "Cornish" },
  { id: 14, manager: 7, firstName: "Reema", lastName: "Buchanan" },
  { id: 15, manager: 7, firstName: "Federico", lastName: "Robson" },
  { id: 16, manager: 8, firstName: "Jo", lastName: "Solomon" },
  { id: 17, manager: 8, firstName: "Nabeela", lastName: "Turnbull" },
  { id: 18, manager: 9, firstName: "Tamzin", lastName: "Dudley" },
  { id: 19, manager: 9, firstName: "Arya", lastName: "Wang" },
];
