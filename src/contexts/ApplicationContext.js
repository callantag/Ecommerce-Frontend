import { createContext, useState, useEffect } from 'react';

export const ApplicationContext = createContext()

export default function ApplicationProvider(props) {

	const [products, setProducts] = useState([])

	//Fetch
	// useEffect(<function to run>, <array of state you are watching>)
	useEffect(() => {
		fetch("http://localhost:4000/api/products")
		.then(res=> res.json())
		.then(data=>{
			setProducts(data)
		})
		.catch(err=>console.log(err))
	})

	return (
		<ApplicationContext.Provider
			value={{products}}
		>
			{props.children}
		</ApplicationContext.Provider>
	)
}





// const products = [
	// 	{
	// 		_id: 1,
	// 		name: "Brand X",
	// 		description: "descX"
	// 	},
	// 	{
	// 		_id: 2,
	// 		name: "Brand Y",
	// 		description: "descY"
	// 	},
	// 	{
	// 		_id: 3,
	// 		name: "Brand Z",
	// 		description: "descZ"
	// 	}
	// ]