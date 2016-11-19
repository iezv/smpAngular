
export class Contact {
	
	constructor(
		public name: string, 
		public company: string, 
		public position: string,
		public phone: string, 
		public email: string) 
	{
		this.name = name;
		this.company = company;
		this.position = position;
		this.phone = phone;
		this.email = email;
	}

}