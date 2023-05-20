export class Stressors{
  id: number;
  name: string;
  description: string;
  relieved: boolean;
  constructor(id: number, name: string, description: string, relieved: boolean){
    this.id = id;
    this.name = name;
    this.description = description;
    this.relieved = relieved;
  }
}