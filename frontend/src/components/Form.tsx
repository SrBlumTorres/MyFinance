import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, AddLoginType } from "../schemas/loginSchema";
import Input from "./ui/custom/Input";
import Button from "./ui/custom/Button";
import axios from "axios";

type LoginFormValues = AddLoginType;

function Form() {
    // Extraemos los métodos de useForm, un custom hook de "react-hook-form"
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
        mode: "onChange", // Valida mientras el usuario escribe
        resolver: zodResolver(loginSchema),
    });
    
    // Axios?? 
    function onSubmit(data: LoginFormValues) {
        return JSON.stringify(
            axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_ENDPOINT + '/users/login',
                data: {
                  email: data.email,
                  password: data.password
                }
            })
        );
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

export default Form