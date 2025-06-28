import React from "react";
import { useState } from "react";

import EmojiList from "./emojis.json"; // json - useEffect

//create your first component
const Home = () => {

	const initialEmojis = EmojiList.emojis;

	const [emojis, setEmojis] = useState(initialEmojis);
	
	const [search, setSearch] = useState("");


	const renderEmojis = () => {
		if (search == "") {
			return emojis.map((emoji, idx) => {
				return <p key={idx}>{emoji.emoji} {emoji.name}</p> 
			})
		}
		return emojis
			.filter((emoji) =>  emoji.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) )
			.map((emoji, idx) => {
				return <p key={idx}>{emoji.emoji} {emoji.name}</p> 
			})
	}

	return (
		<div className="text-center d-flex flex-column my-auto">

			<div className="my-4">
				<h3>Search</h3>
				<input type="text" placeholder="search" value={search} onChange={(evt) => setSearch(evt.target.value)} />
			</div>
			{renderEmojis()}
		</div>
	);
};

export default Home;