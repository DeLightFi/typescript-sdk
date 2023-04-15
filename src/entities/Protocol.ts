export class Protocol {
    public readonly name: string;
    public readonly logo: string;
    public readonly description: string;
    constructor(name: string, description: string, logo: string) {
        this.name = name;
        this.description = description;
        this.logo = logo;
    }
}