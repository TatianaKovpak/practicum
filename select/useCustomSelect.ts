import { useEffect, useRef, useState } from 'react';
import { SingleOption } from './types';

export const useCustomSelect = (
	setSelectedValues: (values: SingleOption[]) => void,
	initialValues: SingleOption[]
) => {
	const [values, setValues] = useState<SingleOption[]>(initialValues || []);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [sendingData, setSendingData] = useState<boolean>(false);

	// Обновляет данные в родителе
	useEffect(() => {
		if (sendingData && setSelectedValues) {
			setSelectedValues(values);
			setSendingData(!sendingData);
		}
	}, [sendingData, setSelectedValues, values]);

	// Переключает состояние модального окна
	const onClick = () => setIsOpen(!isOpen);

	// Выбрать значения и закрыть модалку
	const onClickSubmit = () => {
		setIsOpen(!isOpen);
		setSendingData(!sendingData);
	};

	// Сбросить значения
	const onClickResetOption = () => {
		setValues([]);
		setSendingData(!sendingData);
	};

	// Функция клика по элементу в выпадающем списке и добавления элемента в single select
	const onClickSingleOption = (value: SingleOption) => {
		setValues([value]);
		setSendingData(!sendingData);
		setIsOpen(!isOpen);
	};

	// Функция клика по элементу в выпадающем списке и добавления элемента в multiple select
	const onClickMultipleOption = (value: SingleOption) => {
		setValues((prevValues) => {
			const issetItem = prevValues.some((item) => item.value === value.value);
			if (!issetItem) {
				return [...prevValues, value];
			} else {
				return prevValues.filter((val) => val.value !== value.value);
			}
		});
		setSendingData(!sendingData);
	};

	// Функция удаления выбранного элемента из select
	const onDeleteOption = (value: SingleOption) => {
		setValues((prevValues) => {
			const index = prevValues.indexOf(value);
			if (index !== -1) {
				const newValues = [...prevValues];
				newValues.splice(index, 1);
				return newValues;
			}
			return prevValues;
		});
		setSendingData(!sendingData);
	};

	const wrapperRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (e: MouseEvent) => {
		if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
			setIsOpen(false);
		}
	};
	// Закрытие выпадающего списка по нажатию мимо него на экран
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return {
		values,
		setValues,
		isOpen,
		setIsOpen,
		onClick,
		onClickSingleOption,
		onClickMultipleOption,
		onDeleteOption,
		onClickResetOption,
		onClickSubmit,
		wrapperRef,
	};
};
