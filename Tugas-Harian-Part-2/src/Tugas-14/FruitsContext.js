import React, {useState, createContext} from "react";

export const FruitsContext = createContext()

export const FruitsProvider = props => {
	const [fruits , setFruits] = useState([])
	const [currentId, setCurrentId] = useState(null)
	const [input , setInput]  = useState({
		name:'',price:'',weight:''
	})

return (
	<FruitsContext.Provider value={
		[fruits, setFruits,currentId, setCurrentId,input , setInput] }>
		{props.children}
	</FruitsContext.Provider>
	)
}
