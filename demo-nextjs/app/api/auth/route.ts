import { NextResponse } from "next/server";

type user = {
    id : string;
    name : string;
    email:string;
};

const users : user[] = [
    {id:'1',name:'John Doe',email:'john@example.com'},
    {id:'2',name:'Jane Smith',email:'jane@example.com'},
];

export async function POST(request:Request) {
    const {email,password,name} = await request.json();

    if(!email||!password){
        return NextResponse.json(
            {error:'Email and password are required'},
            {status:400}
        )
    }

    if(name){
        const existingUser = users.find((user)=>user.email===email);
        if(existingUser) {
            return NextResponse.json(
                {error:'User already exists'},
                {status:400}
            );
        }
        const newUser = {
            id: (users.length+1).toString(),
            name,
            email,
        };
        users.push(newUser);
        return NextResponse.json(newUser);
    } else{
        const user = users.find((user) => user.email === email);
        if(!user) {
            return NextResponse.json(
                {error:'Invalid Credentials'},
                {status:401}
            );
        }
        return NextResponse.json(user);
    }
}