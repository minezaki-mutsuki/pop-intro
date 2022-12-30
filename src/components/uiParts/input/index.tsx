import { forwardRef } from "react";
import { StyledInput } from "./style";

export const Input = forwardRef<HTMLInputElement>(
        (_, inputRef) => {
        return (
            <StyledInput placeholder="パスワードを入力" type="password" ref={inputRef} />
        );
    }
);
