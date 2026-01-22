import React from 'react'
import Card from './components/Card.jsx'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://imgs.search.brave.com/ipFu0qZRyGclZggydE1cS9mD0DVzQAzKWQ_lPBFII94/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9w/YXBlcmN1dC8xMjAw/L2dvb2dsZS1sb2dv/LmpwZw",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://img.icons8.com/?size=100&id=21295&format=png&color=000000",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://img.icons8.com/?size=100&id=PvvcWRWxRKSR&format=png&color=000000",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://img.icons8.com/?size=100&id=30840&format=png&color=000000",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://img.icons8.com/?size=100&id=ortlsYTZxMvT&format=png&color=000000",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Platform Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Remote, India"
    },
    {
      brandLogo: "https://img.icons8.com/?size=100&id=22989&format=png&color=000000",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://img.icons8.com/?size=100&id=OinYGm0fZ470&format=png&color=000000",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer – AI",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://img.icons8.com/?size=100&id=yqf95864UzeQ&format=png&color=000000",
      companyName: "NVIDIA",
      datePosted: "2 months ago",
      post: "GPU Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://img.icons8.com/?size=100&id=39913&format=png&color=000000",
      companyName: "Oracle",
      datePosted: "3 weeks ago",
      post: "Database Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://img.icons8.com/?size=100&id=31754&format=png&color=000000",
      companyName: "IBM",
      datePosted: "8 days ago",
      post: "DevOps Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$35/hr",
      location: "Chennai, India"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}> <Card 
        brandLogo={elem.brandLogo} companyName={elem.companyName}
        datePosted={elem.datePosted}
        post={elem.post}
        tag1={elem.tag1}
        tag2={elem.tag2}
        pay={elem.pay}
        location={elem.location}
        />
        </div>
      })}
      
      </div>   
  )
}

export default App