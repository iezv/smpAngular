
export class Contact {
	    public id: number; 
		public name: string; 
		public company: string; 
		public position: string;
		public phone: string; 
		public email: string;
				
		
		public firstname: string;
		public lastname: string;
		public address: address;
		public phones: phones;
		public emails: emails;
		public skype: string;
        public comment: string;


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
	}

}

interface address {
	city: string;
	street: string;
	bld: string;
	appart: string;
	postcode: string;
}

interface phones{
	prime: string;
	mobile: string;
	work: string;
	fax: string;
	other: string;
}

interface emails{
    email1: string;
    email2: string;
}
