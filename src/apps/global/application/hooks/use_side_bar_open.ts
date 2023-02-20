import { atom, useRecoilState } from "recoil";

const globalSideBarOpenState = atom({
  key: "globalSideBarOpenState",
  default: true,
});

export const useGlobalSideBarOpen = () => {
  const [open, setOpen] = useRecoilState(globalSideBarOpenState);

  const onChange = (isOpen: boolean) => setOpen(isOpen);
  const onToggle = () => setOpen((old) => !old);

  return {
    open,
    onChange,
    onToggle,
  };
};
