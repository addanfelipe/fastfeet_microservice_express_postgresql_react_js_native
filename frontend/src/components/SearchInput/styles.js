import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 10px 16px;
  max-width: 237px;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    width: 22px;
    height: 22px;
  }

  input {
    font-size: 14px;
    color: #999999;
    border: none;
    padding-top: 3px;
    padding-left: 5px;

    &::placeholder {
      font-size: 14px;
      color: #999999;
    }
  }
`;