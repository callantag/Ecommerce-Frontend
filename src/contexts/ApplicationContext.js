import { createContext } from 'react';

export const ApplicationContext = createContext()

export default function ApplicationProvider(props) {

	const products = [
		{
			_id: 1,
			name: "Brand X",
			description: "descX"
		},
		{
			_id: 2,
			name: "Brand Y",
			description: "descY"
		},
		{
			_id: 3,
			name: "Brand Z",
			description: "descZ"
		}
	]

	return (
		<ApplicationContext.Provider
			value={{products}}
		>
			{props.children}
		</ApplicationContext.Provider>
	)
}