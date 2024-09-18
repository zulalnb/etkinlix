import { Add, Calendar, Confirm, Location, Menu, Search } from "/assets/icons"; // Import all icons from the folder

const iconMap = {
  add: Add,
  calendar: Calendar,
  confirm: Confirm,
  location: Location,
  menu: Menu,
  search: Search,
};

export const Icon = ({ name, size = 24, ...others }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) return null;

  return <IconComponent {...others} width={size} height={size} />;
};
