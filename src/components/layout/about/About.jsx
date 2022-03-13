import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="a">
           <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                   <img 
                   src="https://s3.us-east-1.amazonaws.com/ahmenki/images/career/hmTe2kN4l0Me0Fx2dsF15inly5uuYR5drovwUGwW.jpeg" 
                   alt="" 
                   className="a-img" />
                </div>
           </div>

           <div className="a-right">
           <h1 className="a-title">About Me</h1>
           <p className="a-sub">
            I merge a passion for usability and user experience with
technical knowledge to create cool digital experiences
with both front end and back end coding. My repertoire
includes programming languages and tools such as
ReactJS, Wordpress, SailsJS, MySQL, Laravel, Livewire,
PHP, Nginx and Apache server configuration, Tailwinds
CSS, SASS, LESS, Bootstrap, Susy, jQuery, AWS cloud
services. Cloudwatch, Lambda, Dynamo, API Gateway,
S3, SES, SQS, SNS, RDS and more.
             </p>
              <p className="a-desc"> 
               Proficiency with fundamental front-end languages such as
HTML, JavaScript ,TypeScript, and CSS Frameworks (e.g.
Bootstrap, Foundation, Intuit) 
● Proficiency with MVC frameworks such as AngularJS, React,
and Laravel, Livewire.
● Proficiency with server-side languages such as Python, Ruby,
Java, PHP, Nodejs.
● Proficiency with database technology such as MySQL, NoSql,
Oracle, MongoDB, Nodejs, JSON schemas.
● Experience with AWS services such Serverless technologies,
CloudFront, Cloud Formation, Lambda, EC2, VPC, S3, Aurora,
DynamoDB, SNS, SQS, ECS, EKS, Route53, ELB/ALB and more.
● Proficiency with Cloud Computing, AWS Computing.
● SQL Software development, UI, LAMP stack, Node.js, SaaS
               </p> 
                <div className="a-award"> 
                <img src="data:image/png;base64,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" alt="" className="a-award-img" />
                <div className="a-award-texts">
                 <h4 className="a-award-title">AWS Cloud Partitioner</h4>
                 <p className="a-award-desc">
                     AWS Training and Certification helps you build and validate your skills so you can get more out of the cloud. 
                 </p>
               </div>
              </div>
           </div>
        </div>
    )
}

export default About
