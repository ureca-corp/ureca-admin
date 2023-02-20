import { atom, useRecoilState } from "recoil";

const globalSideBarOpenState = atom({
  key: "globalSideBarOpen",
  default: false,
});

export const useGlobalSideBar = () => {
  const [open, setOpen] = useRecoilState(globalSideBarOpenState);

  const onChange = (isOpen: boolean) => setOpen(isOpen);
  const onToggle = () => setOpen((old) => !old);

  return {
    open,
    onChange,
    onToggle,
  };
};
