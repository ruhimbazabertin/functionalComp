import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message      from './Message';
import UserProfile from './UserProfile';
import Segment    from  './Segment';

const App = () =>{

    return (
        <div className="ui container comments">
            <Message 
            mess="Changes in Services"
            service="This is the way we publish the Changes on the the blog."
            />
            <ApprovalCard>
                <div>
                <h2><strong>Warnings!</strong></h2>
               <span style={{color:'red'}}> Are Sure You Want To Quit?</span>
                </div>
            </ApprovalCard>

            <ApprovalCard>
          <CommentDetail 
          author="Bertin"
           timeAgo="Today at 4:45PM" 
           company="EarthDerively" 
           content="Nice Blog Post"
           avatar = {faker.image.avatar()}
           />
           </ApprovalCard>
           <ApprovalCard>
          <CommentDetail 
          author="Aline" 
          timeAgo="Yesterday at 2:00PM" 
          company="EarthDerively" 
          content ="I like the topic"
          avatar  = {faker.image.avatar()}
          />
          </ApprovalCard>
          <ApprovalCard>
          <CommentDetail 
          author="Theo" 
          timeAgo="Yesterday at 11:10PM" 
          company="EarthDerively" 
          content ="Nice to see you"
          avatar  = {faker.image.avatar()}
          />
          </ApprovalCard>
        <hr/>
        {/* Children props through segment*/}
        <Segment>
        <UserProfile 
        userHeader="Your Information"
        userBody ="This is the way we test knowledge through childeren to props "
        />
        </Segment>
        <Segment>
         <UserProfile 
        userHeader="Your Information"
        userBody ="This is the way we change things through out The segment component."
        />
        </Segment>
        {/* End of segment*/}
            </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));