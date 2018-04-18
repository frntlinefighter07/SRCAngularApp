export class AddressEntry
{
    public firstName: string;
    public lastName: string;
    public company: string;
    public street1: string;
    public street2:string;
    public city: string;
    public state: string;
    public zip: number;
    public entryName: string;

    constructor(firstName: string, lastName: string, company: string, street1: string, street2: string, city: string, state: string, zip: number, entryName: string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
        this.street1 = street1;
        this.street2 = street2;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.entryName = entryName;
    }
}