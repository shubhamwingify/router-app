import React from "react";
import queryString from "query-string";

const Posts = (props) => {
    const result = queryString.parse(props.location.search);
    return (
        <div>
            <h1>Posts</h1>
            Year: {props.match.params.year} , Month: {props.match.params.month}
            <p>
                {result.search}
            </p>
        </div>
    );
};

export default Posts;
