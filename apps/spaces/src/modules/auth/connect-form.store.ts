import create from "zustand";

interface ConnectFormState {
  loading: boolean;
}

interface ConnectFormAction {
  toggleLoading: () => void;
}

export const useConnectForm = create<ConnectFormState & ConnectFormAction>()(
  (set, get) => ({
    loading: false,
    toggleLoading: () => {
      set({ loading: !get().loading });
    },
  })
);
