import { ReactNode } from "react";
import { Paper, Group, Box } from "@mantine/core";

const card = 'w-10';
const iconClass = 'p-8 my-8 mr-8 border-2 border-slate-100';

export interface SkillCardProps {
  icon: ReactNode;
  name: ReactNode;
}

const LinkCard: React.FC<SkillCardProps> = ({ icon, name }) => {
  return (
    <Paper withBorder shadow='xs' className={card}>
			<Group justify='space-apart' align='center'>
				<Group gap='xs'>
					<Box className={iconClass}>{icon}</Box>
					<div>{name}</div>
				</Group>
			</Group>
		</Paper>
  )
}