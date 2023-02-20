import { atom, useRecoilState } from "recoil";

const globalSidebarOpenState = atom({
  key: "globalSidebarOpenState",
  default: true,
});

export const useGlobalSidebarOpen = () => {
  const [open, setOpen] = useRecoilState(globalSidebarOpenState);

  const onChange = (isOpen: boolean) => setOpen(isOpen);
  const onToggle = () => setOpen((old) => !old);

  return {
    open,
    onChange,
    onToggle,
  };
};
