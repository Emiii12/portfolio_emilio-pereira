export interface Project {
	title: string;
	description: string;
	stack: string[];
	images: {
	  label: string;
	  keys: string[];
	}[];
	link?: string;
	role: string;
	details: string;
	responsibilities: string[];
	state: string | null;
};

export interface Experience {
	company: string;
	role: string;
	startDate: string;
	endDate: string;
	details: string;
	responsibilities: string[];
};
