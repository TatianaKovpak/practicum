import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './style.module.scss';
import { TSingleSelect } from '../types';
import ArrowRoundedUp from '../../../../assets/icons/icon_arrow_rounded_up_light.svg';
import ArrowRoundedDown from '../../../../assets/icons/icon_arrow_rounded_down_light.svg';
import { useCustomSelect } from '../useCustomSelect';
import WrappedWithControlCheckbox from '../../checkbox';

export const MultipleSelectWithOneSet: FC<TSingleSelect> = ({
	setSelectedValues,
	label,
	placeholder,
	options,
	initialValues,
}) => {
	const { values, isOpen, onClick, onClickMultipleOption, wrapperRef } =
		useCustomSelect(setSelectedValues, initialValues);

	return (
		<div className={style.select} ref={wrapperRef}>
			{values.length > 0 && <label className={style.label}>{label}</label>}
			<div className={style.selection} onClick={onClick} tabIndex={0}>
				{values.length === 0 ? (
					<p className={style.placeholder}>{placeholder}</p>
				) : (
					<p
						className={style.labelNumber}
					>{`${values.length} из ${options.length}`}</p>
				)}
				<img
					className={style.arrow}
					src={isOpen ? ArrowRoundedUp : ArrowRoundedDown}
					alt={isOpen ? 'Стрелка вверх' : 'Стрелка вниз'}
				/>
			</div>
			{!isOpen ? null : (
				<div className={style.options}>
					<div className={style.scroll}>
						{options.map((option) => {
							const isSelect = values.some(
								(item) => item.value === option.value
							);
							return (
								<div
									key={uuidv4()}
									data-value={option.value}
									className={style.option}
									onClick={() => onClickMultipleOption(option)}
								>
									<WrappedWithControlCheckbox
										checked={isSelect}
										id={option.value}
										name={option.value}
										onChange={() => onClickMultipleOption(option)}
									>
										<p className={style.checkboxText}>{option.value}</p>
									</WrappedWithControlCheckbox>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};
