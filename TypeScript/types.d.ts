
interface Skills {
    React?: boolean;
    HTML?: boolean;
    JS?: boolean;
    TypeScript?: boolean;
  }
  
  interface Intern {
    name: string;
    age: number;
    skills: Skills;
  }
  
  export enum JuniorDomain {
    Web = "Web",
    Connect = "Connect",
    Backend = "Backend",
  }
  
  interface Junior {
    name: string;
    age: number;
    skills: Skills;
    date_of_promotion: string; 
    domain: JuniorDomain;
  }
  
  interface Company {
    Interns: Intern[];
    Juniors: Junior[];
    Country: string;
  }
  
  export default Company;
  