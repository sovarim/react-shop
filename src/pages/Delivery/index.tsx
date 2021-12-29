import { FC } from 'react';
import styled from 'styled-components';
import { Page } from 'components';
import DeliveryForm from './components/DeliveryForm';

const DeliveryTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.875rem;
  width: 100%;
  max-width: 250px;
`;

const DeliveryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
`;

const DeliveryFormContainer = styled.div`
  width: 100%;
  max-width: 665px;
`;

const Delivery: FC = () => {
  return (
    <Page>
      <DeliveryTitleWrapper>
        <DeliveryTitle>Доставка</DeliveryTitle>
      </DeliveryTitleWrapper>
      <DeliveryFormContainer>
        <DeliveryForm />
      </DeliveryFormContainer>
    </Page>
  );
};

export default Delivery;
