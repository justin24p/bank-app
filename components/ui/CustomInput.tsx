import React from "react";

import {
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";
interface CustomInput {
    control: Control<z.infer<typeof authFormSchema>>;
    name: string;
    label: string;
    placeholder: string;
}
import { Input } from "@/components/ui/input";
const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
    return (
        <FormField
            control={control}
            name="password"
            render={({ field }) => (
                <div className="form-item">
                    <FormLabel className="form-label">{label}</FormLabel>
                    <div className="flex w-full flex-col">
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                type="password"
                                className="input-class"
                                {...field}
                            ></Input>
                        </FormControl>
                        <FormMessage className="form-messsage mt-2"></FormMessage>
                    </div>
                </div>
            )}
        />
    );
};

export default CustomInput;
