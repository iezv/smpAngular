export interface IContact {
	 id: number;
	 firstname: string;
	 lastname:  string;
	 company:   string; 
	 position:  string;
	 address:   IAddress;
	 phones:    IPhones;
	 emails:    IEmails;
	 skype:     string;
     comment:   string;
}

export interface IAddress{
	 city: string;
	 street: string;
	 bld: string;
	 appart: string;
	 postcode: number;
}

export interface IPhones{
	 prime: string;
	 mobile: string;
	 work: string;
	 fax: string;
	 other: string;
}

export interface IEmails{
	 email1: string;
     email2: string;
}

export class Contact implements IContact {
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

export class Emails implements IEmails{
    public email1: string;
    public email2: string;

    constructor(email1: string, email2: string){
      this.email1 = email1;
      this.email2 = email2;
    }
}

export class Phones implements IPhones{
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

export class Address implements IAddress{
	public city: string;
	public street: string;
	public bld: string;
	public appart: string;
	public postcode: number;

	constructor(
		postcode: number,
		city: string,
		street: string,
		bld: string,
		appart: string,
		){
		this.postcode = postcode;
		this.city = city;
		this.street  = street;
		this.bld = bld;
		this.appart = appart;
	}
	
}