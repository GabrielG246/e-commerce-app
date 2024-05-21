export interface IProduct {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    thumbnail:   string;
    images:      string[];
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

export interface ILogin {
    username: string;
    password: string;
}

export interface IData {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}