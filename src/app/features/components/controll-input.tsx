import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";

import React from "react";

import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

type Props<TFieldValues extends FieldValues> = Omit<React.ComponentPropsWithoutRef<"input">, "name" | "control"> & {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  placeHolder?: string;
};

function ControllInput<TFieldValues extends FieldValues>({ name, control, label, placeHolder, className, ...rest }: Props<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          {label && <FieldLabel htmlFor={name}>{label}</FieldLabel>}
          <Input
            {...field}
            {...rest}
            id={name}
            aria-invalid={fieldState.invalid}
            placeholder={placeHolder ?? rest.placeholder}
            value={field.value ?? ""}
            className={className ?? undefined}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}

export default ControllInput;
