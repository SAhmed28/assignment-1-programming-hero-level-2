# What are some differences between interfaces and types in TypeScript?

## Interfaces
- এটা অবজেক্ট শেপ এর মতো দেখতে 
- ইন্টারফেস আর টাইপ এর কাজ একই রকম , কিন্তু সবজায়গায় ইন্টারফেস ব্যবহার করা যায় না। 
- ইন্টারফেস শুধু মাত্র নন-প্রিমিটিভ টাইপের ক্ষেত্রে ব্যবহার করা যায় এর অবজেক্ট শেপ এর জন্য।  

Example:
```
interface IUser {
    name: string,
    age: number
}
```

## Types
- এটা আরো ফ্লেক্সিবল 
- প্রিমিটিভ , নন-প্রিমিটিভ সব ক্ষেত্রে ব্যবহার করা যায় 

Example:
```
type Role = {
    role: "admin" | "user";
}
type UserWithRole = User & Role;
```

# Provide an example of using union and intersection types in TypeScript.

## Union Type Example
- একটা অথবা অনেকগুলো অপশন এর মধ্যে যেকোনো একটা = ইউনিয়ন 
- একটা বার '|' ইউস করে 

```
type ID = string | number;

let userId: ID;
userId = "abc123"; 
userId = 42;       
```

## intersection types Example
- সবগুলো অপসন সত্যি হওয়া লাগবে = ইন্টারসেকশন
- একটা এন্ড '&' ইউস করে 

```
type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const user: Person = {
  name: "Ahmed",
  age: 27
};
```
