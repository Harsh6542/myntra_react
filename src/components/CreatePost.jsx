import { useContext, useRef } from "react";
import { Postlist } from "../store/Post-list-store";
import { redirect, useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";

const CreatePost = () => {


    // const { addPost } = useContext(Postlist);


    return (
        <>
            <Form method="POST" className="createpost">

                <div className="mb-3">
                    <label htmlFor="userId" className="form-label"> User ID</label>
                    <input
                        name="userId"
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Your  User Id"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post Title</label>
                    <input
                        name="title"
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="How are You Feeling Today"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Post Content</label>
                    <textarea
                        name="body"
                        rows={4}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Tell us more about it"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="reactions" className="form-label">Number of Reactions</label>
                    <input
                        name="reactions"
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Ho many people reacted to this"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Enter Your hashtags here</label>
                    <input
                        name="tags"
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Please enter tags Using space"
                    />
                </div>



                <button type="submit" className="btn btn-primary">Post</button>
            </Form>
        </>
    );
}

export async function createpostAction(data) {
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);
    postData.tags = postData.tags.split(" ");
    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
    })
        .then((res) => res.json())
        .then((post) => {
            console.log(post);

        });
    return redirect("/")
};
export default CreatePost;