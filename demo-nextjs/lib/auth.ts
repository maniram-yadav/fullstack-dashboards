'use client';
import { createContext,useContext,useState,useEffect } from "react";

type User = {
    id : string;
    name : string;
    email:string;
};

type AuthContextType = {
    user : User|null;
    login : (email:string,password:string) => Promise<void>;
    register :(name:string,email:string,password:string) => Promise<void>;
    logout : () => void;
    loading : boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  loading: true,
});

export const AuthProvider = ({children} : {children:React.ReactNode}) => {

    const [user,setUser] = useState<User|null>(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
            const storedUser = localStorage.getItem('user');
            if(storedUser) {
                setUser(JSON.parse(storedUser));
            }
            setLoading(false);
    },[]);

    const login = async (email:string,password : string) =>{
        const response = await fetch('/api/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({email,password}),
        });
        if(response.ok) {
            const userData = await response.json();
            setUser(userData);
            localStorage.setItem('user',JSON.stringify(userData));
        } else {
            throw new Error('Login failed');
        }
    };

    const register = async (name:string,email:string,password:string) => {

        const response = await fetch('/api/auth/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({name,email,password}),
        });
      
        if (response.ok){
            const userData = await response.json();
            setUser(userData);
            localStorage.setItem('user',JSON.stringify(userData));
        } else {
            throw new Error('Registration failed');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };
    
   return (
    <div></div>
   );

    // return (
    //     <AuthContext.Provider value={{user,login,register,logout,loading}}>
    //     {children}
    //     </AuthContext.Provider>
    //     );
};

export const useAuth = () => useContext(AuthContext);