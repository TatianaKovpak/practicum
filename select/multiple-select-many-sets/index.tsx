import React, { FC, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './style.module.scss';
import ArrowRoundedUp from '../../../../assets/icons/icon_arrow_rounded_up_light.svg';
import ArrowRoundedDown from '../../../../assets/icons/icon_arrow_rounded_down_light.svg';
import ArrowBlueUpIcon from '../../../../assets/icons/icon_arrow_sharp_blue_up.svg';
import ArrowBlueDownIcon from '../../../../assets/icons/icon_arrow_sharp_blue_down.svg';
import ArrowSharpUpIcon from '../../../../assets/icons/icon_arrow_sharp_up_light.svg';
import ArrowSharpDownIcon from '../../../../assets/icons/icon_arrow_sharp_down_light.svg';
import CloseLightGreyIcon from '../../../../assets/icons/icon_close_light_grey.svg';
import { MultipleOption, MultipleSelectManySetsProps } from '../types';
import { useCustomSelect } from '../useCustomSelect';
import WrappedWithControlCheckbox from '../../checkbox';

export const MultipleSelectManySets: FC<MultipleSelectManySetsProps> = ({
	setSelectedValues,
	label,
	placeholder,
	hideCount,
	options,
	dropdownTitle,
	removeSelectedValue,
	setRemoveSelectedValue,
	initialValues,
}) => {
	const {
		values,
		setValues,
		isOpen,
		setIsOpen,
		onClick,
		onClickMultipleOption,
		onDeleteOption,
		onClickResetOption,
		onClickSubmit,
		wrapperRef,
	} = useCustomSelect(setSelectedValues, initialValues);

	const [expand, setExpand] = useState<{ [key: number]: boolean }>({});

	// Функция расширения и уменьшения группы элементов в выпадающем списке
	const toggleExpand = (index: number) => {
		setExpand((prevExpand) => ({ ...prevExpand, [index]: !prevExpand[index] }));
	};

	const stopPropagation = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.stopPropagation();
	};

	// Функция закрытия выпадающего списка по нажатию на иконку крестика в мобильной версии multiply
	const handleClickCloseIcon = () => setIsOpen(false);

	// Функция подсчета количества всех value в массиве options
	function countAllValues(options: MultipleOption[]) {
		return options.reduce((count, option) => {
			if ('values' in option) {
				return count + option.values.length;
			} else {
				return count;
			}
		}, 0);
	}

	const result = countAllValues(options);

	// Эффект для удаления галочек из родительского компонента
	useEffect(() => {
		if (removeSelectedValue) {
			setValues((oldValues) => {
				return oldValues.filter((item) => item.value !== removeSelectedValue);
			});
		}
		setRemoveSelectedValue(undefined);
	}, [removeSelectedValue, setValues, setRemoveSelectedValue]);

	return (
		<div className={style.select} ref={wrapperRef}>
			{values.length > 0 && <label className={style.label}>{label}</label>}
			<div className={style.selection} onClick={onClick} tabIndex={0}>
				{values.length === 0 ? (
					<p className={style.placeholder}>{placeholder}</p>
				) : (
					values.map((value) => (
						<span
							key={uuidv4()}
							onClick={stopPropagation}
							className={`${style.value}`}
						>
							{value.value}
							<span
								data-value={value.value}
								onClick={() => onDeleteOption(value)}
								className={style.delete}
							></span>
						</span>
					))
				)}
				<img
					className={style.arrow}
					src={isOpen ? ArrowRoundedUp : ArrowRoundedDown}
					alt={isOpen ? 'Стрелка вверх' : 'Стрелка вниз'}
				/>
				{hideCount ? null : (
					<p className={style.selectionCount}>
						<span
							className={style.numberText}
						>{`${values.length}/${result}`}</span>
					</p>
				)}
			</div>
			{!isOpen ? null : (
				<div className={style.options}>
					<div className={style.optionsTitleWrap}>
						<p className={style.optionsTitle}>{dropdownTitle}</p>
						<img
							className={style.optionsSloseIcon}
							src={CloseLightGreyIcon}
							alt="Крестик"
							onClick={handleClickCloseIcon}
						/>
					</div>
					<div className={style.scroll}>
						{options.map((option, optIndex) => (
							<div key={uuidv4()} className={style.optionGroup}>
								<p
									className={`${style.optionMultiplyTitle} ${style.optionTitle}`}
								>
									{option.title}
									<span
										className={style.optionTitleArrow}
										onClick={() => toggleExpand(optIndex)}
									>
										<img
											src={
												expand[optIndex] ? ArrowSharpUpIcon : ArrowSharpDownIcon
											}
											alt={expand[optIndex] ? 'Стрелка вверх' : 'Стрелка вниз'}
										/>
									</span>
								</p>
								<div
									className={`${style.optionWrap} ${
										expand[optIndex] ? style.expanded : style.collapsed
									}`}
								>
									{option.values.map((value) => {
										const isSelect = values.some(
											(item) => item.value === value.value
										);
										return (
											<div
												key={uuidv4()}
												data-value={value.value}
												className={style.option}
												onClick={() => onClickMultipleOption(value)}
											>
												<WrappedWithControlCheckbox
													checked={isSelect}
													id={value.value}
													name={value.value}
													onChange={() => onClickMultipleOption(value)}
												>
													<p className={style.checkboxText}>{value.value}</p>
												</WrappedWithControlCheckbox>
											</div>
										);
									})}
								</div>
								<div
									className={style.multiplyLink}
									onClick={() => toggleExpand(optIndex)}
								>
									<p className={style.multiplyLinkText}>
										{expand[optIndex] ? (
											'Скрыть'
										) : option.values.length > 4 ? (
											<span>
												Показать еще&nbsp;
												<span className={style.numberText}>
													{option.values.length - 4}
												</span>
											</span>
										) : null}
									</p>
									{option.values.length > 4 && (
										<img
											src={expand ? ArrowBlueUpIcon : ArrowBlueDownIcon}
											alt={expand ? 'Стрелка вверх' : 'Стрелка вниз'}
										/>
									)}
								</div>
							</div>
						))}
					</div>

					<div className={style.buttons}>
						<button
							type="reset"
							className={style.button}
							onClick={() => onClickResetOption()}
						>
							Сбросить выбор
						</button>
						<button
							type="button"
							className={style.button}
							onClick={() => onClickSubmit()}
						>
							Выбрать
							{values.length > 0 && (
								<div className={style.buttonCountCircle}>
									<p
										className={`${style.buttonCountCircleText} ${style.numberText}`}
									>
										{values.length}
									</p>
								</div>
							)}
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
