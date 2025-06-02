type Education = {
	instituteName: string;
	degreeYears: number;
	gpa?: string;
	course: string;
};

export type Experience = {
	jobTitle: string;
	jobDescription: string;
	from: Date;
	to: Date;
	companyName: string;
	location?: string;
};

export const defaultInfo: {
	firstName: string;
	lastName: string;
	jobTitle: string;
	summary: string;
	experience: Experience[];
	education: Education[];
	skills: string[];
} = {
	firstName: 'John',
	lastName: 'Doe',
	jobTitle: 'Software Engineer',
	summary:
		'Highly motivated and detail-oriented software engineer with experience in developing scalable and maintainable software solutions. Proficient in a range of programming languages and comfortable working in a fast-paced environment.',
	experience: [
		{
			jobTitle: 'Software Engineer',
			jobDescription:
				'Developed a web application using React, Node.js, and MongoDB. Worked on a team to ensure timely delivery of project milestones.',
			from: new Date('2020-01-01'),
			to: new Date('2021-01-01'),
			companyName: 'Some Company',
			location: 'New York, NY',
		},
	],
	education: [
		{
			instituteName: 'Harvard University',
			degreeYears: 4,
			course: 'Computer Science',
		},
	],
	skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'MongoDB'],
};

export const Professions = {
	'software Engineer': [
		'JavaScript',
		'TypeScript',
		'React',
		'Node.js',
		'MongoDB',
		'Python',
		'TensorFlow',
		'PyTorch',
	],
	'web Developer': ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js, MongoDB'],
	'front-end Developer': ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Angular'],
	'back-end Developer': ['Node.js', 'MongoDB', 'Python', 'TensorFlow', 'PyTorch'],
	'full-stack Developer': [
		'JavaScript',
		'TypeScript',
		'React',
		'Node.js',
		'MongoDB',
		'Python',
		'TensorFlow',
		'PyTorch',
	],
	'mobile Developer': ['Swift', 'Objective-C', 'Kotlin', 'Flutter', 'React Native'],
	'game Developer': ['C#', 'Unity', 'Unreal Engine', 'C++', 'C', 'OpenGL', 'OpenGL ES'],
	'AI Developer': ['Python', 'TensorFlow', 'PyTorch'],
	'machine Learning Developer': ['Python', 'TensorFlow', 'PyTorch'],
	'data Scientist': ['Python', 'TensorFlow', 'PyTorch'],
	'web Designer': ['figma', 'CSS', 'tailwind', 'framer'],
};
