export type ReservationData = {
    Name: string | null,
    Email: string | null,
    Date: string,
    Time: string,
    Guests: number,
    Dining: string,
  };

  export type CreateAccountData = {
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    ConfirmPassword: string;
  }

  export type SignInData = {
    Email: string;
    Password: string;
  }

  export type Employee = {
    id: number;
    img: string;
    name: string;
    type: string;

  }

  export type Highlight = {
    id: number;
    img: string;
    name: string;
    price: string;
    desc: string;
  }

  export type Testimonial = {
    id: number;
    name: string;
    img: string;
    review: string;
  }

  export type MenuItems = {
    id: number;
    img: string;
    name: string;
    price: string;
    type: string;
    quantity? : number;
  }