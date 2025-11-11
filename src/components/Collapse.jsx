import { useState } from 'react';

const Collapse = ({ className, title, description, width }) => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const handleOnClick = () => {
		setIsCollapsed((state) => !state);
	};

	return (
		<div
			className={`${className} collapse`}
			style={{ width: width }}
		>
			<div
				onClick={handleOnClick}
				style={{
					borderRadius: isCollapsed ? '8px 8px 0 0' : '8px',
					transition: 'border-radius 0.3s',
					cursor: 'pointer',
				}}
			>
				<h2>{title}</h2>
				<i
					style={{
						transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
						transition: 'transform 0.3s',
					}}
					className='fa-solid fa-chevron-up'
				/>
			</div>
			{typeof description === 'string' ? (
				<p
					style={{
						padding: isCollapsed ? '16px' : '0px 16px',
						maxHeight: isCollapsed ? '500px' : '0px',
					}}
				>
					{description}
				</p>
			) : (
				<ul
					style={{
						padding: isCollapsed ? '16px' : '0px 16px',
						maxHeight: isCollapsed ? '500px' : '0px',
					}}
				>
					{description.map((el, index) => (
						<li key={index}>{el}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export { Collapse };
