import React from "react";
import { Add, Calendar, Confirm, Location, Menu, Search } from "@/assets/icons"; // Import all icons from the folder

type IconName = "add" | "calendar" | "confirm" | "location" | "menu" | "search";

// Use React.FunctionComponent<React.SVGProps<SVGSVGElement>> to type the components
const iconMap: Record<IconName, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
	add: Add,
	calendar: Calendar,
	confirm: Confirm,
	location: Location,
	menu: Menu,
	search: Search,
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
	name: IconName;
	size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, ...rest }) => {
	const IconComponent = iconMap[name];

	if (!IconComponent) return null;

	return <IconComponent {...rest} width={size} height={size} />;
};
