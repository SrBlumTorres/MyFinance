import axios, { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, AddLoginType } from "../schemas/loginSchema";
import Input from "./ui/custom/Input";
import Button from "./ui/custom/Button";
import axiosClient from "../config/axiosClient";
import useUserContext from "../hooks/useUserContext";

type LoginFormValues = AddLoginType;

function LoginForm() {
    const { logIn } = useUserContext();
    // Extraemos los métodos de useForm, un custom hook de "react-hook-form"
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
        mode: "onChange", // Valida mientras el usuario escribe
        resolver: zodResolver(loginSchema),
    });
    
    // Axios
    async function onSubmit(data: LoginFormValues) {
        try {
            const resp = await axiosClient.post('/users/login', data);
            logIn(resp.data);
        } catch (error) {
            console.log(error)
            if(error instanceof AxiosError ){
                console.log(error.response?.data)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
                <Input
                    className="flex flex-col"
                    error={errors.email} 
                    type="email" 
                    {...register("email")} 
                    placeholder="ex: ivluengo@gmail.com"
                />

                <Input 
                    className="flex flex-col"
                    type="password" 
                    error={errors.password} 
                    {...register("password")} 
                />

                <Button type="submit"> Log in </Button>
            </div>
        </form>
    )

}

export default LoginForm