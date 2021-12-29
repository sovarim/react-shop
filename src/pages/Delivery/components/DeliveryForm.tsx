import { Button, DateTimePicker, TextField } from 'components';
import { AddressIcon } from 'icons';
import styled, { css } from 'styled-components';

const DeliveryFormRoot = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FieldTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.625rem;
`;

const Field = styled.div`
  width: 100%;
  margin-bottom: 1.125rem;
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
              width: 120px;
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
            small
            fullWidth
            placeholder="Выберите адрес доставки"
            startAdornment={<AddressIcon />}
          />
        </Field>
        <Field>
          <FieldTitle>Имя</FieldTitle>
          <TextField small fullWidth />
        </Field>
        <Field>
          <FieldTitle>Телефон</FieldTitle>
          <TextField small fullWidth />
        </Field>
      </div>
      <div
        css={css`
          flex: 1;
          max-width: 292px;
        `}
      >
        <div
          css={css`
            background: #f0f4fb;
            border-radius: 20px;
            padding: 1.25rem;
          `}
        >
          <div
            css={css`
              display: flex;
              margin-bottom: 0.3rem;
            `}
          >
            <span
              css={css`
                color: #727280;
                font-size: 0.875rem;
                flex: 1;
              `}
            >
              Стоимость товаров:
            </span>
            <span
              css={css`
                color: #727280;
                font-size: 1rem;
              `}
            >
              200 584₽
            </span>
          </div>
          <div
            css={css`
              display: flex;
              margin-bottom: 1rem;
            `}
          >
            <span
              css={css`
                color: #727280;
                font-size: 0.875rem;
                line-height: 1.25rem;
                flex: 1;
              `}
            >
              Стоимость доставки:
            </span>
            <span
              css={css`
                color: #727280;
                font-size: 1rem;
                line-height: 1.25rem;
              `}
            >
              200₽
            </span>
          </div>
          <div
            css={css`
              display: flex;
            `}
          >
            <span
              css={css`
                color: #727280;
                font-size: 1rem;
                line-height: 1.25rem;
                flex: 1;
              `}
            >
              Итого:
            </span>
            <span
              css={css`
                color: #2d2d2f;
                font-size: 1rem;
                font-weight: 600;
                line-height: 1.25rem;
              `}
            >
              200 784₽
            </span>
          </div>
        </div>
        <div
          css={css`
            padding-top: 0.625rem;
            width: 100%;
          `}
        >
          <Button
            css={css`
              font-size: 16px;
              padding: 1rem 0;
            `}
            fullWidth
            color="blue"
            type="submit"
          >
            Сделать заказ
          </Button>
        </div>
      </div>
    </DeliveryFormRoot>
  );
};

export default DeliveryForm;
