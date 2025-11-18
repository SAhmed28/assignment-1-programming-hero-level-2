

const formatValue = (value: string | number | boolean) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    else if (typeof value === 'boolean') {
        if (value) {
            return false;
        }
        else {
            return true;
        }
    }
}



const getLength = (value: string | Number[]) => {
    if (typeof value === 'string') {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
}




class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}



type Book1 = {
    title: string,
    rating: number,
}
type Books = Book1[]


const filterByRating = (books: Books): Books => {
    const outputArr = books.filter((item) => item.rating >= 4 && item.rating <= 5)
    return outputArr;
}




type User = {
    id: number,
    name: string,
    email: string,
    isActive: Boolean
}
type Users = User[];

const filterActiveUsers = (users: Users): Users => {
    const newArr = users.filter((user) => user.isActive === true)
    return newArr;
}



interface Book {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean
}

const printBookDetails = (book: Book) => {
    let available = '';
    if (book.isAvailable) {
        available = 'Yes'
    }
    else {
        available = 'No'
    }
    return console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, 
        Available: ${available}`);
}



const getUniqueValues = (arr1: number[], arr2: number[]): number[] => {
    const result: number[] = [];
    let size = 0;

    const checkUnique = (value) => {
        let exist = false;

        for (let i = 0; i < size; i++) {
            if (result[i] == value) {
                exist = true;
                break;
            }
        }

        if (!exist) {
            result[size] = value;
            size++;
        }
    }

    for (let i = 0; i < arr1.length; i++) checkUnique(arr1[i]);
    for (let i = 0; i < arr2.length; i++) checkUnique(arr2[i]);

    return result;
}



type Product = {
    name:string,
    price: number,
    quantity: number,
    discount?: number
}
type Products = Product[]

const calculateTotalPrice = (products: Products):number => {
    let total = 0;

    products.map(product => {
        const base = product.price * product.quantity;
        const discount = product.discount ? (base * product.discount) / 100 : 0;
        total = total + (base - discount); 
    });

    return total;
}

