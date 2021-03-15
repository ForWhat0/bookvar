import styled from "styled-components";

const LinesContainer = styled.div`
    background: url(/lines.svg) center center no-repeat;
    width: 100%;
    height: 300px;
    background-size: contain;
`;

export const Lines = () => {
  return <LinesContainer />;
};
