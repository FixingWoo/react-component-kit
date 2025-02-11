import * as yup from 'yup';

export const daySchema = yup.object().shape({
  day: yup.string().required('요일을 선택해 주세요.'),
});
