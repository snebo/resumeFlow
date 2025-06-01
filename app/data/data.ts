type Education = {
	instituteName: string;
	degreeYears: number;
	gpa?: string;
};

export const defaultInfo: {
	firstName: string;
	lastName: string;
	jobTitle: string;
	summary: string;
	experience: string[][];
	education: Education[];
	skills: string[];
} = {
	firstName: '',
	lastName: '',
	jobTitle: '',
	summary: '',
	experience: [],
	education: [],
	skills: [],
};
