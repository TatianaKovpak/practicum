import { SetStateAction } from 'react';

export type SingleOption = {
	icon?: string;
	value: string;
};

export type MultipleOption = {
	title: string;
	values: SingleOption[];
};

export type Select = {
	setSelectedValues?: (values: SingleOption[]) => void;
	label?: string;
	placeholder?: string;
	hideCount?: boolean;
	initialValues?: SingleOption[];
};

export type TSingleSelect = Select & {
	options?: SingleOption[];
};

export type TMultipleSelect = Select & {
	options?: MultipleOption[];
};

export type SingleSelectWithSortProps = TSingleSelect & {
	value?: string;
	setValue?: (value: string) => void;
	onClickUpSortArrow?: () => void;
	onClickDownSortArrow?: () => void;
};

export type MultipleSelectManySetsProps = TMultipleSelect & {
	dropdownTitle?: string;

	// Пропсы для контроля (удаления) галочек из родительского компонента
	removeSelectedValue?: string;
	setRemoveSelectedValue?: (value: SetStateAction<string | undefined>) => void;
};
