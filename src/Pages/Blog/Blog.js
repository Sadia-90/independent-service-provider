import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <h3>Authorization vs authentication</h3>
            <p>1.authentication is the process of verifying who someone is.
            authorization is the process of verifying what specific applications, files, and data a user has access.
              <br/>
            2.In security processes, authentication validates a user's identity.Authorization then grants that user permission to access a resource.
            </p>


            <h3>Why are i using firebase? What other options do i have to implement authentication?</h3>


            <h4>Firebase manages all data real-time in the database</h4>

            <p>Authentication makes Web page secure sign-ins for any platform. This end-to-end solution supports email and passowrd, phone auth, & mult-platform login. Monitor App Performance. Customize our App. Cross-Platform Solutions. Boost App Engagement</p>

            <h3> What other services does firebase provide other than authentication</h3>
            <p>Open Source Backend Platform.Firebase to help take our mobile app development a notch higher.Simple core library, with a modular API for our application.</p>
            
        </div>
    );
};

export default Blog;