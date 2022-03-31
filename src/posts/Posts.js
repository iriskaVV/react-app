import React from "react";
import { NewsOutput } from "../newsOutput/NewsOutput";
import { useState, useEffect } from "react";
import { apiPosts, apiUser } from "../const/Const";
import './Posts.css';

//Posts
const Posts = () => {

    const [post, setPost] = useState(null);

    const getNewsPosts = async () =>{
        const res = await NewsOutput(apiPosts);
            
        const postsList = res.map( ({title, body, userId}) =>{
    
            return{
                title,
                body,
                userId
            }
        })
    
        setPost(postsList);
    }

    useEffect(() => {
        getNewsPosts();
    }, []);


    // users
    const [user, setUser] = useState(null);
    const getNewsUsers = async () =>{
        const users = await NewsOutput(apiUser);

        const usersPosts = post.map( (post) => {
            const userFind = users.find( ({id}) => post.userId === id)
            return {
                ...post,
                ...userFind
            }
        })

        setUser(usersPosts);
    }

    useEffect(() => {
        if(post?.length){
            getNewsUsers()
        }
    }, [post]);


    return(
        <>
            {user && (
                <div className="forNews">
                    {user.map(({title, body, name}) =>
                        <div className="shellNews" key={title}>
                            <h3 className="titleNews">{title}</h3>
                            <p className="bodyNews">{body}</p>
                            <p className="userNews">{name}</p>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default Posts;