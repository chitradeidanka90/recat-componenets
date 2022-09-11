import React from "react";
import ReactDom from "react-dom/client";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
// import './style/App.css'
const { faker } = require('@faker-js/faker');


const el= document.getElementById('root')
const root=ReactDom.createRoot(el)

const App =()=>{
 return (
    <div className="ui container comments">
      <ApprovalCard>
      <CommentDetails author="sem" timeago="Today 6:00PM" content='i like this post' avatar={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetails author="alex"  timeago="Today 8:00PM" content="nice blog" avatar={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetails author="chitra" timeago="Today 9:00PM"  content="i like this subject" avatar={faker.image.avatar()} />
      </ApprovalCard>

       
       
       
    </div>
 );
}

root.render(<App />)
