import { createContext, useEffect, useReducer, useState } from "react";


export const Postlist = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
   
});

const postListReducer = (currpostList, action) => {
    console.log(action);
    console.log(currpostList);

    let newpostlist = currpostList;
    if (action.type === "DELETE_POST") {
        newpostlist = currpostList.filter((post) => post.id !== action.payload.postid);
    }
    else if (action.type === "ADD_POST") {
        newpostlist = [action.payload, ...currpostList]
    }
    else if (action.type === "ADD_INITIAL_POSTS") {
        newpostlist = action.payload.posts;
    }
    return newpostlist;
};
const Postlistprovider = ({ children }) => {
    const [postList, dispatchpostList] = useReducer(postListReducer, []);



    const addPost = (post) => {
        dispatchpostList({
            type: "ADD_POST",
            payload: post,
        })
    }

    const addInitialPosts = (posts) => {

        dispatchpostList({
            type: "ADD_INITIAL_POSTS",
            payload: {
                posts: posts,
            }
        });
    };

    const deletePost = (postid) => {
        dispatchpostList({
            type: "DELETE_POST",
            payload: {
                postid,
            },
        });
    };

   


    return <Postlist.Provider value={
        {
            postList: postList,
            addPost: addPost,
            deletePost: deletePost,
          
           
        }
    }> {children}</Postlist.Provider >
};

export default Postlistprovider