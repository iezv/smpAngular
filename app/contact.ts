
export class Contact {
	public id: number;
	public name: string;
	public company: string;
	public position: string;
	public phone: string;
	public email: string;

	constructor( name: string, 
		company: string, position: string,
		phone: string, email: string) {
		this.name = name;
		this.company = company;
		this.position = position;
		this.phone = phone;
		this.email = email;
	}
}