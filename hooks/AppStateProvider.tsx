import * as React from "react";
import { checkValidPatient, Patient, Patients } from "../constants/patient";
import { checkValidUser, User, Users } from "../constants/user";

export interface AppStateProviderType {
  patients: Patient[];
  users: User[];
  addPatient: Function;
  addUser: Function;
}

export const AppStateContext = React.createContext<AppStateProviderType>(null!);

interface Props {
  children: React.ReactNode;
}

export default function AppStateProvider({ children }: Props) {
  const [patients, setPatients] = React.useState(Patients);
  const [users, setUsers] = React.useState(Users);

  const addPatient = (patient: Patient) => {
    if (checkValidPatient(patient)) {
      setPatients([...patients, { id: patients.length, ...patient }]);
    }
  };

  const addUser = (user: User) => {
    if (checkValidUser(user)) {
      setUsers([...users, { id: users.length, ...user }]);
    }
  };

  const value: AppStateProviderType = {
    patients,
    users,
    addPatient,
    addUser,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}
