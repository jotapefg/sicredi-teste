import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
    margin: 30px 0px 20px;
  }
`;

export const DragonContainer = styled.div`
  width: 80%;
  max-width: 600px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  box-shadow: var(--boxShadow);
  margin-top: 30px;
  padding: 20px;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const DragonForm = styled.form`
  label {
    font-size: 1.4rem;
    font-weight: 700;
    padding: 0px 0px 0px 10px;
    margin-bottom: 10px;
    display: block;
  }
  .button_save {
    margin-top: 30px;
    color: rgba(0, 255, 20, .4);
    &:hover {
      border-color: rgba(0, 255, 20, .5);
      color: rgba(0, 255, 20, 1);
    }
  }
  .button_delete {
    margin-top: 5px;
    color: rgba(255, 0, 0, .4);
    &:hover {
      border-color: rgba(255, 0, 0, .5);
      color: rgba(255, 0, 0, 1);
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;

  input {
  }

  .button_edit {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    padding: 0px 0px;
  }
`;