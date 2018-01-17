import styled from 'styled-components';

export const DivSearchBox: any = styled.div`
  width: 20%;
  height: 170px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.10), 0 1px 8px 0 rgba(0,0,0,0.10);
  padding: 16px;
  position: absolute;
  z-index: 1000;
  top: 60px;
  left: 20px;
`;

export const Button: any = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(16,162,234,0.30);
  background: #10A2EA;
  border: none;
  color: white;
  cursor: pointer;
  opacity: ${(props: any) => props.isCreating ? '0.5' : '1'};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TextFields: any = styled.input`
  width: 80%;
  height: 32px;
  border-radius: 4px;
  background: #F0F3F7;
  color: #252525;
  border: none;
  padding: 0 8px;
`;

export const InputContainer: any = styled.div`
  margin-bottom: 16px;
  > div {
    display: inline-block;
  }
`;

export const Indicator: any = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${(props: any) => props.color ? props.color : 'lightgrey'};
  margin-right: 8px;
`;
