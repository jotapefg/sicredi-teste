import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  box-shadow: var(--boxShadow);
  margin: 0 auto;
  padding: 16px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }

  form {
    width: 100%;
    max-width: 300px;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;
