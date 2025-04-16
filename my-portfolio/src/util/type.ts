export interface Project {
	title: string;
	description: string;
	stack: string[];
	imageKey: string;
	link?: string;
	role: string;
	details: string;
	responsibilities: string[];
	state: string | null;
};