export interface IProduct {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
}

export interface Rating {
    rate:  number;
    count: number;
}

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}