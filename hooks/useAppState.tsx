import { useContext } from "react";
import { AppStateContext, AppStateProviderType } from "./AppStateProvider";

export default function useAppState(): AppStateProviderType {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState can only be used within an AppStateProvider");
  }
  return context;
}
