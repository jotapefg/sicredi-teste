import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
    margin: 30px 0px 20px;
  }
`;

export const DragonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



export const DragonForm = styled.form`
  width: 80%;
  max-width: 600px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  box-shadow: var(--boxShadow);
  padding: 20px; 

  label {
    font-size: 1.4rem;
    font-weight: 700;
    padding: 0px 0px 0px 10px;
    margin-bottom: 10px;

    input {
      margin-top: 6px;
    }
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;