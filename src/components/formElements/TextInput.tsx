import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  type?: 'text' | 'email' | 'textarea';
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  className?: string;
};

const TextInput = ({ type = 'text', placeholder, register, error, className }: Props) => {
  const inputClass = `baseStyle ${className || ''}`;

  return (
    <div className="relative mb-1">
      {type === 'textarea' ? (
        <textarea placeholder={placeholder} className={inputClass} rows={4} {...register} />
      ) : (
        <input type={type} placeholder={placeholder} className={inputClass} {...register} />
      )}
      {error && (
        <p className="text-primary-500 text-sm italic absolute bottom-0">{error.message}</p>
      )}
    </div>
  );
};

export default TextInput;
