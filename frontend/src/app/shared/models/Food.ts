// define all members of Food
// "?" are optionol members
export class Food {
  id!: string;
  name!: string;
  price!: number;
  tags?: string[];
  favorite!:boolean;
  stars!: number;
  imageUrl!: string;
  origins!: string[];
  cookTime!:string;
}
