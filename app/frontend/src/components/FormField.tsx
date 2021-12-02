import * as React from 'react';
import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import {Field} from "formik";

const InputField = styled(TextField)(() => ({
  width: '100%',
  '& > .MuiOutlinedInput-root': {
    borderRadius: 1,
  }
}));

function FormField({ name, type, label, error, message }: any): JSX.Element {

  return (
    <Field name={name}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      {({field, form: { setFieldValue }}) => (
        <InputField
          style={{ width: '100%' }}
          variant="outlined"
          label={label}
          type={type}
          name={name}
          helperText={message}
          onChange={(event: React.ChangeEventHandler, newValue: string) => {
            const nextValue = newValue || '';
            setFieldValue(name, nextValue);
          }}
          error={error}
          {...field}
        />
      )}
    </Field>
  );
}

export default FormField;