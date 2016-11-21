
export class Contact {
	    public id: number; 
		public name: string; 
		public company: string; 
		public position: string;
		public phone: string; 
		public email: string;
		public marking: boolean;
	
	constructor(
		id: number, 
		name: string, 
		company: string, 
		position: string,
		phone: string, 
		email: string) 
	{
		this.id = id;
		this.name = name;
		this.company = company;
		this.position = position;
		this.phone = phone;
		this.email = email;
		this.marking = false;
	}

}