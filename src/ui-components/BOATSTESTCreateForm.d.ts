/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BOATSTESTCreateFormInputValues = {
    name?: string;
    description?: string;
};
export declare type BOATSTESTCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BOATSTESTCreateFormOverridesProps = {
    BOATSTESTCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BOATSTESTCreateFormProps = React.PropsWithChildren<{
    overrides?: BOATSTESTCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BOATSTESTCreateFormInputValues) => BOATSTESTCreateFormInputValues;
    onSuccess?: (fields: BOATSTESTCreateFormInputValues) => void;
    onError?: (fields: BOATSTESTCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BOATSTESTCreateFormInputValues) => BOATSTESTCreateFormInputValues;
    onValidate?: BOATSTESTCreateFormValidationValues;
} & React.CSSProperties>;
export default function BOATSTESTCreateForm(props: BOATSTESTCreateFormProps): React.ReactElement;
