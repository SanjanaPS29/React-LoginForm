import React from "react";
import { FormArea,InputBox ,Frame,MainForm,PageHeading,LoginButton,Input} from "../styles/LoginRight.style";
import { LoginForm } from "../styles/LoginForm.style";
import { FaRegUser} from 'react-icons/fa';
import { AiOutlineLock} from 'react-icons/ai';

export default function LoginRight() {
  return (
    <FormArea>
    <LoginForm>
    <PageHeading>
          <h3>Log In</h3>
          <p>
            A mollis morbi est lorem id lorem venenatis sed. Elit quam nisi,
            nulla macenas rhoncus, fusce sed velit. Congue aliquet quam .
          </p>
          </PageHeading>

          <MainForm>
              <Frame>
                
             <Input><InputBox><FaRegUser/><input type="text" name="username" placeholder="username"/></InputBox></Input>
             <Input><InputBox><AiOutlineLock/><input type="password" name="password" placeholder="password"/></InputBox></Input>
               </Frame>
              <LoginButton>Log in</LoginButton>
          </MainForm>
      </LoginForm> 
    </FormArea>
  );
}
