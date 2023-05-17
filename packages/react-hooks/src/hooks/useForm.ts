import {
  ComponentPropsWithoutRef,
  FormEvent,
  FormEventHandler,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export type useFormConfiguration<
  T extends Record<keyof T, InputHTMLAttributes<HTMLInputElement>['value']>,
> = {
  initialValues?: T;
  onSubmit?: (data: T, e?: FormEvent<HTMLFormElement>) => void;
};

const useForm = function useForm<
  T extends Record<keyof T, InputHTMLAttributes<HTMLInputElement>['value']>,
>({ initialValues, onSubmit }: useFormConfiguration<T> = {}) {
  const onSubmitRef = useRef(onSubmit);
  const [form, setForm] = useState<T>({ ...initialValues } as T);

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => onSubmitRef.current?.(form, event),
    [form],
  );

  const register = useCallback<
    (
      name: keyof T,
      attr?: ComponentPropsWithoutRef<'input'>,
    ) => ComponentPropsWithoutRef<'input'>
  >(
    (name, attr) => ({
      name: name.toString(),
      value: form[name],
      onChange: (event: FormEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setForm({
          ...form,
          [name]: value,
        });
      },
      ...attr,
    }),
    [form],
  );

  useEffect(() => {
    onSubmitRef.current = onSubmit;
  }, [onSubmit]);

  return { handleSubmit, register };
};

export default useForm;
