export interface ContainerProps {
  children: React.ReactNode;
}

export interface IDropDown {
  id: string;
  name: string;
  options: IOptionsDropdown[];
}

export interface IOptionsDropdown {
  name: string;
  // amount: number;
}

export interface IMenu {
  menu: IMenuItem[];
}
export interface IMenuItem {
  name: string;
  id: string;
}
