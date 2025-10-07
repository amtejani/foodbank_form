'use client';

import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';

interface DatePickerFieldProps {
  name: string;
  [key: string]: any;
}

export function DatePickerField({ name, ...props }: DatePickerFieldProps) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  return (
    <div>
      <DatePicker
  selected={field.value ? new Date(field.value) : null}
  onChange={(val: Date | null) => {
    setFieldValue(name, val ? val.toISOString() : '');
  }}
  onChangeRaw={(e: React.SyntheticEvent<HTMLElement> | undefined) => {
          const value =
            (e?.target as HTMLInputElement | null)?.value ?? ''; //captures typed input
          setFieldValue(name, value);
  }}
  dateFormat="MM/dd/yyyy"   // accepts "09/26/2025"
  placeholderText="MM/DD/YYYY"
  className="form-control"
/>

    </div>
  );
}
