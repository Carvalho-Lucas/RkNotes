import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => //Cor condicional
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => //Borda condicional
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;

    color: ${({ theme, isNew }) => (isNew ? theme.COLORS.ORANGE : 'red')};
  }
  > button:hover {
    transition: 0.5s;
    transform: scale(1.4);
  }

  > input {
    width: 100%;
    height: 56px;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`