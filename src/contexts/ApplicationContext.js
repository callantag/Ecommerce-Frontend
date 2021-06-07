import { createContext, useState, useEffect } from "react";

export const ApplicationContext = createContext();

export default function ApplicationProvider(props) {
	const [user, setUser] = useState({
		userId: "",
		isAdmin: false,
		email: "",
		firstName: "",
		lastName: "",
	});

	// Fetch
	//useEffect(<function to run>, <array of state that you are watching>)

	useEffect(() => {
		fetch("http://localhost:4000/api/users", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data)
				let { firstName, lastName, isAdmin, email } = data;
				setUser({
					userId: data._id,
					firstName,
					lastName,
					email,
					isAdmin,
				});
			})
			.catch((err) => console.log(err));
	}, []);

	// useEffect( ()=>{
	// 	console.log("This will run if products state changes")
	// },[products])

	return (
		<ApplicationContext.Provider
			value={{
				setUser,
				user,
			}}
		>
			{props.children}
		</ApplicationContext.Provider>
	);
}
