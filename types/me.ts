export type DRZ = {
	userName: string;
	fullName: string;
	dob?: Dob;
	paragraph?: string;
	origin?: string;
	hobbies?: string[];
};

export type Dob = {
	day: number;
	month: number;
	year: number;
};
