import { ReactNode } from "react";
import { TbExternalLink } from "react-icons/tb";

// const iconClass = 'p-8 my-8 mr-8 border-2 border-slate-100';

export interface LinkCardProps {
	name: ReactNode;
}

export const LinkCard: React.FC<LinkCardProps> = ({ name }) => {
	return (
		<div className="flex flex-row text-xl hover:text-rose text-slate-100 p-4 border-2 rounded-md border-slate-100">
			{name} {<TbExternalLink />}
		</div>
	);
};
