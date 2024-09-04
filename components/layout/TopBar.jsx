"use client";

import React,{useState} from "react"
import { Add , Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const TopBar = () => {
  const router = useRouter();
  const [search,setSearch] = useState("");

  return(
    <div>
      <div>
        <input 
          type="text" 
          className="search-bar"
          placeholder="search posts, people,... "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <Search className="create-post-btn" onClick={() => router.push(`/create-posts`)}/> */}
      </div>

      <button className="create-post-btn p-5" onClick={() => router.push("/create-post")}>create a post</button>
    </div>
  );
};
export default TopBar;