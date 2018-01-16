import styled from 'styled-components';

export const DivToaster: any = styled.div`
  display: ${(props: {hide: boolean}) => props.hide ? 'none' : 'block'};
  width: 20%;
  height: 40px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.10), 0 1px 8px 0 rgba(0,0,0,0.10);
  background: rgba(51,51,51,0.90);
  color: white;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  position: absolute;
  z-index: 1000;
  right: 32px;
  top: 80px;
`;
