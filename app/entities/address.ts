export class Address {
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