import { Address } from './address';

export class Contact {
	    public id: number;
	  	public firstname: string;
		public lastname:  string;
		public company:   string; 
		public position:  string;
		public address:   Address;
		public phones:    Phones;
		public emails:    Emails;
		public skype:     string;
        public comment:   string;


	constructor(
		id: number,
		firstname: string, 
		lastname: string,
		company: string, 
		position: string,
		address: Address,
		phones: Phones, 
		emails: Emails,
		skype: string,
		comment: string
		) 
	{
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.company = company;
		this.position = position;
		this.address = address;
		this.phones = phones;
		this.emails = emails;
		this.skype = skype;
		this.comment = comment;
	}

}

export class Emails{
    public email1: string;
    public email2: string;

    constructor(email1: string, email2: string){
      this.email1 = email1;
      this.email2 = email2;
    }
}

export class Phones{
	public prime: string;
	public mobile: string;
	public work: string;
	public fax: string;
	public other: string;

	constructor(
		prime: string,
		mobile: string,
		work: string,
        fax: string,
        other: string
		){
	this.prime = prime;
	this.mobile = mobile;
	this.work = work;
	this.fax = fax;
	this.other = other;

	}
}

