import { DateTimePicker, TextField } from 'components';
import styled, { css } from 'styled-components';

const DeliveryFormRoot = styled.form`
  width: 100%;
  display: flex;
`;

const FieldTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.625rem;
`;

const Field = styled.div`
  width: 100%;
  margin-bottom: 1.875rem;
`;

const DeliveryForm = () => {
  return (
    <DeliveryFormRoot>
      <div
        css={css`
          flex: 1;
          max-width: 292px;
        `}
      >
        <FieldTitle>Когда доставить?</FieldTitle>
        <div
          css={css`
            display: flex;
            margin-bottom: 1.875rem;
          `}
        >
          <DateTimePicker
            css={css`
              margin-right: 1.25rem;
              width: 115px;
            `}
            type="date"
            placeholder="Выберите дату"
          />
          <DateTimePicker
            css={css`
              width: 112px;
            `}
            type="time"
            placeholder="Выберите время"
          />
        </div>
        <Field>
          <FieldTitle>Куда доставить?</FieldTitle>
          <TextField
            css={css`
              & > * {
                padding: 0.625rem 0.875rem;
              }
              & input {
                font-size: 0.875rem;
              }
            `}
            placeholder="Выберите адрес доставки"
          />
        </Field>
      </div>
    </DeliveryFormRoot>
  );
};

export default DeliveryForm;
