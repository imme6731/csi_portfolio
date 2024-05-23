import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { ErrorMsg } from "./components/ErrorMsg";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  padding: 120px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  width: 100%;
  max-width: 520px;
  border: 1.5px solid #fff;
  border-radius: 40px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const ConTitle = styled.h2`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  & > .msgIcon {
    margin-left: 15px;
    font-size: 40px;
  }
`;
const InputTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const Input = styled.input`
  height: 40px;
  margin-bottom: 20px;
  font-size: 16px;
  padding-left: 10px;
  border-radius: 10px;
`;
const MessageBox = styled.textarea`
  resize: vertical;
  font-size: 16px;
  padding-left: 10px;
  padding-top: 8px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
const Button = styled.button`
  all: unset;
  width: 140px;
  height: 60px;
  border: 1.5px solid #fff;
  border-radius: 12px;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  background-color: ${(props) => (props.$isActive ? `#fff` : `unset`)};
  color: ${(props) => (props.$isActive ? `#121212` : `#fff`)};
`;

export const Contact = () => {
  const {
    register,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  return (
    <Wrap>
      <Container>
        <Form
          className="gform"
          action="https://script.google.com/macros/s/AKfycbzsM5A5EvIFHTkWlEBDumyOU097PTKDRONi8TrLDB_w1xNBbr31B0UaDg5Iz2u2k_a0/exec"
          method="POST"
        >
          <ConTitle>
            Contact me <FontAwesomeIcon icon={faEnvelope} className="msgIcon" />
          </ConTitle>

          <InputTitle>Name</InputTitle>
          <Input
            {...register("name", {
              required: "이름은 필수 입니다.",
              minLength: {
                value: 1,
                message: "이름은 필수 입니다.",
              },
            })}
            placeholder="성함을 입력해주세요."
          />

          <InputTitle>E-mail</InputTitle>
          <Input
            {...register("email", {
              required: "이메일은 필수 입니다.",
            })}
            type="email"
            placeholder="메일 주소를 입력해주세요."
          />

          <InputTitle>Message</InputTitle>
          <MessageBox
            {...register("text", {
              required: "메세지 내용은 필수 입니다.",
              minLength: {
                value: 1,
                message: "메세지 내용은 필수 입니다.",
              },
            })}
            type="text"
            placeholder="내용을 입력해주세요."
            rows={8}
          />

          {errors?.name?.message ? (
            <ErrorMsg message={errors?.name?.message} />
          ) : errors?.email?.message ? (
            <ErrorMsg message={errors?.email?.message} />
          ) : errors?.text?.message ? (
            <ErrorMsg message={errors?.text?.message} />
          ) : (
            ""
          )}
          <BtnWrap>
            <Button $isActive={isValid} type="submit">
              SEND
            </Button>
          </BtnWrap>
        </Form>
      </Container>
    </Wrap>
  );
};
