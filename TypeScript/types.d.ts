// types.d.ts

// Interface for describing skills
interface Skills {
    React?: boolean;
    HTML?: boolean;
    JS?: boolean;
    TypeScript?: boolean;
    // Add more skills as needed
  }
  
  // Interface for Interns
  interface Intern {
    name: string;
    age: number;
    skills: Skills;
  }
  
  // Enum for Junior's domain
  enum JuniorDomain {
    Web = "Web",
    Connect = "Connect",
    Backend = "Backend",
  }
  
  // Interface for Juniors
  interface Junior {
    name: string;
    age: number;
    skills: Skills;
    date_of_promotion: string; // Assuming it's a string for simplicity
    domain: JuniorDomain;
  }
  
  // Interface for Company
  interface Company {
    Interns: Intern[];
    Juniors: Junior[];
    Country: string;
  }
  
  // Export the Company interface
  export default Company;
  